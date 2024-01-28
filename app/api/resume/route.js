import { connectDb, disconnectDb } from "@/lib/db";
import Resume from "@/models/resume-model";
import User from "@/models/user-model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const data = await req.json();
    const userid = data.user_id;
    const user = await User.findById(userid);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const resume = await Resume.create(data);
    return NextResponse.json(
      {
        data: resume,
        message: "Resume created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}
