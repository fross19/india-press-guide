import { Link } from "@tanstack/react-router";
import { Layout } from "./Layout";
import { categories, groupOrder, type Lang } from "@/data/publications";
import { t, pathFor, altLang } from "@/lib/i18n";

const groupGradient: Record<string, string> = {
  "dailies-national": "var(--gradient-saffron)",
  "dailies-regional": "var(--gradient-green)",
  online: "var(--gradient-indigo)",
  magazines: "var(--gradient-pink)",
};

export function SitemapPage({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const other = altLang(lang);

  return (
    <Layout lang={lang} currentPath="sitemap">
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--brand-saffron)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--brand-pink)" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12">
          <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide uppercase">
            🗺️ {tr.sitemap}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            {tr.sitemapTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-white/90">
            {tr.sitemapIntro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 space-y-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-8 w-1.5 rounded-full"
              style={{ background: "var(--gradient-hero)" }}
            />
            <h2 className="text-2xl font-semibold">{tr.mainPages}</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link
                to={pathFor(lang, "")}
                className="block rounded-lg border bg-card px-4 py-3 hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                {tr.home}
              </Link>
            </li>
            <li>
              <Link
                to={pathFor(lang, "sitemap")}
                className="block rounded-lg border bg-card px-4 py-3 hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                {tr.sitemap}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-8 w-1.5 rounded-full"
              style={{ background: "var(--gradient-pink)" }}
            />
            <h2 className="text-2xl font-semibold">{tr.categoriesAll}</h2>
          </div>
          <div className="space-y-8">
            {groupOrder.map((g) => {
              const cats = categories.filter((c) => c.group === g.id);
              const gradient = groupGradient[g.id] ?? "var(--gradient-indigo)";
              return (
                <div key={g.id}>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="h-5 w-1 rounded-full"
                      style={{ background: gradient }}
                    />
                    <h3 className="text-lg font-semibold">
                      {lang === "hi" ? g.title_hi : g.title_en}
                    </h3>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {cats.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={pathFor(lang, `category/${c.slug}`)}
                          className="group relative block overflow-hidden rounded-lg border bg-card px-4 py-3 hover:-translate-y-0.5 hover:shadow-md transition-all"
                        >
                          <div
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-0.5"
                            style={{ background: gradient }}
                          />
                          <div className="font-medium">
                            {lang === "hi" ? c.title_hi : c.title_en}
                          </div>
                          <div className="mt-0.5 text-xs text-muted-foreground">
                            {tr.publicationsIn(c.publications.length)}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.04 90) 0%, oklch(0.96 0.05 340) 100%)",
          }}
        >
          <h2 className="text-xl font-semibold">{tr.languagesAvailable}</h2>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm">
            <li>
              <a
                href={pathFor("en", "sitemap")}
                hrefLang="en-IN"
                className="rounded-full border bg-white/60 px-3 py-1 hover:bg-white"
              >
                English
              </a>
            </li>
            <li>
              <a
                href={pathFor("hi", "sitemap")}
                hrefLang="hi-IN"
                className="rounded-full border bg-white/60 px-3 py-1 hover:bg-white"
              >
                हिन्दी
              </a>
            </li>
            <li>
              <a
                href="/sitemap.xml"
                className="rounded-full border bg-white/60 px-3 py-1 hover:bg-white"
              >
                sitemap.xml
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            {other === "hi" ? "हिन्दी" : "English"} · {tr.language}
          </p>
        </div>
      </section>
    </Layout>
  );
}