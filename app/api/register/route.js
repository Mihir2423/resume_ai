import { connectDb, disconnectDb } from "@/lib/db";
import User from "@/models/user-model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDb();
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    // Return the user
    return NextResponse.json(
      {
        data: user,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}
