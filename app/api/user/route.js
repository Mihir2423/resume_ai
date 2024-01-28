import { connectDb, disconnectDb } from "@/lib/db";
import User from "@/models/user-model";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDb();
    const users = await User.find({});
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}
