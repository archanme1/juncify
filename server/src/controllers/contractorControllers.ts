import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { S3Client } from "@aws-sdk/client-s3";
import { Location } from "@prisma/client";
import { Upload } from "@aws-sdk/lib-storage";
import axios from "axios";

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});

export const getContractors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      favoriteIds,
      priceMin,
      priceMax,
      teamSize,
      serviceAreaCoverage,
      contractorType,
      yearsOfExperienceMin,
      yearsOfExperienceMax,
      amenities,
      availableFrom,
      latitude,
      longitude,
    } = req.query;

    let whereConditions: Prisma.Sql[] = [];

    if (favoriteIds) {
      const favoriteIdsArray = (favoriteIds as string).split(",").map(Number);
      whereConditions.push(
        Prisma.sql`c.id IN (${Prisma.join(favoriteIdsArray)})`
      );
    }

    if (priceMin) {
      whereConditions.push(
        Prisma.sql`c."installationFee" >= ${Number(priceMin)}`
      );
    }

    if (priceMax) {
      whereConditions.push(
        Prisma.sql`c."installationFee" <= ${Number(priceMax)}`
      );
    }

    // if (teamSize && teamSize !== "any") {
    //   whereConditions.push(Prisma.sql`c.teamSize >= ${Number(teamSize)}`);
    // }

    // if (serviceAreaCoverage && serviceAreaCoverage !== "any") {
    //   whereConditions.push(
    //     Prisma.sql`c.serviceAreaCoverage >= ${Number(serviceAreaCoverage)}`
    //   );
    // }

    if (teamSize && teamSize !== "any" && !isNaN(Number(teamSize))) {
      whereConditions.push(Prisma.sql`c."teamSize" >= ${Number(teamSize)}`);
    }

    if (
      serviceAreaCoverage &&
      serviceAreaCoverage !== "any" &&
      !isNaN(Number(serviceAreaCoverage))
    ) {
      whereConditions.push(
        Prisma.sql`c."serviceAreaCoverage" >= ${Number(serviceAreaCoverage)}`
      );
    }

    if (yearsOfExperienceMin) {
      whereConditions.push(
        Prisma.sql`c."yearsOfExperience" >= ${Number(yearsOfExperienceMin)}`
      );
    }

    if (yearsOfExperienceMax) {
      whereConditions.push(
        Prisma.sql`c."yearsOfExperience" <= ${Number(yearsOfExperienceMax)}`
      );
    }

    if (contractorType && contractorType !== "any") {
      whereConditions.push(
        Prisma.sql`c."contractorType" = ${contractorType}::"ContractorType"`
      );
    }

    if (amenities && amenities !== "any") {
      const amenitiesArray = (amenities as string).split(",");
      whereConditions.push(
        Prisma.sql`c.amenities @> ${amenitiesArray}::"Amenity"[]`
      );
    }

    if (availableFrom && availableFrom !== "any") {
      const availableFromDate =
        typeof availableFrom === "string" ? availableFrom : null;
      if (availableFromDate) {
        const date = new Date(availableFromDate);
        if (!isNaN(date.getTime())) {
          whereConditions.push(
            Prisma.sql`EXISTS (
              SELECT 1 FROM "Booking" b 
              WHERE b."contractorId" = c.id 
              AND b."startDate" <= ${date}
            )`
          );
        }
      }
    }

    if (latitude && longitude) {
      const lat = parseFloat(latitude as string);
      const lng = parseFloat(longitude as string);
      const radiusInKilometers = 1000;
      const degrees = radiusInKilometers / 111; // Converts kilometers to degrees

      whereConditions.push(
        Prisma.sql`ST_DWithin(
          l.coordinates::geometry,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
          ${degrees}
        )`
      );
    }

    // console.log("From Server: ", whereConditions);

    const completeQuery = Prisma.sql`
      SELECT 
        c.*,
        json_build_object(
          'id', l.id,
          'address', l.address,
          'city', l.city,
          'state', l.state,
          'country', l.country,
          'postalCode', l."postalCode",
          'coordinates', json_build_object(
            'longitude', ST_X(l."coordinates"::geometry),
            'latitude', ST_Y(l."coordinates"::geometry)
          )
        ) as location
      FROM "Contractor" c
      JOIN "Location" l ON c."locationId" = l.id
      ${
        whereConditions.length > 0
          ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
          : Prisma.empty
      }
    `;

    const contractors = await prisma.$queryRaw(completeQuery);

    res.json(contractors);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving contractors: ${error.message}` });
  }
};

export const getContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // 1. findUnique or update does not really matters with prisma for view mutation
    const contractor = await prisma.contractor.update({
      where: { id: Number(id) },
      data: {
        numberOfReviews: {
          increment: 1,
        },
      },
      include: {
        location: true,
      },
    });
    if (contractor) {
      const coordinates: { coordinates: string }[] =
        await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${contractor.location.id}`;

      const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
      const longitude = geoJSON.coordinates[0];
      const latitude = geoJSON.coordinates[1];

      const contractorWithCoordinates = {
        ...contractor,
        location: {
          ...contractor.location,
          coordinates: {
            longitude,
            latitude,
          },
        },
      };
      res.json(contractorWithCoordinates);
    }
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error retrieving contractor: ${err.message}` });
  }
};

export const createContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    const {
      address,
      city,
      state,
      country,
      postalCode,
      managerCognitoId,
      ...contractorData
    } = req.body;

    //     const photoUrls = await Promise.all(
    //   files.map(async (file) => {
    //     const uploadParams = {
    //       Bucket: process.env.S3_BUCKET_NAME!,
    //       Key: `properties/${Date.now()}-${file.originalname}`,
    //       Body: file.buffer,
    //       ContentType: file.mimetype,
    //     };

    //     const uploadResult = await new Upload({
    //       client: s3Client,
    //       params: uploadParams,
    //     }).done();

    //     return uploadResult.Location;
    //   })
    // );

    // https://nominatim.openstreetmap.org/ui/search.html
    const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams(
      {
        street: address,
        city,
        country,
        postalcode: postalCode,
        format: "json",
        limit: "1",
      }
    ).toString()}`;
    const geocodingResponse = await axios.get(geocodingUrl, {
      headers: {
        "User-Agent": "Juncify (archanme1@gmail.com",
      },
    });
    const [longitude, latitude] =
      geocodingResponse.data[0]?.lon && geocodingResponse.data[0]?.lat
        ? [
            parseFloat(geocodingResponse.data[0]?.lon),
            parseFloat(geocodingResponse.data[0]?.lat),
          ]
        : [0, 0];

    // create location
    const [location] = await prisma.$queryRaw<Location[]>`
      INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
      VALUES (${address}, ${city}, ${state}, ${country}, ${postalCode}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
      RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates;
    `;

    // create contractor
    const newContractor = await prisma.contractor.create({
      data: {
        ...contractorData,
        // photoUrls,
        locationId: location.id,
        managerCognitoId,
        amenities:
          typeof contractorData.amenities === "string"
            ? contractorData.amenities.split(",")
            : [],
        highlights:
          typeof contractorData.highlights === "string"
            ? contractorData.highlights.split(",")
            : [],
        isEmergencyAvailable: contractorData.isEmergencyAvailable === "true",
        offersOnSiteParking: contractorData.offersOnSiteParking === "true",
        hourlyRate: parseFloat(contractorData.hourlyRate),
        advancePayment: parseFloat(contractorData.advancePayment),
        installationFee: parseFloat(contractorData.installationFee),
        teamSize: parseInt(contractorData.teamSize),
        serviceAreaCoverage: parseFloat(contractorData.serviceAreaCoverage),
        yearsOfExperience: parseInt(contractorData.yearsOfExperience),
      },
      include: {
        location: true,
        manager: true,
      },
    });

    res.status(201).json(newContractor);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error creating contractor: ${err.message}` });
  }
};

export const getContractorBookings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const contractorLeases = await prisma.contractor.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        bookings: {
          include: {
            customer: true,
          },
        },
      },
    });

    if (!contractorLeases) {
      res.status(404).json({ message: "Contractor not found" });
      return;
    }

    res.status(200).json(contractorLeases.bookings);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching contractor leases: ${error.message}` });
  }
};

export const removeManagedContractor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { contractorId, cognitoId } = req.params;

    const manager = await prisma.manager.findUnique({
      where: { cognitoId },
      include: { managedContractors: true },
    });

    if (!manager) {
      res.status(404).json({ message: "Manager not found" });
      return;
    }

    const contractorIdNumber = Number(contractorId);

    const isContractorManaged = manager.managedContractors.some(
      (contractor) => contractor.id === contractorIdNumber
    );

    if (!isContractorManaged) {
      res.status(403).json({
        message: "Contractor does not belong to this manager",
      });
      return;
    }

    const deletedContractor = await prisma.contractor.delete({
      where: { id: contractorIdNumber },
    });

    res.status(200).json(deletedContractor);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error deleting contractor: ${error.message}` });
  }
};
