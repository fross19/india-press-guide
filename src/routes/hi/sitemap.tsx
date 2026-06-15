import { createFileRoute } from "@tanstack/react-router";
import { SitemapPage } from "@/components/SitemapPage";
import { buildHeadMeta, SITE_NAME, SITE_URL, t } from "@/lib/i18n";
import { categories } from "@/data/publications";

export const Route = createFileRoute("/hi/sitemap")({
  head: () => {
    const title = `${t.hi.sitemapTitle} — ${SITE_NAME}`;
    const description = t.hi.sitemapIntro;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      url: `${SITE_URL}/hi/sitemap`,
      inLanguage: "hi-IN",
      hasPart: categories.map((c) => ({
        "@type": "WebPage",
        name: c.title_hi,
        url: `${SITE_URL}/hi/category/${c.slug}`,
      })),
    };
    return buildHeadMeta({ lang: "hi", title, description, path: "sitemap", jsonLd });
  },
  component: () => <SitemapPage lang="hi" />,
});