import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const cognitoId = req.query.userId as string; // Cognito ID from frontend

    // For users posts if we visit profiel
    const userProfileId = req.query.userProfileId as string | undefined;

    const filterType = req.query.filterType as
      | "foryou"
      | "following"
      | "otherjunction"
      | undefined;

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

    // console.log("userId: ", internalUserId);
    // console.log("userProfileId: ", userProfileId);

    // if userProfileId is there
    if (userProfileId) {
      // console.log("executed user profile side");

      const profilePosts = await prisma.post.findMany({
        where: { parentPostId: null, userId: userProfileId },
        include: {
          user: { include: { manager: true, customer: true } },
          rePost: {
            include: { user: { include: { manager: true, customer: true } } },
          },
          likes: true,
          saves: true,
          comments: true,
        },
        orderBy: { createdAt: "desc" },
      });
      res.status(200).json(profilePosts);
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
    // const whereCondition = userProfileId
    //   ? { parentPostId: null, userId: userProfileId } // posts from clicked user
    //   : {
    //       parentPostId: null,
    //       userId: {
    //         in: [
    //           internalUserId,
    //           ...(
    //             await prisma.follow.findMany({
    //               where: { followerId: internalUserId },
    //               select: { followingId: true },
    //             })
    //           ).map((f) => f.followingId),
    //         ],
    //       },
    //     };

    // console.log("execution continue");

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

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username } = req.params; // ✅ Extract from URL params

    if (!username) {
      res.status(400).json({ error: "Missing username" });
      return;
    }

    // ✅ Find the user by username and include related info
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
