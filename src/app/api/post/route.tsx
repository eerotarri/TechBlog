import { NextResponse } from "next/server";
import posts from "@/content/posts.json";
import { PostProps } from "@/models/Props";
import fs from "fs";
import { CONTENT_PATH } from "@/lib/paths";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const { title, content } = await req.json();

  const newPost: PostProps = {
    id: randomUUID(),
    title: title,
    content: content,
  };

  posts.push(newPost);
  fs.writeFileSync(CONTENT_PATH + "posts.json", JSON.stringify(posts));

  return NextResponse.json({
    message: "Post successfully created!",
    id: newPost.id,
    status: 200,
  });
}
