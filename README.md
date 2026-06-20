# PressMap.in

Annuaire en ligne de la presse indienne — référence les principaux quotidiens nationaux et régionaux, magazines thématiques et journaux en ligne de l'Inde. Disponible en anglais et en hindi.

🌐 **Site** : [pressmap.in](https://pressmap.in)

## ✨ Fonctionnalités

- 📰 Annuaire structuré : presse quotidienne nationale, presse régionale, journaux en ligne, magazines (féminin, auto, sport, business, lifestyle, etc.)
- 🌍 Bilingue (EN / HI) avec balises `hreflang` et URLs canoniques
- 🔍 SEO optimisé : metadata, OpenGraph, Twitter Cards, JSON-LD, sitemap.xml
- ⚡ SSR via TanStack Start + Vite, déployé sur Cloudflare Workers
- 🎨 UI responsive avec Tailwind CSS v4 et shadcn/ui

## 🛠️ Stack technique

- **Framework** : [TanStack Start](https://tanstack.com/start) (React 19, SSR)
- **Build** : Vite 7
- **Styling** : Tailwind CSS v4 + shadcn/ui
- **Runtime** : Cloudflare Workers (`wrangler`)
- **Package manager** : Bun

## 🚀 Démarrage

```bash
bun install
bun run dev      # serveur de développement
bun run build    # build de production
bun run preview  # prévisualiser le build
```

## 📁 Structure

```
src/
├── components/        # HomePage, CategoryPage, SitemapPage, Layout, ui/
├── data/              # publications.ts
├── lib/               # i18n, utils, SEO helpers
├── routes/            # Routing TanStack (file-based)
│   ├── __root.tsx
│   ├── index.tsx      # Accueil EN
│   ├── sitemap.tsx
│   ├── category/      # Catégories EN
│   └── hi/            # Version hindi
└── styles.css
public/
├── robots.txt
└── sitemap.xml        # Sitemap XML avec hreflang
```

## 🌐 Internationalisation

- 🇬🇧 Anglais : `/`, `/category/:slug`, `/sitemap`
- 🇮🇳 Hindi : `/hi/`, `/hi/category/:slug`, `/hi/sitemap`

Les balises `<link rel="alternate" hreflang="…">` et `<link rel="canonical">` sont injectées par `buildHeadMeta()` dans `src/lib/i18n.ts`.

## 🔍 SEO

- Metadata par page (title < 60 chars, description < 160 chars)
- OpenGraph + Twitter Cards
- JSON-LD structured data
- Hreflang (`en-IN`, `hi-IN`, `x-default`)
- Sitemap XML + page sitemap HTML
- `robots.txt`

## 🤝 Liens partenaires

- [Press Directory](https://www.press-directory.com)
- [Newspapers Europe](https://newspapers-europe.eu)
- [Contact](https://www.press-directory.com/contact-guide-presse.html)

## 📄 Licence

© PressMap.in — Tous droits réservés.

---

Projet construit avec [Lovable](https://lovable.dev).
