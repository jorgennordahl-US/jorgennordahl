# Jørgen Nordahl · AI Lab

Personal website and lab at [jorgennordahl.no](https://jorgennordahl.no)

## Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — styling with custom teal design tokens
- **MDX** — articles written in Markdown
- **Vercel** — hosting and deployment

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── articles/         # Articles index + [slug] pages
│   ├── experiments/      # Experiments index + [slug] pages
│   ├── demos/            # Demos page
│   └── about/            # About page
├── components/
│   └── layout/           # Nav, Footer
├── content/
│   └── articles/         # MDX article files (add .mdx files here)
└── lib/
    ├── articles.ts       # Article data/loader
    └── experiments.ts    # Experiments data
```

## Adding content

### New article
Add a `.mdx` file to `src/content/articles/` and register it in `src/lib/articles.ts`.

### New experiment
Add an entry to the `experiments` array in `src/lib/experiments.ts`.

### New demo
Edit the `demos` array in `src/app/demos/page.tsx`.

## Deploying to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add custom domain `jorgennordahl.no` in Vercel settings
4. Point DNS: add an A record to `76.76.21.21` at your registrar

