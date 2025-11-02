import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  console.log("hittinh");

  try {
    // ─────────────────────────────────────────────
    // Fetch posts
    // ─────────────────────────────────────────────
    const posts = await prisma.post.findMany({
      take: 10,
      skip: 0,
      orderBy: { createdAt: "desc" },
    });

    // ─────────────────────────────────────────────
    // Return posts
    // ─────────────────────────────────────────────
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
