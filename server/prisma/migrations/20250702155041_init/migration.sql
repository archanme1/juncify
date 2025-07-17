-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "Highlight" AS ENUM ('LicensedProfessional', 'EmergencySupport', 'FreeConsultation', 'QuickResponse', 'QualityGuarantee', 'FlexibleHours', 'RemoteSupportAvailable', 'FreeEstimates', 'SameDayService', 'EcoFriendly', 'AffordablePricing', 'LocallyOwned', 'YearsOfExperience');

-- CreateEnum
CREATE TYPE "Amenity" AS ENUM ('FreeInspection', 'OnSiteInspection', 'WarrantyIncluded', 'FlexibleScheduling', 'Support247', 'OnlinePayment', 'InvoiceAvailable', 'FinancingOptions', 'ReferralDiscount', 'PostJobCleanup');

-- CreateEnum
CREATE TYPE "ContractorType" AS ENUM ('HVAC', 'Plumbing', 'Electrical', 'Carpentry', 'Roofing', 'Painting', 'Drywall', 'ApplianceRepair', 'Landscaping', 'Interlocking', 'Masonry', 'Flooring', 'Handyman', 'PestControl', 'Welding', 'Insulation', 'SecuritySystems', 'SmartHome');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('Pending', 'Denied', 'Approved');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Paid', 'PartiallyPaid', 'Overdue');

-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hourlyRate" DOUBLE PRECISION NOT NULL,
    "advancePayment" DOUBLE PRECISION NOT NULL,
    "installationFee" DOUBLE PRECISION NOT NULL,
    "photoUrls" TEXT[],
    "amenities" "Amenity"[],
    "highlights" "Highlight"[],
    "isEmergencyAvailable" BOOLEAN NOT NULL DEFAULT false,
    "offersOnSiteParking" BOOLEAN NOT NULL DEFAULT false,
    "yearsOfExperience" INTEGER NOT NULL,
    "serviceAreaCoverage" DOUBLE PRECISION NOT NULL,
    "teamSize" INTEGER NOT NULL,
    "contractorType" "ContractorType" NOT NULL,
    "postedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "averageRating" DOUBLE PRECISION DEFAULT 0,
    "numberOfReviews" INTEGER DEFAULT 0,
    "locationId" INTEGER NOT NULL,
    "managerCognitoId" TEXT NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "cognitoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "cognitoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "coordinates" geography(Point, 4326) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "applicationDate" TIMESTAMP(3) NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "contractorId" INTEGER NOT NULL,
    "customerCognitoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "message" TEXT,
    "bookingId" INTEGER,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalFee" DOUBLE PRECISION NOT NULL,
    "advanceFee" DOUBLE PRECISION NOT NULL,
    "contractorId" INTEGER NOT NULL,
    "customerCognitoId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amountDue" DOUBLE PRECISION NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL,
    "bookingId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomerFavorites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CustomerFavorites_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CustomerContractors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CustomerContractors_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manager_cognitoId_key" ON "Manager"("cognitoId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cognitoId_key" ON "Customer"("cognitoId");

-- CreateIndex
CREATE UNIQUE INDEX "Application_bookingId_key" ON "Application"("bookingId");

-- CreateIndex
CREATE INDEX "_CustomerFavorites_B_index" ON "_CustomerFavorites"("B");

-- CreateIndex
CREATE INDEX "_CustomerContractors_B_index" ON "_CustomerContractors"("B");

-- AddForeignKey
ALTER TABLE "Contractor" ADD CONSTRAINT "Contractor_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contractor" ADD CONSTRAINT "Contractor_managerCognitoId_fkey" FOREIGN KEY ("managerCognitoId") REFERENCES "Manager"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_customerCognitoId_fkey" FOREIGN KEY ("customerCognitoId") REFERENCES "Customer"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerCognitoId_fkey" FOREIGN KEY ("customerCognitoId") REFERENCES "Customer"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerFavorites" ADD CONSTRAINT "_CustomerFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerFavorites" ADD CONSTRAINT "_CustomerFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerContractors" ADD CONSTRAINT "_CustomerContractors_A_fkey" FOREIGN KEY ("A") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerContractors" ADD CONSTRAINT "_CustomerContractors_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
