import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Lang } from "@/data/publications";
import { t, pathFor, altLang, SITE_NAME } from "@/lib/i18n";

export function Layout({
  lang,
  currentPath,
  children,
}: {
  lang: Lang;
  /** path without language prefix or leading slash, e.g. "" or "category/national-dailies" */
  currentPath: string;
  children: ReactNode;
}) {
  const other = altLang(lang);
  const otherHref = pathFor(other, currentPath);
  const homeHref = pathFor(lang, "");
  const tr = t[lang];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to={homeHref} className="flex items-center gap-2 font-semibold text-lg">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white text-base font-bold shadow-sm"
              style={{ background: "var(--gradient-hero)" }}
            >
              P
            </span>
            <span>{SITE_NAME}</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to={homeHref} className="hover:underline">
              {tr.home}
            </Link>
            <a
              href={otherHref}
              hrefLang={other === "hi" ? "hi-IN" : "en-IN"}
              className="rounded border px-2 py-1 hover:bg-accent"
              aria-label={tr.language}
            >
              {other === "hi" ? "हिन्दी" : "English"}
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t mt-12">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground space-y-4">
          <div>
            <p className="font-semibold text-foreground mb-2">{tr.partnersTitle}</p>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a
                  href="https://www.press-directory.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  press-directory.com
                </a>
              </li>
              <li>
                <a
                  href="https://newspapers-europe.eu"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  newspapers-europe.eu
                </a>
              </li>
              <li>
                <a
                  href="https://www.press-directory.com/contact-guide-presse.html"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  {tr.contact}
                </a>
              </li>
            </ul>
          </div>
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {tr.footerRights}
          </p>
        </div>
      </footer>
    </div>
  );
}