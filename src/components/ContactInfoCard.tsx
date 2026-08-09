import type { LucideIcon } from "lucide-react";

type ContactInfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  description: string;
};

export function ContactInfoCard({
  icon: Icon,
  title,
  value,
  href,
  description,
}: ContactInfoCardProps) {
  return (
    <a
      href={href}
      aria-label={`${title}: ${value}`}
      className="flex items-center justify-start gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
    >
      <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
        <Icon className="h-6 w-6 text-pink-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="mt-3 break-words font-medium text-pink-600">{value}</p>
      </div>
    </a>
  );
}