import { NextResponse } from "next/server";
import comments from "@/content/comments.json";

export async function GET({ params }: { params: { id: string } }) {
  const postComments = comments.filter(
    (comment) => comment.postId === params.id
  );

  return NextResponse.json({ comments: postComments });
}
