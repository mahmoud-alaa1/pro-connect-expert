import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  const res = NextResponse.json(
    { message: "Token set successfully" },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
