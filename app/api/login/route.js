import { connectDb, disconnectDb } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user-model";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDb();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid User" }, { status: 401 });
    }
    // Check if password matches
    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 401 });
    }
    const token = jwt.sign(
      { userId: user._id, username: user.name, role: user.role },
      process.env.NEXT_PUBLIC_JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    // Send token in a cookie
    const cookieStore = cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "Lax",
      path: "/",
    });
    return NextResponse.json({
      data: user,
      token,
      message: "Logged in successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}
