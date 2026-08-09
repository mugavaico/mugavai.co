import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[140px]" />

      <article className="relative mx-auto max-w-4xl">
        <header className="border-b border-gray-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            Mugavai.co Legal
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {description}
          </p>
          <p className="mt-5 text-sm text-gray-500">Last updated: {updated}</p>
        </header>

        <div className="prose prose-gray mt-12 max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:leading-8 prose-li:leading-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
