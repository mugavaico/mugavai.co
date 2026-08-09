type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-700">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {title}
        {accent && (
          <span className="block bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}