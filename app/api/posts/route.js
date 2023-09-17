import { NextResponse } from "next/server";
import posts from './data.json'

export async function GET() {
    return NextResponse.json(posts);
}

export async function POST(req) {
    const { userId, id, title, body } = await req.json();

    const newPost = {
        userId,
        id,
        title,
        body
    }

    posts.push(newPost);

    return NextResponse.json(posts);
}