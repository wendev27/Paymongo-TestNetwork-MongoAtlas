"use client";

import { usePaymongoPayments } from "@/hooks/usePaymongoPayments";
import Card from "@/components/ui/Card";

export default function DemoPage() {
  const { payments, loading } = usePaymongoPayments();

  if (loading) return <p className="p-6">Loading PayMongo data…</p>;

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">PayMongo Payments (Test)</h1>

      {payments.length === 0 && (
        <p className="text-gray-500">No payments found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {payments.map((p) => (
          <Card key={p.id}>
            <Card key={p.id}>
              <p className="text-xs font-medium text-gray-600">Payment ID</p>

              <p className="font-mono text-xs text-gray-800 break-all">
                {p.id}
              </p>

              <p className="mt-2 text-lg font-semibold text-gray-900">
                ₱{(p.attributes.amount / 100).toFixed(2)}
              </p>

              <p className="text-sm text-gray-700">
                Status:{" "}
                <span className="font-medium">{p.attributes.status}</span>
              </p>
            </Card>
          </Card>
        ))}
      </div>
    </main>
  );
}
