import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { buildHeadMeta, SITE_NAME, SITE_URL, t } from "@/lib/i18n";
import { categories } from "@/data/publications";

export const Route = createFileRoute("/hi/")({
  head: () => {
    const title = `${SITE_NAME} — भारतीय प्रेस निर्देशिका | समाचार पत्र और पत्रिकाएँ`;
    const description =
      "PressMap.in — भारतीय समाचार पत्रों, पत्रिकाओं और ऑनलाइन समाचार पोर्टलों की निर्देशिका। राष्ट्रीय दैनिक, क्षेत्रीय प्रेस, ऑनलाइन मीडिया और विषयानुसार पत्रिकाएँ।";
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: ["hi-IN", "en-IN"],
          description,
        },
        { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        {
          "@type": "ItemList",
          name: t.hi.allCategories,
          itemListElement: categories.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.title_hi,
            url: `${SITE_URL}/hi/category/${c.slug}`,
          })),
        },
      ],
    };
    return buildHeadMeta({ lang: "hi", title, description, path: "", jsonLd });
  },
  component: () => <HomePage lang="hi" />,
});