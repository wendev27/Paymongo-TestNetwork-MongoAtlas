import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Donation } from "@/hooks/useDonations";
import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function DonationItem({
  donation,
  onDelete,
}: {
  donation: Donation;
  onDelete: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Donation</p>
          <p className="text-lg font-semibold">
            ₱{(donation.amount / 100).toFixed(2)}
          </p>
          <p className="text-xs text-gray-400">
            {new Date(donation.createdAt).toLocaleDateString()}
          </p>
        </div>
        {/* 
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete
        </Button> */}
        <Button variant="danger" onClick={() => onDelete(donation._id)}>
          Delete
        </Button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>Are you sure you want to delete this donation?</p>
          <div className="mt-4 flex gap-2">
            <Button
              onClick={() => {
                onDelete(donation._id);
                setIsOpen(false);
              }}
            >
              Yes
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              No
            </Button>
          </div>
        </Modal>
      </div>
    </Card>
  );
}
