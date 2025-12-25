import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

let cached = (global as any).mongo;

if (!cached) {
  cached = (global as any).mongo = { conn: null, promise: null };
}

export async function connectMongo() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// import axios from "axios";

// const PAYMONGO_SECRET_KEY = process.env.PAYMONGO_SECRET_KEY!;

// const paymongo = axios.create({
//   baseURL: "https://api.paymongo.com/v1",
//   headers: {
//     Authorization:
//       "Basic " + Buffer.from(PAYMONGO_SECRET_KEY + ":").toString("base64"),
//     "Content-Type": "application/json",
//   },
// });

// export async function listPayments() {
//   const res = await paymongo.get("/payments");
//   return res.data.data;
// }

// export async function listPaymentIntents() {
//   const res = await paymongo.get("/payment_intents");
//   return res.data.data;
// }
