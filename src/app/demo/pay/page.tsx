"use client";

import axios from "axios";
import { usePaymongoPayments } from "@/hooks/usePaymongoPayments";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function DemoPage() {
  const { payments, loading } = usePaymongoPayments();

  const createTestPayment = async () => {
    await axios.post("/api/paymongo/demo-charge");
    window.location.reload(); // simple + honest for demo
  };

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">PayMongo Demo</h1>
        <Button onClick={createTestPayment}>Create Test Payment</Button>
      </div>

      {loading && <p>Loading payments…</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {payments.map((p) => (
          <Card key={p.id}>
            <p className="text-xs font-medium text-gray-600">Payment ID</p>
            <p className="font-mono text-xs text-gray-800 break-all">{p.id}</p>

            <p className="mt-2 text-lg font-semibold text-gray-900">
              ₱{(p.attributes.amount / 100).toFixed(2)}
            </p>

            <p className="text-sm text-gray-700">
              Status: <span className="font-medium">{p.attributes.status}</span>
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
}
