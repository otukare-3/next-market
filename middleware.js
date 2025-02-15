import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15MkBnbWFpbC5jb20iLCJleHAiOjE3Mzk2Njc1MTV9.6lpE99LIhuHHGHIWE8I-L5fQU6km6FSClTau9Ui51a4";
  // const token = await request.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ message: "トークンがありません" });
  }

  try {
    const secretKey = new TextEncoder().encode("next-market-app-book");
    const decodedJwt = await jwtVerify(token, secretKey);
    return NextResponse.next();
  } catch {
    return NextResponse.json({ message: "トークンが不正です" });
  }
}

export const config = {
  matcher: [
    "/api/item/create",
    "/api/item/update/:path*",
    "/api/item/delete/:path*",
  ],
};
