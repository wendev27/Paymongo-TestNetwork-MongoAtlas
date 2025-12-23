// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import User from "@/models/User";
// import { connectMongo } from "@/lib/mongo";

// export async function POST(req: NextRequest) {
//   await connectMongo();
//   const { name, email, password } = await req.json();

//   const existing = await User.findOne({ email });
//   if (existing) return NextResponse.json({ error: "Email already used" }, { status: 400 });

//   const passwordHash = await bcrypt.hash(password, 10);
//   const user = await User.create({ name, email, passwordHash });
//   return NextResponse.json({ message: "User created", userId: user._id });
// }
