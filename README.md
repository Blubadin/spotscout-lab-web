# SpotScout Lab Web

Premium, desktop-first website prototype for the SpotScout Lab Windows application.

## Preview

The project is buildless static HTML. Serve the dist directory locally with:

    python3 -m http.server 4173 --directory dist

Open http://localhost:4173 and use the navigation to view each prototype page.

## Prototype views

- Home / product story: #/home
- Pricing: #/pricing
- Sign in: #/login
- Create account: #/register
- Account portal: #/account
- Scouting service: #/service
- Academy: #/learn
- Course lesson view: #/course
- Support: #/support
- Windows download: #/download

The site's interactions are visual prototypes. Authentication, payments, device licensing, downloads, learning video playback, match uploads, service orders and support delivery are not connected to production systems. Purchase and installer buttons remain disabled until the required account, entitlement, payment and release services exist. No installer is included.

The website supports Thai and English through `dist/i18n.js`. The selected language is saved as a local display preference. It is not used for authentication or authorization.

## Assets

- dist/assets/sp-logo.png: supplied SpotScout “Sp” mark.
- dist/assets/arena-hero.png: generated monochrome sports arena hero photograph.
- docs/reference/spot-scout-lab-visual-reference.png: supplied visual reference.

## Visual system

- Premium monochrome and graphite surfaces with restrained glass panels.
- Inter/Geist system font fallbacks, large product-led typography and generous spacing.
- Analysis colors are limited to data visualization and event markers.
- Responsive layouts for desktop, tablet and mobile.
