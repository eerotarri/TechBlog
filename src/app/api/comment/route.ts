import { NextResponse } from "next/server";
import comments from "@/content/comments.json";
import { streamToJSON } from "@/lib/utils";
import { CONTENT_PATH } from "@/lib/paths";
import { CreateCommentProps, CommentProps } from "@/models/Props";
import fs from "fs";
import { randomUUID } from "crypto";

export async function GET() {
  return NextResponse.json({ comments: comments });
}

export async function POST(req: Request) {
  if (req.body) {
    const { postId, author, content, timestamp } = (await streamToJSON(
      req.body!
    )) as CreateCommentProps;

    const newComment: CommentProps = {
      postId: postId,
      id: randomUUID(),
      author: author,
      content: content,
      timestamp: timestamp,
    };

    comments.push(newComment);
    fs.writeFileSync(CONTENT_PATH + "comments.json", JSON.stringify(comments));
  }

  return NextResponse.json({ comments: comments });
}
