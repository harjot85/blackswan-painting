# Black Swan Painting

A Next.js 14 marketing/landing page for Black Swan Painting, a painting and home renovation company based in Chilliwack, BC.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS (globals.css, inline styles / className)
- **Deployment**: Netlify via `@netlify/plugin-nextjs`
- **Node**: npm

## Project Structure

```
app/
  layout.js       # Root layout with metadata
  page.js         # Home page — assembles all section components
  globals.css     # Global styles
components/
  Navbar.js
  Hero.js
  Stats.js
  Services.js
  About.js
  Gallery.js
  Testimonials.js
  Contact.js
  Footer.js
```

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Notes

- Single-page layout: all sections are rendered on `app/page.js`
- Deployed to Netlify — no static export config needed (`next.config.js` leaves output unset)
- Business: painting & renovation services — Chilliwack, BC
