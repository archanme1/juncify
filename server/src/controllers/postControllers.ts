import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const cognitoId = req.query.userId as string; // Cognito ID from frontend

    // For users posts if we visit profiel
    const userProfileId = req.query.userProfileId as string | undefined;
    const pageParam = req.query.pageParam as string | undefined;

    const filterType = req.query.filterType as
      | "foryou"
      | "following"
      | "otherjunction"
      | undefined;

    const page = Number(pageParam) || 1; // page param
    const LIMIT = 22;

    if (!cognitoId) {
      res.status(400).json({ error: "Missing userId" });
      return;
    }

    // Find the internal user ID
    const userRecord = await prisma.user.findFirst({
      where: {
        OR: [{ managerCognitoId: cognitoId }, { customerCognitoId: cognitoId }],
      },
      include: {
        manager: true,
        customer: true,
      },
    });

    if (!userRecord) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const internalUserId = userRecord.id;
    const isManager = !!userRecord.manager;
    const isCustomer = !!userRecord.customer;

    //  Reusable post select object DONT NEED WHEN WE USE use sepecifci highlights
    // const postSelect = {
    //   id: true,
    //   desc: true,
    //   createdAt: true,
    //   updatedAt: true,
    //   img: true,
    //   imgHeight: true,
    //   video: true,
    //   isSensitive: true,
    //   userId: true,
    //   rePostId: true,

    //   user: { include: { manager: true, customer: true } },
    //   likes: true,
    //   saves: true,
    //   comments: true,

    //   _count: { select: { likes: true, rePosts: true, comments: true } },
    // };

    // instead of validating userID at client we check here and just check length in client
    // For User Specific Highlights
    const postIncludeQuery = {
      user: { include: { manager: true, customer: true } },
      likes: { where: { userId: internalUserId }, select: { id: true } },
      rePosts: { where: { userId: internalUserId }, select: { id: true } },
      saves: { where: { userId: internalUserId }, select: { id: true } },
      _count: { select: { likes: true, rePosts: true, comments: true } },
      comments: true,
    };

    // if userProfileId is there
    if (userProfileId) {
      const profilePosts = await prisma.post.findMany({
        where: { parentPostId: null, userId: userProfileId },
        include: {
          ...postIncludeQuery,
          rePost: {
            include: {
              ...postIncludeQuery,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * LIMIT,
        take: LIMIT,
      });

      const totalProfilePosts = await prisma.post.count({
        where: { parentPostId: null, userId: userProfileId },
      });
      const hasMore = page * LIMIT < totalProfilePosts;

      await new Promise((resolve) => setTimeout(resolve, 1));

      res.status(200).json({ posts: profilePosts, hasMore });
      return;
    }

    // where condition by filterType
    let whereCondition: any = { parentPostId: null };

    if (filterType === "following") {
      // Posts from followed users + yourself
      const followingIds = (
        await prisma.follow.findMany({
          where: { followerId: internalUserId },
          select: { followingId: true },
        })
      ).map((f) => f.followingId);

      whereCondition.userId = { in: [internalUserId, ...followingIds] };
    }

    if (filterType === "foryou") {
      // For You feed — show only same-role posts
      if (isManager) {
        // Manager sees manager posts (including self)
        whereCondition = {
          parentPostId: null,
          user: {
            OR: [
              { id: internalUserId }, // own posts
              { manager: { isNot: null } }, // all manager posts
            ],
          },
        };
      } else if (isCustomer) {
        // Customer sees customer posts (including self)
        whereCondition = {
          parentPostId: null,
          user: {
            OR: [{ id: internalUserId }, { customer: { isNot: null } }],
          },
        };
      }
    }

    if (filterType === "otherjunction") {
      // Opposite-role posts
      if (isManager) {
        whereCondition.user = { customer: { not: null } };
      } else if (isCustomer) {
        whereCondition.user = { manager: { not: null } };
      }
    }

    const posts = await prisma.post.findMany({
      where: whereCondition,
      include: {
        rePost: {
          include: postIncludeQuery,
        },
        ...postIncludeQuery,
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * LIMIT,
      take: LIMIT,
    });

    const totalPosts = await prisma.post.count({ where: whereCondition });
    const hasMore = page * LIMIT < totalPosts;

    await new Promise((resolve) => setTimeout(resolve, 1));

    res.status(200).json({ posts, hasMore });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username } = req.params;

    if (!username) {
      res.status(400).json({ error: "Missing username" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ manager: { name: username } }, { customer: { name: username } }],
      },
      include: {
        manager: true,
        customer: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};
