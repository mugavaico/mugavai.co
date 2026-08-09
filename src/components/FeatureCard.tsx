import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  compact?: boolean;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  compact = false,
}: FeatureCardProps) {
  return (
    <div
      className={`group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        compact ? "rounded-2xl border-gray-100" : ""
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-pink-600" />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 leading-8 text-gray-600">{description}</p>
    </div>
  );
}