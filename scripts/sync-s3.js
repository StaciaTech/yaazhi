import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET;
const PREFIX = "yaazhi/";

async function syncVideos() {
  console.log(`Starting S3 Sync for bucket: ${BUCKET_NAME}, prefix: ${PREFIX}`);

  try {
    let continuationToken = undefined;
    const allObjects = [];

    do {
      const command = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        Prefix: PREFIX,
        ContinuationToken: continuationToken,
      });
      const response = await s3Client.send(command);
      if (response.Contents) {
        allObjects.push(...response.Contents);
      }
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    console.log(
      `Found ${allObjects.length} objects. Generating signed URLs...`
    );

    // Process objects
    const categoryMap = {}; // { categoryName: { videoBaseName: { videoUrl, thumbUrl, title } } }

    for (const obj of allObjects) {
      const key = obj.Key;
      if (!key || key === PREFIX) continue; // Skip root folder

      // Expected format: yaazhi/<category>/<filename>
      const relativeKey = key.slice(PREFIX.length);
      const parts = relativeKey.split("/");

      if (parts.length < 2) continue; // Skip files directly in yaazhi/ (if any, or empty folders)

      const category = parts[0];
      const filename = parts[parts.length - 1];

      if (!filename) continue; // Is a directory marker

      // Determine type
      const ext = path.extname(filename).toLowerCase();
      const basename = path.basename(filename, ext);

      // const getCommand = new GetObjectCommand({
      //   Bucket: BUCKET_NAME,
      //   Key: key,
      // });
      // // 7 days expiration (604800 seconds)
      // const signedUrl = await getSignedUrl(s3Client, getCommand, {
      //   expiresIn: 604800,
      // });

      const publicUrl = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURI(key)}`;

      // Initialize category bucket
      if (!categoryMap[category]) {
        categoryMap[category] = {};
      }

      // Initialize file bucket
      if (!categoryMap[category][basename]) {
        categoryMap[category][basename] = { title: basename };
      }

      if ([".mp4", ".mov", ".webm", ".mkv"].includes(ext)) {
        categoryMap[category][basename].videoUrl = publicUrl; // Use publicUrl
      } else if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        categoryMap[category][basename].thumbnail = publicUrl; // Use publicUrl
      }

      // // Initialize category bucket
      // if (!categoryMap[category]) {
      //   categoryMap[category] = {};
      // }

      // // Initialize file bucket (grouping by basename to pair video + thumb)
      // if (!categoryMap[category][basename]) {
      //   categoryMap[category][basename] = { title: basename };
      // }

      // if ([".mp4", ".mov", ".webm", ".mkv"].includes(ext)) {
      //   categoryMap[category][basename].videoUrl = signedUrl;
      // } else if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      //   categoryMap[category][basename].thumbnail = signedUrl;
      // }
    }

    // Flatten to final JSON structure
    const output = Object.keys(categoryMap)
      .map((category) => {
        const videosObj = categoryMap[category];
        const videos = Object.values(videosObj)
          .filter((v) => v.videoUrl) // Only include entries with a video
          .map((v) => ({
            title: v.title.replace(/_/g, " "), // Clean up title
            videoUrl: v.videoUrl,
            thumbnail: v.thumbnail || "", // Default empty if no thumb
          }));

        return {
          category: category.replace(/_/g, " "),
          videos,
        };
      })
      .filter((c) => c.videos.length > 0);

    const outputPath = path.resolve(__dirname, "../src/data/s3-videos.json");

    // Ensure dir exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(
      `Successfully wrote ${output.length} categories to ${outputPath}`
    );
  } catch (error) {
    console.error("Error syncing S3:", error);
    process.exit(1);
  }
}

syncVideos();
