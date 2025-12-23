// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import User from "@/models/User";
// import { connectMongo } from "@/lib/mongo";
// import { signToken } from "@/lib/auth";

// export async function POST(req: NextRequest) {
//   await connectMongo();
//   const { email, password } = await req.json();

//   const user = await User.findOne({ email });
//   if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

//   const isValid = await bcrypt.compare(password, user.passwordHash);
//   if (!isValid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

//   const token = signToken({ userId: user._id });
//   return NextResponse.json({ token, userId: user._id, name: user.name });
// }
