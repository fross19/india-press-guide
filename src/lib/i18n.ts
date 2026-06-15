import type { Lang } from "@/data/publications";

export const SITE_URL = "https://pressmap.in";
export const SITE_NAME = "PressMap.in";

export const t = {
  en: {
    tagline: "The directory of the Indian press",
    intro:
      "PressMap.in is a free directory of Indian newspapers, magazines and online news portals. Browse national dailies, regional press, digital media and magazines by theme.",
    browse: "Browse by category",
    allCategories: "All categories",
    home: "Home",
    language: "Language",
    publications: "publications",
    visit: "Visit website",
    backHome: "Back to home",
    aboutTitle: "About PressMap.in",
    aboutText:
      "PressMap.in lists the leading newspapers, magazines and online news portals of India to help readers, researchers and media professionals discover the Indian press in one place.",
    partnersTitle: "Partner directories",
    contact: "Contact",
    footerRights: "All rights reserved.",
    metaSuffix: "PressMap.in — Indian Press Directory",
    publicationsIn: (n: number) => `${n} publications`,
    inLanguage: "Language",
    region: "Region",
  },
  hi: {
    tagline: "भारतीय प्रेस की निर्देशिका",
    intro:
      "PressMap.in भारतीय समाचार पत्रों, पत्रिकाओं और ऑनलाइन समाचार पोर्टलों की एक निःशुल्क निर्देशिका है। राष्ट्रीय दैनिक, क्षेत्रीय प्रेस, डिजिटल मीडिया और विषयानुसार पत्रिकाएँ देखें।",
    browse: "श्रेणी के अनुसार देखें",
    allCategories: "सभी श्रेणियाँ",
    home: "मुखपृष्ठ",
    language: "भाषा",
    publications: "प्रकाशन",
    visit: "वेबसाइट पर जाएँ",
    backHome: "मुखपृष्ठ पर वापस",
    aboutTitle: "PressMap.in के बारे में",
    aboutText:
      "PressMap.in भारत के प्रमुख समाचार पत्रों, पत्रिकाओं और ऑनलाइन समाचार पोर्टलों की सूची प्रदान करता है ताकि पाठक, शोधकर्ता और मीडिया पेशेवर भारतीय प्रेस को एक ही स्थान पर खोज सकें।",
    partnersTitle: "साझेदार निर्देशिकाएँ",
    contact: "संपर्क",
    footerRights: "सर्वाधिकार सुरक्षित।",
    metaSuffix: "PressMap.in — भारतीय प्रेस निर्देशिका",
    publicationsIn: (n: number) => `${n} प्रकाशन`,
    inLanguage: "भाषा",
    region: "क्षेत्र",
  },
} as const;

export function pathFor(lang: Lang, sub: string = "") {
  const clean = sub.replace(/^\//, "");
  if (lang === "hi") return "/hi" + (clean ? "/" + clean : "");
  return "/" + clean;
}

export function altLang(lang: Lang): Lang {
  return lang === "en" ? "hi" : "en";
}

export function buildHeadMeta(opts: {
  lang: Lang;
  title: string;
  description: string;
  path: string; // path without leading slash, e.g. "category/national-dailies"
  jsonLd?: object;
}) {
  const { lang, title, description, path, jsonLd } = opts;
  const enPath = pathFor("en", path);
  const hiPath = pathFor("hi", path);
  const canonical = lang === "en" ? enPath : hiPath;
  const ogLocale = lang === "hi" ? "hi_IN" : "en_IN";

  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: ogLocale },
    { property: "og:locale:alternate", content: lang === "hi" ? "en_IN" : "hi_IN" },
    { property: "og:url", content: canonical },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "robots", content: "index, follow" },
  ];

  const links = [
    { rel: "canonical", href: canonical },
    { rel: "alternate", hrefLang: "en-IN", href: enPath },
    { rel: "alternate", hrefLang: "hi-IN", href: hiPath },
    { rel: "alternate", hrefLang: "x-default", href: enPath },
  ];

  const scripts = jsonLd
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ]
    : undefined;

  return { meta, links, scripts };
}