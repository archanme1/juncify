import { RequestHandler } from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../config/s3";
import { v4 as uuidv4 } from "uuid";

export const getPresignedUrls: RequestHandler = async (req, res) => {
  try {
    const { files } = req.body;

    if (!files || !Array.isArray(files)) {
      res.status(400).json({ message: "Files array is required" });
      return;
    }

    if (files.length > 10) {
      res.status(400).json({ message: "Maximum 10 files allowed" });
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    const allowedExtensions = ["jpg", "jpeg", "png", "webp"];

    const signedUrls = await Promise.all(
      files.map(async (file: any) => {

        if (!allowedTypes.includes(file.fileType)) {
          throw new Error("Invalid file type");
        }

        const extension = file.fileName?.split(".").pop()?.toLowerCase() || "jpg";

        if (!allowedExtensions.includes(extension)) {
          throw new Error("Invalid file extension");
        }

        const key = `contractors/${uuidv4()}.${extension}`;

        const command = new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: key,
          ContentType: file.fileType,
        });

        const uploadUrl = await getSignedUrl(s3Client, command, {
          expiresIn: 300,
        });

        return {
          uploadUrl,
          fileUrl: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
        };
      })
    );

    res.status(200).json(signedUrls);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};