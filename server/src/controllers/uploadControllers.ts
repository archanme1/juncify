import { Request, Response } from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../config/s3";

export const getPresignedUrls = async (
  req: Request,
  res: Response
) => {
  try {
    const { files } = req.body;

    /**
     * files = [
     *   { fileName: "abc.jpg", fileType: "image/jpeg" }
     * ]
     */

    const signedUrls = await Promise.all(
      files.map(async (file: any) => {
        const key = `contractors/${Date.now()}-${file.fileName}`;

        const command = new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: key,
          ContentType: file.fileType,
        });

        const uploadUrl = await getSignedUrl(s3Client, command, {
          expiresIn: 300, // 5 minutes
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