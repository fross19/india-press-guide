import { Link } from "@tanstack/react-router";
import { Layout } from "./Layout";
import type { Category, Lang } from "@/data/publications";
import { t, pathFor } from "@/lib/i18n";

export function CategoryPage({ lang, category }: { lang: Lang; category: Category }) {
  const tr = t[lang];
  const title = lang === "hi" ? category.title_hi : category.title_en;
  const desc = lang === "hi" ? category.description_hi : category.description_en;

  return (
    <Layout lang={lang} currentPath={`category/${category.slug}`}>
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link to={pathFor(lang, "")} className="hover:underline">
            {tr.home}
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-base text-muted-foreground max-w-3xl">{desc}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {tr.publicationsIn(category.publications.length)}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.publications.map((p) => (
            <li key={p.url} className="rounded-lg border p-4 flex flex-col h-full">
              <h2 className="font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground flex-1">
                {lang === "hi" ? p.description_hi : p.description_en}
              </p>
              <dl className="mt-3 text-xs text-muted-foreground space-y-0.5">
                <div>
                  <dt className="inline font-medium">{tr.inLanguage}: </dt>
                  <dd className="inline">{p.language}</dd>
                </div>
                {p.region && (
                  <div>
                    <dt className="inline font-medium">{tr.region}: </dt>
                    <dd className="inline">{p.region}</dd>
                  </div>
                )}
              </dl>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
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