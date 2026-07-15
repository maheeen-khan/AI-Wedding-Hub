# VendorProfile — Integration Guide

This folder is self-contained: components, data, and pages all live inside
`Pages/VendorProfile/`. Drop the whole `VendorProfile` folder into your
existing `frontend/src/Pages/` directory, next to `Admin`, `clientPages`,
`Login_SignUp`.

```
src/Pages/VendorProfile/
├── tokens.css              ← shared CSS variables (colors, spacing, radius)
├── PageLayout.css          ← shared 2-column page grid used by every page
├── components/             ← all reusable UI pieces (Navbar, Footer, cards, etc.)
├── data/                   ← sample data per vendor type (swap for API calls later)
└── pages/
    ├── VenuePage.jsx
    ├── CateringPage.jsx
    ├── PhotographyPage.jsx
    ├── MakeupPage.jsx
    ├── DecorPage.jsx
    ├── CarRentalPage.jsx
    └── VendorProfileRouter.jsx   ← picks the right page based on :type param
```

## 1. Install the one new dependency

Everything else (`react`, `react-dom`, `react-router-dom`) you already have.
The only addition is the icon library:

```bash
npm install lucide-react
```

## 2. Wire the dynamic route

In your main router file (likely `App.jsx`), add ONE route:

```jsx
import VendorProfileRouter from "./Pages/VendorProfile/pages/VendorProfileRouter";

<Route path="/vendor/:type/:id" element={<VendorProfileRouter />} />
```

That single route now serves all 6 vendor types:

| URL | Renders |
|---|---|
| `/vendor/venue/sensational-marquee` | VenuePage |
| `/vendor/catering/royal-flavors-catering` | CateringPage |
| `/vendor/photography/majestic-moments-studio` | PhotographyPage |
| `/vendor/makeup/zoyas-heritage-glam` | MakeupPage |
| `/vendor/decor/royal-grand-decor` | DecorPage |
| `/vendor/car-rental/royal-wheels-karachi` | CarRentalPage |

(The `:id` in the URL must match the `id` field in that vendor's data file —
see `data/*.js`. Anything else redirects to `/`.)

### Alternative: separate routes per type

If you'd rather not use the `:type` dispatcher, you can route directly to
each page and skip `VendorProfileRouter` entirely:

```jsx
import VenuePage from "./Pages/VendorProfile/pages/VenuePage";
import CateringPage from "./Pages/VendorProfile/pages/CateringPage";
// ...etc

<Route path="/vendor/venue/:id" element={<VenuePage />} />
<Route path="/vendor/catering/:id" element={<CateringPage />} />
```

## 3. Replace sample data with your backend

Each file in `data/*.js` exports one vendor object. Once your Express/MongoDB
API is ready, replace the static import with a `useEffect` + `fetch` (or
React Query) call to something like `GET /api/vendors/:type/:id`, and pass
the response into the same page component — **no component code needs to
change**, since they all just consume a `vendor` object matching the shape
already in these data files.

## 4. Styling notes

- Plain CSS, no Tailwind. Every component has its own `.css` file imported
  directly at the top of its `.jsx` file.
- All colors/spacing/radius are CSS variables defined once in `tokens.css`
  and reused everywhere (`var(--vp-rose-700)`, etc.) — change a value there
  to restyle every page at once.
- Class names are prefixed `vp-` (VendorProfile) to avoid collisions with
  your existing `App.css` / `index.css`.

## 5. Booking form behavior

`BookingSidebar` is config-driven (see `bookingConfig` in each data file) so
it can render different field combinations per vendor type — selects, date
pickers, checkboxes, button groups (Decor's Floral/Stage/Mixed), chip groups
(Decor styles), and a textarea (Photography notes) — without needing a
separate sidebar component per page.

`onBookNow` in each page currently just `console.log`s the submitted form
values — wire that up to your `POST /api/bookings` route when ready.
