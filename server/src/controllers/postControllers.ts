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

      await new Promise((resolve) => setTimeout(resolve, 500));

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
        whereCondition.user = { customer: { isNot: null } };
      } else if (isCustomer) {
        whereCondition.user = { manager: { isNot: null } };
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

    await new Promise((resolve) => setTimeout(resolve, 500));

    res.status(200).json({ posts, hasMore });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, postId } = req.params;
    const cognitoId = req.query.userId as string; // Logged-in user's cognitoId

    if (!username || !postId) {
      res.status(400).json({ error: "Missing username or postId" });
      return;
    }

    // Find the internal user (viewer)
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

    // Build reusable include query (same structure as getPosts)
    const postIncludeQuery = {
      user: { include: { manager: true, customer: true } },
      likes: { where: { userId: internalUserId }, select: { id: true } },
      rePosts: { where: { userId: internalUserId }, select: { id: true } },
      saves: { where: { userId: internalUserId }, select: { id: true } },
      _count: { select: { likes: true, rePosts: true, comments: true } },
    };

    // Find the target user whose post we’re viewing
    const profileUser = await prisma.user.findFirst({
      where: {
        OR: [{ manager: { name: username } }, { customer: { name: username } }],
      },
      include: {
        manager: true,
        customer: true,
      },
    });

    if (!profileUser) {
      res.status(404).json({ error: "Profile user not found" });
      return;
    }

    //  Fetch the single post
    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
      include: {
        rePost: { include: postIncludeQuery },
        ...postIncludeQuery,
        comments: {
          include: {
            user: { include: { manager: true, customer: true } },
            likes: { where: { userId: internalUserId }, select: { id: true } },
            _count: { select: { likes: true, rePosts: true, comments: true } },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Failed to fetch post" });
  }
};

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username } = req.params;
    const cognitoId = req.query.userId as string; // logged-in user's Cognito ID

    if (!username) {
      res.status(400).json({ error: "Missing username" });
      return;
    }

    // Logged-in user internal ID
    const formattedUserId = cognitoId ? `user_${cognitoId}` : undefined;

    // Find target profile user (manager or customer)
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ manager: { name: username } }, { customer: { name: username } }],
      },
      include: {
        manager: true,
        customer: true,
        _count: {
          select: {
            followers: true,
            followings: true,
          },
        },
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // ✅ Determine if logged-in user follows this profile user
    let isFollowed = false;
    if (formattedUserId) {
      const follow = await prisma.follow.findFirst({
        where: {
          followerId: formattedUserId,
          followingId: user.id,
        },
      });
      isFollowed = !!follow;
    }

    res.status(200).json({
      ...user,
      isFollowed,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

export const getFriendRecommendations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.query.userId as string;

    if (!userId) {
      res.status(400).json({ error: "Missing userId" });
      return;
    }

    //  Find who the logged-in user follows
    const following = await prisma.follow.findMany({
      where: { followerId: userId },
      select: { followingId: true },
    });
    const followedUserIds = following.map((f) => f.followingId);

    // Find users that my followings follow (friends of friends)
    const recommendations = await prisma.user.findMany({
      where: {
        id: {
          not: userId, // exclude me
          notIn: followedUserIds, // exclude already followed users
        },
        followers: {
          some: {
            followerId: { in: followedUserIds }, // followed by my followings
          },
        },
      },
      take: 5,
      select: {
        id: true,
        manager: { select: { name: true, cognitoId: true } },
        customer: { select: { name: true, cognitoId: true } },
      },
    });

    res.status(200).json({ recommendations });
  } catch (error) {
    console.error("Error fetching friend recommendations:", error);
    res.status(500).json({ error: "Failed to fetch friend recommendations" });
  }
};

//INTERACTION (Check when new manager is signed up with new post ❌ NO SEED)
export const updatePostInteraction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.query.userId as string;
    const postId = Number(req.query.postId);
    const type = req.query.type as "like" | "repost" | "save";

    if (!userId || !postId || !type) {
      res.status(400).json({ error: "Missing userId, postId, or type" });
      return;
    }

    let actionMessage = "";

    // LIKE
    if (type === "like") {
      const existingLike = await prisma.like.findFirst({
        where: { userId, postId },
      });

      if (existingLike) {
        await prisma.like.delete({ where: { id: existingLike.id } });
        actionMessage = "You unliked the post!";
      } else {
        await prisma.like.create({ data: { userId, postId } });
        actionMessage = "You liked the post!";
      }
    }

    // SAVE
    else if (type === "save") {
      const existingSave = await prisma.savedPosts.findFirst({
        where: { userId, postId },
      });

      if (existingSave) {
        await prisma.savedPosts.delete({ where: { id: existingSave.id } });
        actionMessage = "Removed from saved posts!";
      } else {
        await prisma.savedPosts.create({ data: { userId, postId } });
        actionMessage = "You saved the post!";
      }
    }

    // REPOST
    else if (type === "repost") {
      // Toggle repost normally
      const existingRepost = await prisma.post.findFirst({
        where: {
          userId,
          rePostId: postId,
        },
      });

      if (existingRepost) {
        await prisma.post.delete({ where: { id: existingRepost.id } });
        actionMessage = "You removed your repost!";
      } else {
        await prisma.post.create({
          data: {
            userId,
            rePostId: postId,
          },
        });
        actionMessage = "You reposted the post!";
      }
    }

    res.status(200).json({ success: actionMessage, type });
  } catch (error) {
    console.error("❌ Error updating interaction:", error);
    res.status(500).json({ error: "Failed to update post interaction" });
  }
};

