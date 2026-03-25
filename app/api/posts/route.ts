import { NextResponse } from "next/server";
import { getPosts, createPost } from "@/lib/store";

export async function GET() {
  const posts = getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, author } = body;

  if (!title?.trim() || !content?.trim() || !author?.trim()) {
    return NextResponse.json({ error: "모든 필드를 입력해주세요." }, { status: 400 });
  }

  const post = createPost({ title, content, author });
  return NextResponse.json(post, { status: 201 });
}
