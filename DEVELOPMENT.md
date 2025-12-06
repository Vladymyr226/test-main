# DEVELOPMENT GUIDE

This document describes how to install, run, and work with the **Mbunity Development – React.js Technical Assessment** project in development mode.  
The project is built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and the **shadcn/ui** component primitives.

---

## 1. Technology Stack

- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui components**
- **Zod + react-hook-form** (form validation)
- **Lucide Icons**
- **Radix UI** primitives

The structure follows the Figma design provided in the Mbunity technical assessment.  
All pages share a unified design system (typography, spacing, color palette, layout).

---

## 2. Requirements

Before running the project, ensure the following:

- **Node.js 18+** (recommended Node 20+)
- **npm** (comes with Node)

Verify installation:

```bash
node -v
npm -v
```

---

## 3. Installation

Clone the repository and install dependencies:

```bash
git clone <your-private-repo-url>
cd mbunity-test
npm install
```

---

## 4. Running in Development Mode

Start the local dev server:

```bash
npm run dev
```

The application becomes available at:

```
http://localhost:3000
```

Changes are automatically hot-reloaded.

---

## 5. Build & Production

Create a production build:

```bash
npm run build
```

Run the optimized build locally:

```bash
npm start
```

---

## 6. Project Scripts

| Script          | Description |
|-----------------|-------------|
| `npm run dev`   | Start Next.js development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint`  | Run ESLint checks |

---

## 7. Environment Variables

This project **does not require any environment variables** to run.

If additional APIs or integrations are added later, secrets should be stored in:

```
.env.local
```

This file should **never** be committed to Git.

---

## 8. Project Structure

```
app/
  page.tsx              → Home
  about/                → About page
  blog/                 → Blog page
  contact/              → Contact page (main reference from Figma)
  features/             → Features page
  shop/                 → Shop page (pricing & addons)
  unavailable/          → Fallback placeholder route
  layout.tsx            → Root layout
  globals.css           → Tailwind + custom resets

components/
  header.tsx            → Main navigation
  footer.tsx            → Footer
  ui/                   → Form and UI primitives (shadcn-based)
  home/                 → Homepage sections
  features/             → Features sections
  contact/              → Contact form & hero
  blog/                 → Blog components
  shop/                 → Pricing & addons components
  about/                → Story, hero, values

lib/
  utils.ts              → Helper utilities

public/
  *.svg                 → Icons & assets
```

This modular structure allows pages to share consistent layout and styling across the entire project.

---

## 9. Design Notes

- All pages follow the aesthetic and layout rules from the **Contact Page** provided in Figma.
- The remaining pages (Home, Features, Blog, About, Shop) extend the same design system to demonstrate:
  - consistent UI/UX,
  - routing structure,
  - layout reuse,
  - component modularity.
- Components follow the **shadcn/ui** pattern with custom Tailwind styling.

---

## 10. Deployment Notes

The project is suitable for deployment on **Vercel** without additional configuration:

- No environment variables required
- No server-side APIs used
- No root-level custom server

To deploy:

1. Push the project to a private GitHub repository.
2. Import into Vercel.
3. Ensure the deployed link opens **publicly** in Incognito (Mbunity requirement).

---

## 11. Reviewer Notes

This project was built specifically for the **Mbunity Development – React.js Technical Assessment**.  
The implementation focuses on:

- clean, maintainable code,
- consistent design language,
- reusable component structure,
- responsive layouts,
- form validation and user-friendly UX,
- faithful reproduction of the Figma mockup.