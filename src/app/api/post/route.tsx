import { NextResponse } from "next/server";
import posts from "@/content/posts.json";
import { generatePostId, streamToJSON } from "@/lib/utils";
import { PostProps } from "@/models/Props";
import fs from "fs";
import { CONTENT_PATH } from "@/lib/paths";

export async function POST(req: Request) {
  const { title, content } = await req.json();

  const newPost: PostProps = {
    id: generatePostId(),
    title: title,
    content: content,
  };

  posts.push(newPost);
  fs.writeFileSync(CONTENT_PATH + "posts.json", JSON.stringify(posts));

  return NextResponse.json({
    message: "Post successfully created!",
    status: 200,
  });
}