import Link from "next/link";

type Cta = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type CtaButtonsProps = {
  items: Cta[];
  className?: string;
};

export function CtaButtons({ items, className = "" }: CtaButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((item) => (
        <Link
          key={`${item.href}-${item.label}`}
          href={item.href}
          className={
            item.variant === "secondary"
              ? "rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
              : "rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          }
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}