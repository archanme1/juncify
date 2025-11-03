import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const cognitoId = req.query.userId as string; // Cognito ID from frontend
    if (!cognitoId) {
      res.status(400).json({ error: "Missing userId" });
      return;
    }

    // Find the internal user ID
    const userRecord = await prisma.user.findFirst({
      where: { managerCognitoId: cognitoId },
    });

    if (!userRecord) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const internalUserId = userRecord.id;

    const userProfileId = req.query.userProfileId as string | undefined;

    // console.log("userId: ", internalUserId);
    // console.log("userProfileId: ", userProfileId);

    // Build where condition
    const whereCondition = userProfileId
      ? { parentPostId: null, userId: userProfileId } // posts from clicked user
      : {
          parentPostId: null,
          userId: {
            in: [
              internalUserId,
              ...(
                await prisma.follow.findMany({
                  where: { followerId: internalUserId },
                  select: { followingId: true },
                })
              ).map((f) => f.followingId),
            ],
          },
        };

    const posts = await prisma.post.findMany({
      where: whereCondition,
      include: {
        user: {
          include: {
            manager: true,
            customer: true,
          },
        },
        rePost: {
          include: {
            user: {
              include: {
                manager: true,
                customer: true,
              },
            },
          },
        },
        likes: true,
        saves: true,
        comments: true,
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
