import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
        <Icon className="h-6 w-6 text-pink-600" />
      </div>
      <p className="mt-5 text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}