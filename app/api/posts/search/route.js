import { NextResponse } from "next/server";
import posts from "../data.json";

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')
    const filteredPosts = posts.filter(posts => posts.title.toLowerCase().includes(query.toLowerCase()))
    return NextResponse.json(filteredPosts);
}