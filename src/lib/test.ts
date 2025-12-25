import axios from "axios";

const PAYMONGO_SECRET_KEY = process.env.PAYMONGO_SECRET_KEY!;

const paymongo = axios.create({
  baseURL: "https://api.paymongo.com/v1",
  headers: {
    Authorization:
      "Basic " + Buffer.from(PAYMONGO_SECRET_KEY + ":").toString("base64"),
    "Content-Type": "application/json",
  },
});

export async function listPayments() {
  const res = await paymongo.get("/payments");
  return res.data.data;
}

export async function listPaymentIntents() {
  const res = await paymongo.get("/payment_intents");
  return res.data.data;
}
