import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { buildHeadMeta, SITE_NAME, SITE_URL, t } from "@/lib/i18n";
import { categories } from "@/data/publications";

export const Route = createFileRoute("/")({
  head: () => {
    const title = `${SITE_NAME} — Indian Press Directory | Newspapers & Magazines of India`;
    const description =
      "PressMap.in — directory of Indian newspapers, magazines and online news portals. National dailies, regional press, online media and magazines by theme.";
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: ["en-IN", "hi-IN"],
          description,
        },
        { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        {
          "@type": "ItemList",
          name: t.en.allCategories,
          itemListElement: categories.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.title_en,
            url: `${SITE_URL}/category/${c.slug}`,
          })),
        },
      ],
    };
    return buildHeadMeta({ lang: "en", title, description, path: "", jsonLd });
  },
  component: () => <HomePage lang="en" />,
});