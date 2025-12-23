import DonationList from "@/components/DonationList";
import Card from "@/components/ui/Card";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-semibold">My Donations</h1>

        <Card>
          <DonationList />
        </Card>
      </div>
    </main>
  );
}
