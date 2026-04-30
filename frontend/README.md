[Читать на русском](./README.ru.md)

# Fashion Shop — React E-Commerce Frontend

A modern e-commerce frontend for a women's fashion store built with React 19, TypeScript, and Vite. The app features a product catalog with cart and favorites functionality, animated UI elements, and a responsive layout.

### Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19.2.0 | UI framework |
| TypeScript | ~5.9.3 | Type safety |
| Vite | 7.2.4 | Build tool & dev server |
| SCSS/SASS | 1.97.0 | Styling |

### Features

- Product grid with hover image switching
- Add to cart with animated feedback
- Favorites persisted to `localStorage`
- Slide-out cart panel with quantity management
- Header that shrinks on scroll
- Animated marquee sale banner
- Sidebar navigation menu

### Getting Started

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

**Available scripts:**

```bash
npm run dev       # Start development server
npm run build     # Type-check and build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Project Structure

```
frontend/
├── public/
│   └── icons/          # SVG icons (cart, search, account, etc.)
├── src/
│   ├── components/
│   │   ├── Header/     # Sticky shrinking header
│   │   ├── ProductGrid/# Product grid + marquee banner
│   │   ├── ProductCard/# Individual product card
│   │   ├── Cart/       # Slide-out cart menu
│   │   └── Menu/       # Sidebar navigation
│   ├── context/        # CartContext, FavoriteContext
│   ├── types/          # TypeScript interfaces (Product, CartItem)
│   ├── data/           # Sample product data (JSON)
│   └── App.tsx
```

### What's Left to Complete

See the [Roadmap](#roadmap-en) below.

<a name="roadmap-en"></a>
### Roadmap

#### High Priority

1. **Routing** — Add React Router. Implement pages: Home, Product Detail, Cart, Checkout, Account. Wire up the existing `/product/{id}` links.
2. **Product detail page** — Size selector, color variants, image gallery, description, reviews.
3. **Cart persistence** — Save cart to `localStorage` (same pattern as favorites) so it survives page refreshes.
4. **Real product data** — Replace the 6 hardcoded products with data from an API or a proper data file. Add real images.

#### Medium Priority

5. **Search** — The search icon is in the header but has no functionality. Implement a search overlay/page with filtering by name and category.
6. **Filters & sorting** — Filter by category, price range, size; sort by price and newest.
7. **Checkout flow** — Order form, delivery address, order summary, integration with a payment gateway (e.g. Stripe or YooKassa).
8. **Authentication** — Login, registration, password recovery. Protect account and order history pages.

#### Lower Priority

9. **User account page** — Profile, saved addresses, order history.
10. **Favorites page** — A dedicated page listing all favorited products.
11. **Backend integration** — Connect to a REST or GraphQL API for products, orders, and users.
12. **Accessibility** — Keyboard navigation, ARIA labels, focus management in modal panels.
13. **SEO & meta** — Page titles, Open Graph tags, structured data for products.
14. **Error & loading states** — Skeleton loaders, empty states, and error boundaries for API calls.