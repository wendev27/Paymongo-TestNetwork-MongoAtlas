"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";

export type Donation = {
  _id: string;
  amount: number;
  createdAt: string;
};

export function useDonations() {
  const { user } = useAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDonations = async () => {
    if (!user) return;
    setLoading(true);
    const res = await axios.get(`/api/donations/list?userId=${user.userId}`);
    setDonations(res.data);
    setLoading(false);
  };

  const deleteDonation = async (id: string) => {
    await axios.post("/api/donations/delete", { id });
    setDonations((prev) => prev.filter((d) => d._id !== id));
  };

  useEffect(() => {
    fetchDonations();
  }, [user]);

  return { donations, loading, deleteDonation };
}
