import { createFileRoute } from "@tanstack/react-router";
import { SitemapPage } from "@/components/SitemapPage";
import { buildHeadMeta, SITE_NAME, SITE_URL, t } from "@/lib/i18n";
import { categories } from "@/data/publications";

export const Route = createFileRoute("/sitemap")({
  head: () => {
    const title = `${t.en.sitemapTitle} — ${SITE_NAME}`;
    const description = t.en.sitemapIntro;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      url: `${SITE_URL}/sitemap`,
      inLanguage: "en-IN",
      hasPart: categories.map((c) => ({
        "@type": "WebPage",
        name: c.title_en,
        url: `${SITE_URL}/category/${c.slug}`,
      })),
    };
    return buildHeadMeta({ lang: "en", title, description, path: "sitemap", jsonLd });
  },
  component: () => <SitemapPage lang="en" />,
});