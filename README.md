# NO ETA — Streetwear Logistics Site

A modern React + TypeScript website for the NO ETA brand, built with TanStack Router, React Query, and Tailwind CSS.

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production
```bash
npm run build
npm run preview
```

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **TanStack Router** — File-based routing
- **React Query** — Server state management
- **Tailwind CSS 4** — Styling
- **Vite** — Build tool

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx    — Root layout & error boundaries
│   └── index.tsx     — Homepage
├── router.tsx        — Router configuration
├── routeTree.gen.ts  — Generated route tree
├── styles.css        — Tailwind + custom CSS
└── main.tsx          — Application entry point
```

## Customization

### Change Colors
Edit `src/styles.css` and modify the CSS custom properties in `:root` and `.dark` blocks.

### Add Products
Edit the `products` array in `src/routes/index.tsx`.

### Add New Pages
Create files in `src/routes/` following TanStack Router conventions.

## Features

✨ **Industrial Design** — Logistics-themed UI with custom animations
✨ **Responsive** — Mobile-first design
✨ **Fast** — Vite + React 18 for optimal performance
✨ **Dark Mode Ready** — CSS variables support for theme switching
✨ **Accessible** — Semantic HTML and ARIA labels

## License

MIT
