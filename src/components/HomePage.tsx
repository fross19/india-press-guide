import { Link } from "@tanstack/react-router";
import { Layout } from "./Layout";
import { categories, groupOrder, totalPublications, type Lang } from "@/data/publications";
import { t, pathFor } from "@/lib/i18n";

const groupStyles: Record<string, { gradient: string; chip: string; ring: string }> = {
  "dailies-national": {
    gradient: "var(--gradient-saffron)",
    chip: "bg-brand-saffron/15 text-brand-saffron",
    ring: "hover:border-brand-saffron",
  },
  "dailies-regional": {
    gradient: "var(--gradient-green)",
    chip: "bg-brand-green/15 text-brand-green",
    ring: "hover:border-brand-green",
  },
  online: {
    gradient: "var(--gradient-indigo)",
    chip: "bg-brand-indigo/15 text-brand-indigo",
    ring: "hover:border-brand-indigo",
  },
  magazines: {
    gradient: "var(--gradient-pink)",
    chip: "bg-brand-pink/15 text-brand-pink",
    ring: "hover:border-brand-pink",
  },
};

export function HomePage({ lang }: { lang: Lang }) {
  const tr = t[lang];
  return (
    <Layout lang={lang} currentPath="">
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
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14">
          <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide uppercase">
            🇮🇳 {tr.tagline}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            PressMap<span className="text-white/70">.in</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-white/90">
            {tr.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1">
              {tr.publicationsIn(totalPublications)}
            </span>
            <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1">
              {categories.length} {tr.allCategories.toLowerCase()}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 space-y-12">
        {groupOrder.map((g) => {
          const cats = categories.filter((c) => c.group === g.id);
          const style = groupStyles[g.id] ?? groupStyles["online"];
          return (
            <div key={g.id}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-8 w-1.5 rounded-full"
                  style={{ background: style.gradient }}
                />
                <h2 className="text-2xl font-semibold">
                  {lang === "hi" ? g.title_hi : g.title_en}
                </h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cats.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={pathFor(lang, `category/${c.slug}`)}
                      className={"group relative block overflow-hidden rounded-xl border bg-card p-5 h-full transition-all hover:-translate-y-0.5 hover:shadow-lg " + style.ring}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1"
                        style={{ background: style.gradient }}
                      />
                      <h3 className="font-semibold text-lg">
                        {lang === "hi" ? c.title_hi : c.title_en}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {lang === "hi" ? c.description_hi : c.description_en}
                      </p>
                      <span className={"mt-3 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium " + style.chip}>
                        {tr.publicationsIn(c.publications.length)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.04 90) 0%, oklch(0.96 0.05 340) 100%)",
          }}
        >
          <h2 className="text-xl font-semibold">{tr.aboutTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed">{tr.aboutText}</p>
        </div>
      </section>
    </Layout>
  );
}