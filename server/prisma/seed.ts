import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// Insert location data (with PostGIS coordinates)
async function insertLocationData(locations: any[]) {
  for (const location of locations) {
    const { id, country, city, state, address, postalCode, coordinates } =
      location;
    try {
      await prisma.$executeRaw`
        INSERT INTO "Location" ("id","country","city","state","address","postalCode","coordinates")
        VALUES (${id},${country},${city},${state},${address},${postalCode}, ST_GeomFromText(${coordinates}, 4326));
      `;
      console.log(`Inserted location for ${city}`);
    } catch (error) {
      console.error(`Error inserting location for ${city}:`, error);
    }
  }
}

// Reset sequence for numeric ID tables
async function resetSequence(tableName: string) {
  try {
    const result: any[] = await prisma.$queryRawUnsafe(
      `SELECT MAX(id) AS max_id FROM "${tableName}";`
    );
    const maxId = result[0]?.max_id ?? 0;
    await prisma.$executeRawUnsafe(
      `ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH ${maxId + 1};`
    );
    console.log(`Reset sequence for ${tableName} to start from ${maxId + 1}`);
  } catch (error) {
    // Some tables (like User) use string IDs, skip safely
  }
}

// Delete legacy JSON tables
async function deleteAllLegacyData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) =>
    toPascalCase(path.basename(fileName, path.extname(fileName)))
  );

  for (const modelName of modelNames.reverse()) {
    const model = (prisma as any)[toCamelCase(modelName)];
    if (!model) continue;

    try {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing data from ${modelName}:`, error);
    }
  }
}

// Delete social tables
async function deleteAllSocialData() {
  const socialModels = ["SavedPosts", "Follow", "Like", "Post", "User"];
  for (const modelName of socialModels) {
    try {
      const model = (prisma as any)[toCamelCase(modelName)];
      if (!model) continue;
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing social table ${modelName}:`, error);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");
  const orderedFileNames = [
    "location.json",
    // "manager.json",
    "contractor.json",
    "customer.json",
    "booking.json",
    "application.json",
    "payment.json",
  ];

  // Step 1: Clear old data
  await deleteAllLegacyData(orderedFileNames);
  await deleteAllSocialData();

  // Step 2: Seed legacy JSON data
  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = toPascalCase(
      path.basename(fileName, path.extname(fileName))
    );

    if (modelName === "Location") {
      await insertLocationData(jsonData);
    } else {
      const model = (prisma as any)[toCamelCase(modelName)];
      for (const item of jsonData) {
        await model.create({ data: item });
      }
      console.log(`Seeded ${modelName} with data from ${fileName}`);
    }

    await resetSequence(modelName);
    await sleep(500);
  }

  // Step 3: Seed social data

  // Create 5 users
  const users: any[] = [];
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: {
        id: `user${i}`,
        // Link user1 to manager
        ...(i === 1 && {
          manager: {
            connect: {
              cognitoId: "7cdd9508-c091-7032-fa0a-9d120aa962c2",
            },
          },
        }),
      },
    });
    users.push(user);
  }
  console.log(`${users.length} users created.`);

  // Create posts for users
  const posts: any[] = [];
  for (const user of users) {
    for (let j = 1; j <= 5; j++) {
      const post = await prisma.post.create({
        data: {
          desc: `Post ${j} by ${user.id}`,
          userId: user.id,
        },
      });
      posts.push(post);
    }
  }
  console.log("Posts created.");

  // Create follows
  await prisma.follow.createMany({
    data: [
      { followerId: users[0].id, followingId: users[1].id },
      { followerId: users[0].id, followingId: users[2].id },
      { followerId: users[1].id, followingId: users[3].id },
      { followerId: users[2].id, followingId: users[4].id },
      { followerId: users[3].id, followingId: users[0].id },
    ],
  });
  console.log("Follows created.");

  // Create likes
  await prisma.like.createMany({
    data: posts.slice(0, 5).map((post, i) => ({
      userId: users[i].id,
      postId: post.id,
    })),
  });
  console.log("Likes created.");

  // Create comments (comments are posts with parentPostId)
  for (let i = 0; i < posts.length; i++) {
    await prisma.post.create({
      data: {
        desc: `Comment on Post ${posts[i].id} by ${users[(i + 1) % 5].id}`,
        userId: users[(i + 1) % 5].id,
        parentPostId: posts[i].id,
      },
    });
  }
  console.log("Comments created.");

  // Create reposts
  for (let i = 0; i < posts.length; i++) {
    await prisma.post.create({
      data: {
        desc: `Repost of Post ${posts[i].id} by ${users[(i + 2) % 5].id}`,
        userId: users[(i + 2) % 5].id,
        rePostId: posts[i].id,
      },
    });
  }
  console.log("Reposts created.");

  // Create saved posts
  await prisma.savedPosts.createMany({
    data: [
      { userId: users[0].id, postId: posts[1].id },
      { userId: users[1].id, postId: posts[2].id },
      { userId: users[2].id, postId: posts[3].id },
      { userId: users[3].id, postId: posts[4].id },
      { userId: users[4].id, postId: posts[0].id },
    ],
  });
  console.log("Saved posts created.");

  // Reset sequences for numeric tables
  await resetSequence("Post");
  await resetSequence("Like");
  await resetSequence("Follow");
  await resetSequence("SavedPosts");

  console.log("✅ Social system seeding complete.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