export const addComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, postId, desc } = req.body;

    console.log(userId, postId, desc);

    if (!userId || !postId || !desc) {
      res.status(400).json({ error: "Missing userId, postId, or desc" });
      return;
    }

    // Find the internal user ID
    const userRecord = await prisma.user.findFirst({
      where: {
        OR: [{ managerCognitoId: userId }, { customerCognitoId: userId }],
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

    const formattedUserId = `user_${userId}`;

    const newComment = await prisma.post.create({
      data: {
        desc,
        userId: formattedUserId,
        parentPostId: Number(postId),
      },
      include: {
        user: true,
      },
    });

    res.status(200).json({ success: true, comment: newComment });
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, desc } = req.body;

    if (!userId || !desc) {
      res.status(400).json({ error: "Missing userId or description" });
      return;
    }

    console.log("test ", userId, desc);

    // Find matching user record
    const userRecord = await prisma.user.findFirst({
      where: {
        OR: [{ managerCognitoId: userId }, { customerCognitoId: userId }],
      },
    });

    if (!userRecord) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const formattedUserId = `user_${userId}`;

    // Create the post
    const newPost = await prisma.post.create({
      data: {
        desc,
        userId: formattedUserId,
      },
      include: {
        user: true,
      },
    });

    res.status(201).json({ success: true, post: newPost });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const toggleFollowUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username } = req.body; // visiting profile username
    const followerCognitoId = req.body.followerCognitoId as string; // logged-in user Cognito ID

    if (!username || !followerCognitoId) {
      res.status(400).json({
        success: false,
        message: "Missing username or followerCognitoId",
      });
      return;
    }

    // Resolve the target profile (manager or customer)
    const targetUser = await prisma.user.findFirst({
      where: {
        OR: [{ manager: { name: username } }, { customer: { name: username } }],
      },
      select: { id: true },
    });

    if (!targetUser) {
      res
        .status(404)
        .json({ success: false, message: "Target user not found" });
      return;
    }

    // Format both user IDs
    const formattedFollowerId = `user_${followerCognitoId}`; // logged-in user
    const formattedFollowingId = targetUser.id; // profile user

    // Prevent self-follow
    if (formattedFollowerId === formattedFollowingId) {
      res
        .status(400)
        .json({ success: false, message: "You cannot follow yourself" });
      return;
    }

    // Check if follow already exists
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: formattedFollowerId,
        followingId: formattedFollowingId,
      },
    });

    let action: "followed" | "unfollowed" = "followed";

    if (existingFollow) {
      await prisma.follow.delete({ where: { id: existingFollow.id } });
      action = "unfollowed";
    } else {
      await prisma.follow.create({
        data: {
          followerId: formattedFollowerId,
          followingId: formattedFollowingId,
        },
      });
    }

    // Update counts for the profile user
    const [followers, followings] = await Promise.all([
      prisma.follow.count({ where: { followingId: formattedFollowingId } }), // people who follow the profile user
      prisma.follow.count({ where: { followerId: formattedFollowingId } }), // people the profile user follows
    ]);

    // Check follow state for the logged-in user
    const isFollowed = action === "followed";

    res.status(200).json({
      success: true,
      action,
      counts: { followers, followings },
      isFollowed,
    });
  } catch (error) {
    console.error("Follow/unfollow error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
