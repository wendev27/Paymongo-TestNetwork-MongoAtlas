"use client";

import DonationItem from "@/components/DonationItem";
import { useDonations } from "@/hooks/useDonations";

export default function DonationList() {
  const { donations, loading, deleteDonation } = useDonations();

  if (loading) return <p className="text-gray-500">Loading…</p>;
  if (donations.length === 0)
    return <p className="text-gray-500">No donations yet.</p>;

  return (
    // <div className="space-y-4">
    //   {donations.map((donation) => (
    //     <DonationItem
    //       key={donation._id}
    //       donation={donation}
    //       onDelete={deleteDonation}
    //     />
    //   ))}
    // </div> old
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {donations.map((donation) => (
        <DonationItem
          key={donation._id}
          donation={donation}
          onDelete={deleteDonation}
        />
      ))}
    </div>
  );
}
