import { NextResponse } from "next/server";
import axios from "axios";

const paymongo = axios.create({
  baseURL: "https://api.paymongo.com/v1",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(process.env.PAYMONGO_SECRET_KEY + ":").toString("base64"),
    "Content-Type": "application/json",
  },
});

export async function POST() {
  try {
    // 1. Create Payment Intent
    const intentRes = await paymongo.post("/payment_intents", {
      data: {
        attributes: {
          amount: 100000, // 1000.00 PHP
          currency: "PHP",
          payment_method_allowed: ["card"],
          description: "Demo Test Payment",
        },
      },
    });

    const intent = intentRes.data.data;
    const intentId = intent.id;
    const clientKey = intent.attributes.client_key;

    // 2. Create Payment Method (test card)
    const methodRes = await paymongo.post("/payment_methods", {
      data: {
        attributes: {
          type: "card",
          details: {
            card_number: "4343434343434345",

            exp_month: 12,
            exp_year: 2030,
            cvc: "123",
          },
          billing: {
            name: "Test User",
            email: "test@example.com",
          },
        },
      },
    });

    const methodId = methodRes.data.data.id;

    // 3. Attach Payment Method to Intent
    await paymongo.post(`/payment_intents/${intentId}/attach`, {
      data: {
        attributes: {
          payment_method: methodId,
          client_key: clientKey,
        },
      },
    });

    return NextResponse.json({
      success: true,
      payment_intent_id: intentId,
    });
  } catch (err: any) {
    console.error("PayMongo error:", err.response?.data || err.message);

    return NextResponse.json(
      {
        error: "Demo payment failed",
        details: err.response?.data || err.message,
      },
      { status: 500 }
    );
  }
}
