import { connectDb, disconnectDb } from "@/lib/db";
import Resume from "@/models/resume-model";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    await connectDb();
    const { id } = context.params;
    const resume = await Resume.findById(id);
    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }
    return NextResponse.json({ data: resume }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}

export async function DELETE(req, context) {
  try {
    await connectDb();
    const { id } = context.params;
    const resume = await Resume.findByIdAndDelete(id);
    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        data: resume,
        message: "Resume deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectDb();
  }
}