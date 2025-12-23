import { NextResponse } from "next/server";
import { listPayments } from "@/lib/mongo";

export async function GET() {
  try {
    const payments = await listPayments();
    return NextResponse.json(payments);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}
