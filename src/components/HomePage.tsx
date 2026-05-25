import { Link } from "@tanstack/react-router";
import { Layout } from "./Layout";
import { categories, groupOrder, totalPublications, type Lang } from "@/data/publications";
import { t, pathFor } from "@/lib/i18n";

export function HomePage({ lang }: { lang: Lang }) {
  const tr = t[lang];
  return (
    <Layout lang={lang} currentPath="">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          PressMap.in
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">{tr.tagline}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed">{tr.intro}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          {tr.publicationsIn(totalPublications)} · {categories.length}{" "}
          {tr.allCategories.toLowerCase()}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 space-y-10">
        {groupOrder.map((g) => {
          const cats = categories.filter((c) => c.group === g.id);
          return (
            <div key={g.id}>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "hi" ? g.title_hi : g.title_en}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cats.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={pathFor(lang, `category/${c.slug}`)}
                      className="block rounded-lg border p-4 hover:bg-accent transition-colors h-full"
                    >
                      <h3 className="font-semibold">
                        {lang === "hi" ? c.title_hi : c.title_en}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {lang === "hi" ? c.description_hi : c.description_en}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {tr.publicationsIn(c.publications.length)}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="rounded-lg border bg-muted/40 p-6">
          <h2 className="text-xl font-semibold">{tr.aboutTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed">{tr.aboutText}</p>
        </div>
      </section>
    </Layout>
  );
}