import { Link } from "@tanstack/react-router";
import { Layout } from "./Layout";
import type { Category, Lang } from "@/data/publications";
import { t, pathFor } from "@/lib/i18n";

const groupGradient: Record<string, string> = {
  "dailies-national": "var(--gradient-saffron)",
  "dailies-regional": "var(--gradient-green)",
  online: "var(--gradient-indigo)",
  magazines: "var(--gradient-pink)",
};

export function CategoryPage({ lang, category }: { lang: Lang; category: Category }) {
  const tr = t[lang];
  const title = lang === "hi" ? category.title_hi : category.title_en;
  const desc = lang === "hi" ? category.description_hi : category.description_en;
  const gradient = groupGradient[category.group] ?? "var(--gradient-indigo)";

  return (
    <Layout lang={lang} currentPath={`category/${category.slug}`}>
      <section
        className="relative overflow-hidden text-white"
        style={{ background: gradient }}
      >
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-12">
          <nav className="text-sm text-white/80 mb-4">
            <Link to={pathFor(lang, "")} className="hover:underline">
              {tr.home}
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-base text-white/90 max-w-3xl">{desc}</p>
          <span className="mt-4 inline-flex rounded-full bg-white/15 backdrop-blur px-3 py-1 text-sm">
            {tr.publicationsIn(category.publications.length)}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.publications.map((p) => (
            <li
              key={p.url}
              className="group relative overflow-hidden rounded-xl border bg-card p-5 flex flex-col h-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: gradient }}
              />
              <h2 className="font-semibold text-lg">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground flex-1">
                {lang === "hi" ? p.description_hi : p.description_en}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {p.language}
                </span>
                {p.region && (
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                    {p.region}
                  </span>
                )}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                {tr.visit} →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}