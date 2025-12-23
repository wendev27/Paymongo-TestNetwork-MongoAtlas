// middleware.ts
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
export async function middleware(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const token = authHeader.split(" ")[1];
  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return new NextResponse("Invalid token", { status: 401 });
  }
}
