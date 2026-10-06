# Ceylon Stays

A responsive React 19 / TypeScript travel and accommodation website inspired by the supplied Sri Lankan serviced-apartment references. Uses Vinext (Next.js App Router APIs), Vite, Tailwind CSS, Radix/Shadcn primitives and Lucide icons.

## Included

- Navy and coral visual theme, responsive mobile navigation, custom favicon and locally hosted Geist font.
- Three original AI-generated property images, optimized as WebP, plus real destination photography.
- Destination and guest-capacity search, six stay categories, price sorting and useful empty states.
- Date selection with a validated date range and Sri Lanka local-date defaults.
- Saved stays persisted on the current device, with graceful fallback when browser storage is unavailable.
- Accessible property dialogs with amenities, nightly estimates, guest limits and downloadable trip plans.
- Property brief form with browser validation and a local text-file download.
- Optional feature-detected WebMCP `filter_stays` tool using the same state and filtering as the page.

## Important scope

All property names, prices, offers and descriptions are illustrative. The three property images depict imagined spaces and are reused across sample listings. No real availability, reservation, authentication, payment or email service is connected. The host form downloads a brief; it does not submit a listing. Date selection estimates a trip and does not check inventory.

## Run

Use Node.js 22.13 or later and pnpm. Install dependencies with `pnpm install --frozen-lockfile`, then use `pnpm dev` for local development or `pnpm build` for a production build. In the managed Sites environment, use the supervised `sites-preview` service instead of starting a second development server.

## Customize

- `app/page.tsx`: interface, sections and interactive journeys.
- `app/globals.css`: theme, typography, layout and responsive styling.
- `lib/stays.ts`: property collection, categories, destination content and price/date helpers.
- `app/layout.tsx`: page metadata.
- `public/images`: optimized images; `public/fonts`: locally hosted Geist font.

## Images

Generated property illustrations: `coastal-villa.webp`, `city-apartment.webp`, `garden-villa.webp`.

Destination photo sources are linked in the site's Photo credits dialog:
- Colombo: Musement, https://www.musement.com/us/negombo/colombo-stadttour-1-122476/
- Galle: China Southern Airlines travel guide, https://www.csair.com/h5/cn/tourism_strategy/asia/SriLanka2/1bom06jug8991.shtml
- Ella: Dream Big, Travel Far, https://www.dreambigtravelfarblog.com/blog/nine-arch-bridge-ella

## Validation

TypeScript checked; production build and core filter/date calculations verified. A supported browser QA/WebMCP runtime was unavailable in this session, so browser interaction and WebMCP registration were not verified.
