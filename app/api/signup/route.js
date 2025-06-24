import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req) {
  const { email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (existing.length > 0) {
    return NextResponse.json({
      success: false,
      message: "User already exists",
    });
  }

  await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [
    email,
    hashedPassword,
  ]);
  return NextResponse.json({ success: true });
}
