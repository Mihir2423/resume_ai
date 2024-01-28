import { connectDb, disconnectDb } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const cookieStore = cookies();
    cookieStore.set("token", "");
    return NextResponse.redirect("/");
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}
