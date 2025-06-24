import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req) {
  const { email, password } = await req.json();
  const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (users.length === 0) {
    return NextResponse.json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const isMatch = await bcrypt.compare(password, users[0].password);
  if (!isMatch) {
    return NextResponse.json({
      success: false,
      message: "Invalid credentials",
    });
  }

  return NextResponse.json({ success: true });
}
