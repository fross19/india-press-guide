import { createFileRoute, notFound } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategory } from "@/data/publications";
import { buildHeadMeta, SITE_NAME, SITE_URL } from "@/lib/i18n";

export const Route = createFileRoute("/hi/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const c = loaderData.category;
    const title = `${c.title_hi} — ${SITE_NAME}`;
    const description = c.description_hi;
    const path = `category/${c.slug}`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: c.title_hi,
      description,
      inLanguage: "hi-IN",
      url: `${SITE_URL}/hi/${path}`,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: c.publications.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "NewsMediaOrganization",
            name: p.name,
            url: p.url,
            inLanguage: p.language,
            ...(p.region ? { areaServed: p.region } : {}),
          },
        })),
      },
    };
    return buildHeadMeta({ lang: "hi", title, description, path, jsonLd });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = Route.useLoaderData();
  return <CategoryPage lang="hi" category={category} />;
}