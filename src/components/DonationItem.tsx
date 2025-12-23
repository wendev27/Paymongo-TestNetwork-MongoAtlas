import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Donation } from "@/hooks/useDonations";

export default function DonationItem({
  donation,
  onDelete,
}: {
  donation: Donation;
  onDelete: (id: string) => void;
}) {
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

        <Button variant="danger" onClick={() => onDelete(donation._id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}
