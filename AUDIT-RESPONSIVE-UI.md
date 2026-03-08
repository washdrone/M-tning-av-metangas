# Responsive UI Audit – EcoDrone Website

**Date:** 2026-03-08
**Scope:** Full responsive layout audit across all pages and shared components
**Stack:** Next.js 14 (App Router), Tailwind CSS 3.4, TypeScript

---

## 1. Executive Summary

### Top 5 Most Important Issues

1. **Mobile menu does not lock body scroll or handle viewport overflow** – When opened, the page remains scrollable behind the menu, and the menu itself has no scroll container for small-height viewports. On devices with short screens (320px height, landscape phones), the menu content overflows without scrolling.

2. **No fixed-header offset on pages without Hero or Breadcrumbs** – The header is `position: fixed` (72px tall), but only pages with `<Breadcrumbs>` (`pt-24`) or `<Hero>` (large top padding) compensate. The 404 page and any future pages without these components will have content hidden behind the header.

3. **Desktop dropdown menus use fragile `onBlur` + `setTimeout(200ms)` pattern** – This can cause the dropdown to close before a click on a menu link registers. No keyboard navigation support (Escape, arrow keys). No click-outside handler. Dropdown closes unreliably.

4. **FAQ accordion answer area too narrow on mobile** – `pr-12` (3rem) on the `<dd>` element reduces readable width significantly at 320–390px viewports, wasting ~48px of horizontal space on the right.

5. **No iOS safe-area handling** – Fixed header, mobile menu, and CTAs don't account for `env(safe-area-inset-*)`. On notch devices, the header content can overlap the status bar area, and bottom CTAs can overlap the home indicator.

### Overall Quality Assessment

The codebase is well-structured with consistent design tokens (`container-narrow`, `container-wide`, `section-padding`, `card-dark`, `btn-primary`). Typography, spacing, and color system are coherent. The dark theme is executed with good contrast in most areas. The main risks are interaction-level issues (mobile menu, dropdowns) and a few structural omissions (scroll lock, safe areas, header offset).

### Biggest Risks to Usability/Conversion

- Mobile menu usability failure on short viewports directly blocks navigation
- Desktop dropdown fragility can prevent users from reaching key service/industry pages
- Missing header offset on fallback pages creates a broken first impression
- CTA "Boka genomgång" appears in too many identical forms, potentially diluting conversion intent

---

## 2. Findings by Severity

### Critical

#### C1: Mobile menu does not lock body scroll
- **Where:** `src/components/Header.tsx:144–182`
- **What:** When `mobileOpen` is true, the menu renders as a normal flow `<div>` below the `<nav>`. The page body remains scrollable behind the menu.
- **Why:** No `overflow: hidden` is applied to `<body>` when the menu opens. No scroll lock mechanism exists.
- **Root cause:** The mobile menu is not a full-screen overlay with `position: fixed` and `overflow-y: auto`. It's an inline element that pushes below the header.
- **Fix:** When `mobileOpen` is true, apply `overflow: hidden` to `document.body` via `useEffect`. Make the mobile menu container `fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto` so it fills the remaining viewport and scrolls internally.

#### C2: Mobile menu not scrollable on short viewports
- **Where:** `src/components/Header.tsx:144–182`
- **What:** The mobile menu contains ~18 link items plus a CTA button. At 320px viewport height (or landscape phones), the content overflows the viewport with no way to scroll to items at the bottom.
- **Why:** The menu container has no `max-height` or `overflow-y: auto`. It simply renders at whatever height its content requires.
- **Root cause:** Same structural issue as C1 – the menu is not constrained to the viewport.
- **Fix:** Same fix as C1 – make the menu container `fixed` with `overflow-y: auto` and constrained height.

#### C3: No header offset on pages without Hero/Breadcrumbs
- **Where:** `src/app/not-found.tsx`, and any future page that doesn't use `<Hero>` or `<Breadcrumbs>`
- **What:** The 404 page uses `section-padding` (`py-20`) which gives only 80px of top padding. The fixed header is 72px tall, leaving only 8px of visible space above the "404" heading. On small screens (`py-20` = 80px), the heading is nearly flush with the header bottom.
- **Why:** The layout in `src/app/layout.tsx:65` (`<main className="flex-1">`) applies no top padding to account for the fixed header.
- **Root cause:** Header offset responsibility is delegated to individual page components (Hero, Breadcrumbs) instead of being handled at the layout level.
- **Fix:** Add `pt-[72px]` (or a CSS custom property `--header-h`) to `<main>` in the root layout. Then remove the compensating padding from Breadcrumbs (`pt-24` → remove, add small `pt-4` for spacing) and adjust Hero top padding values accordingly.

### Major

#### M1: Desktop dropdown menus use fragile blur-based closing
- **Where:** `src/components/Header.tsx:57–82, 85–111`
- **What:** Dropdown menus close via `onBlur` with a 200ms `setTimeout`. This is unreliable: rapid clicks on dropdown items can race against the blur timer. Tab-navigating through dropdown items triggers blur on each focus change.
- **Why:** No click-outside detection. No Escape key handler. No `aria-controls` or proper ARIA menu pattern.
- **Root cause:** The dropdown is implemented with basic state toggling and `onBlur` as the sole close mechanism.
- **Fix:** Add a click-outside handler via `useRef` + `useEffect` (mousedown listener on document). Add `onKeyDown` for Escape to close. Remove the `onBlur` + `setTimeout` pattern. Consider using a `useCallback` ref to track the dropdown container.

#### M2: FAQ accordion `pr-12` wastes space on mobile
- **Where:** `src/components/FaqAccordion.tsx:49`
- **What:** The answer `<dd>` has `pr-12` (48px right padding). On a 320px viewport with container padding (20px each side), the readable area is only `320 - 40 - 48 = 232px`.
- **Why:** The `pr-12` was likely added to prevent text from reaching the chevron icon area, but the chevron is on the `<dt>` (question) row, not on the `<dd>` (answer) row.
- **Root cause:** Padding applied to the wrong element or not adjusted for mobile.
- **Fix:** Change `pr-12` to `sm:pr-12 pr-4` or remove it entirely since the answer row has no competing element on the right.

#### M3: No iOS safe-area insets
- **Where:** `src/app/globals.css`, `src/app/layout.tsx`, `src/components/Header.tsx`
- **What:** The fixed header, mobile menu, and full-width CTAs don't account for iOS safe area insets (notch, home indicator, status bar).
- **Why:** No `viewport-fit=cover` meta tag, no `env(safe-area-inset-*)` usage.
- **Root cause:** Safe area handling was not included in the initial implementation.
- **Fix:** Add `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />` in layout. Add `padding-top: env(safe-area-inset-top)` to the header. Add `padding-bottom: env(safe-area-inset-bottom)` to the mobile menu and footer.

#### M4: Compliance table unreadable on small mobile
- **Where:** `src/app/compliance/page.tsx:108–145`
- **What:** The 5-column table with `overflow-x-auto` is technically scrollable, but at 320–390px the visible portion shows only ~1.5 columns. Users may not realize the table scrolls. The first column uses `whitespace-nowrap` making it wide.
- **Why:** Table layout is inherently desktop-oriented. No mobile-alternative is provided.
- **Root cause:** No responsive strategy for the table – just horizontal scroll.
- **Fix:** At mobile breakpoints, convert the table to a stacked card layout using a responsive pattern (e.g., hide the `<table>` on mobile and show a list of cards, or use CSS `display: block` technique). Alternatively, add a subtle scroll indicator or gradient fade on the right edge to signal scrollability.

#### M5: `btn-primary` uses `!important` overrides in Header and Footer
- **Where:** `src/components/Header.tsx:122`, `src/components/Footer.tsx:105`
- **What:** `!py-2.5 !px-6 !text-[13px]` overrides the base `btn-primary` class. This makes the button system fragile and hard to maintain.
- **Why:** A smaller button variant was needed but doesn't exist in the design system.
- **Root cause:** Missing `btn-primary-sm` or `btn-sm` variant in the component utility classes.
- **Fix:** Add a `.btn-sm` modifier class in `globals.css` (e.g., `@apply !py-2.5 !px-5 !text-[13px]`) or define a `btn-primary-sm` variant. Replace all `!important` overrides.

#### M6: Homepage hero `min-h-[90vh]` + mobile browser chrome
- **Where:** `src/app/page.tsx:45`
- **What:** `min-h-[90vh]` on the hero section uses CSS `vh` units, which on mobile Safari include the browser chrome height. This can push the stats bar and compliance tags below the visible viewport even on standard phone sizes.
- **Why:** `vh` on iOS Safari = full viewport including address bar. Content is vertically centered with `flex items-center justify-center`, but the stats bar (`mt-14`) after the centered content may overflow.
- **Root cause:** Using `vh` instead of `dvh` (dynamic viewport height) or a more constrained layout.
- **Fix:** Use `min-h-[90dvh]` (Tailwind v3.4 supports `dvh`) or restructure the hero so the stats bar is not dependent on the `min-h` container. Consider using `min-h-screen` with `supports-[height:100dvh]:min-h-[90dvh]`.

#### M7: Background gradient blurs risk horizontal overflow
- **Where:** `src/app/page.tsx:48–49` (`w-[1000px]`), `src/components/Hero.tsx:29` (`w-[900px]`), `src/components/CtaBand.tsx:19` (`w-[600px]`)
- **What:** Large decorative blur elements (up to 1000px wide) are positioned with transforms. While parent sections have `overflow-hidden`, the homepage hero at line 45 has it on the `<section>`, which should contain it. However, if any parent has `overflow: visible`, these can cause horizontal scrollbars.
- **Root cause:** Decorative elements wider than viewport without guaranteed containment.
- **Fix:** Add `overflow-x: hidden` to `<body>` or `<html>` in `globals.css` as a safety net: `html { overflow-x: hidden; }`. Verify all sections with blur decorations have `overflow-hidden`.

### Minor

#### m1: Inconsistent card padding across components
- **Where:** Multiple files
- **What:** `ServiceCard` uses `p-6 sm:p-8`. Compliance page cards use `p-6`. Homepage bransch cards use `p-6`. DeliverablesList cards use `p-5`. Sub-page inline cards use `p-5`.
- **Root cause:** No standardized card padding token.
- **Fix:** Standardize on two card sizes: `card-sm` (p-5) and `card-md` (p-6 sm:p-8) or similar.

#### m2: Contact form checkbox tap target below 44px minimum
- **Where:** `src/components/ContactForm.tsx:189`
- **What:** GDPR checkbox is `h-4 w-4` (16x16px). The associated label is clickable and expands the target, but the visual checkbox itself is small.
- **Root cause:** Default checkbox sizing without a custom touch-target wrapper.
- **Fix:** Wrap the checkbox in a larger click area (e.g., `min-h-[44px] min-w-[44px] flex items-center justify-center`) or use a custom checkbox component.

#### m3: Footer "Om oss" section nested inside Compliance column
- **Where:** `src/components/Footer.tsx:83–92`
- **What:** The "Om oss" heading and links are nested inside the Compliance `<ul>`, making them semantically part of the same list. Visually it works but it's structurally incorrect.
- **Root cause:** Layout convenience – fitting 6 link groups into a 5-column grid by combining two groups.
- **Fix:** Either use a 6-column footer grid at `xl` and combine at smaller breakpoints, or separate the "Om oss" section into its own `<div>` within the grid cell.

#### m4: Breadcrumbs `pt-24` is tightly coupled to header height
- **Where:** `src/components/Breadcrumbs.tsx:28`
- **What:** `pt-24` (96px) assumes the header is 72px tall and adds 24px spacing. If the header height changes, this breaks.
- **Root cause:** Hardcoded coupling between component and header height.
- **Fix:** If C3 is fixed (adding `pt-[72px]` to `<main>`), Breadcrumbs can use simple spacing like `pt-4 pb-2`.

#### m5: `text-dark-500` contrast may be insufficient for informational text
- **Where:** Used across Footer, Breadcrumbs, form labels, section category labels
- **What:** `dark-500` is `#64748b` on `dark-950` (`#020617`). This gives approximately 4.6:1 contrast ratio – passes WCAG AA for normal text but fails AAA.
- **Root cause:** Color token choice for de-emphasized text.
- **Fix:** For any text that conveys functional information (not purely decorative), consider using `text-dark-400` (`#94a3b8`, ~7.5:1 ratio) instead. Reserve `text-dark-500` for decorative separators and non-essential meta text only.

#### m6: Homepage stats grid `grid-cols-2` wrapping on 320px
- **Where:** `src/app/page.tsx:85–97`
- **What:** The stats grid uses `grid-cols-2 sm:grid-cols-4`. Each stat has `px-4 py-5` and shows chemical formulas. At 320px, each column is ~150px wide (320 - 40px container padding = 280px / 2 = 140px). This is adequate but tight.
- **Root cause:** The 2-column mobile layout works but the visual gap-px border trick creates 1px borders that can look inconsistent at certain zoom levels.
- **Fix:** Monitor rendering at 320px. No action needed unless visual artifacts appear.

#### m7: `CtaBand` CTA button uses `mt-8` without `inline-block` or `inline-flex`
- **Where:** `src/components/CtaBand.tsx:25`
- **What:** The CTA link inside `CtaBand` uses `className="btn-primary mt-8"`. Since `btn-primary` includes `inline-flex`, the `mt-8` works correctly. No issue here – but note that the element is centered via the parent's `text-center`, which works for inline-level elements. If `btn-primary` were `flex` instead of `inline-flex`, it would break centering.
- **Root cause:** N/A – this is a documentation note, not a bug.
- **Fix:** No fix needed. But if the button class is ever changed, centering could break. Consider wrapping in a `flex justify-center` container for robustness.

#### m8: ProcessSteps connector line positioning is fragile
- **Where:** `src/components/ProcessSteps.tsx:22–23`
- **What:** The connector line uses `absolute left-[calc(50%+28px)] top-[22px]` and `w-[calc(100%-56px)]`. These magic numbers (28px = half of the step circle 11*4=44px/2≈22px plus gap, 56px = 2*28px) are hardcoded. If the step circle size changes, lines will misalign.
- **Root cause:** Hardcoded pixel values for decorative connector.
- **Fix:** Add a comment documenting the calculation, or use CSS custom properties for the circle diameter.

---

## 3. Standardization Opportunities

### 3.1 Button size variants
The codebase has one button size but uses `!important` overrides in 2 places to create a smaller variant. Create explicit size variants:
- `.btn-primary` (default, current sizing)
- `.btn-primary-sm` (py-2.5 px-5 text-[13px])
- Apply the same to `.btn-secondary` and `.btn-ghost`

### 3.2 Card padding tokens
Three different card paddings are used: `p-5`, `p-6`, `p-6 sm:p-8`. Standardize:
- `.card-dark-sm` → adds `p-5`
- `.card-dark` → keep as-is (border/bg only), always pair with explicit padding
- Consider a `.card-dark-lg` → `p-6 sm:p-8`

### 3.3 Header height as a design token
The header height (72px) is referenced in:
- `Header.tsx` (explicit `h-[72px]`)
- `Breadcrumbs.tsx` (implicit `pt-24`)
- `Hero.tsx` (implicit large `pt-*` values)

Create a CSS custom property: `--header-h: 72px` and reference it everywhere.

### 3.4 Bullet list pattern
The pattern `flex items-start gap-3` + `span.h-2.w-2.rounded-full.bg-accent-400` + `span.text-dark-300 > strong.text-white` is repeated in:
- `src/app/om-oss/page.tsx`
- `src/app/branscher/page.tsx`
- `src/app/tjanster/metanmatning/page.tsx`
- `src/app/branscher/deponier/page.tsx`
- `src/app/compliance/page.tsx`

This should become a shared `<BulletList>` component.

### 3.5 "Related services/links" pill pattern
The pattern `card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600` is used identically at the bottom of:
- `src/app/tjanster/metanmatning/page.tsx`
- `src/app/branscher/deponier/page.tsx`
- `src/app/om-oss/page.tsx`

Extract to a `<RelatedLinks>` component or a `.pill-link` utility class.

---

## 4. Proposed Implementation Plan

### Phase 1: Must-Fix (Critical + High-Impact Major)

1. Fix mobile menu: scroll lock + fixed overlay + internal scroll (C1, C2)
2. Add header height offset to `<main>` in root layout (C3)
3. Fix desktop dropdown: click-outside + Escape key (M1)
4. Add `overflow-x: hidden` to `<html>` element (M7)
5. Fix FAQ accordion `pr-12` on mobile (M2)

### Phase 2: Should-Fix (Remaining Major)

6. Add iOS safe-area inset handling (M3)
7. Create `btn-primary-sm` variant, remove `!important` overrides (M5)
8. Fix homepage hero `vh` → `dvh` for mobile browsers (M6)
9. Add mobile-friendly alternative for compliance table (M4)
10. Fix Footer "Om oss" nesting (m3)

### Phase 3: Polish (Minor)

11. Standardize card padding tokens (m1)
12. Improve checkbox tap target (m2)
13. Extract `BulletList` component (standardization 3.4)
14. Extract `RelatedLinks` component (standardization 3.5)
15. Add header height CSS custom property (standardization 3.3)
16. Audit `text-dark-500` usage for contrast (m5)
17. Add comments to ProcessSteps connector calculations (m8)

---

## 5. Ready-for-Implementation Checklist

1. [ ] `Header.tsx`: When `mobileOpen` is true, add `useEffect` to set `document.body.style.overflow = 'hidden'` and clean up on unmount/close. Make mobile menu container `fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-dark-950`.
2. [ ] `layout.tsx`: Add `pt-[72px]` to the `<main>` element (or use a CSS variable `--header-h: 72px`).
3. [ ] `Breadcrumbs.tsx`: Change `pt-24` to `pt-4` (since main now handles header offset).
4. [ ] `Hero.tsx`: Reduce top padding values by 72px equivalent (e.g., `pt-28` → `pt-8`, adjust per breakpoint).
5. [ ] `page.tsx` (homepage): Adjust hero `pt-20` since main now has header offset. Change `min-h-[90vh]` to `min-h-[90dvh]` with fallback.
6. [ ] `globals.css`: Add `html { overflow-x: hidden; }` in `@layer base`.
7. [ ] `Header.tsx`: Replace dropdown `onBlur` + `setTimeout` with a click-outside `useRef`/`useEffect` pattern and `Escape` key handler.
8. [ ] `FaqAccordion.tsx`: Change `pr-12` to `pr-4 sm:pr-12` on the `<dd>` element.
9. [ ] `globals.css`: Add `.btn-sm { @apply !py-2.5 !px-5 !text-[13px]; }` utility class.
10. [ ] `Header.tsx` + `Footer.tsx`: Replace `!py-2.5 !px-6 !text-[13px]` with `btn-sm` class.
11. [ ] `layout.tsx`: Add `viewport-fit=cover` to the viewport meta tag (via Next.js metadata config).
12. [ ] `Header.tsx`: Add `pt-[env(safe-area-inset-top)]` to the header element.
13. [ ] `Footer.tsx`: Separate "Om oss" links into their own semantic group within the grid cell.
14. [ ] `compliance/page.tsx`: Add a scroll indicator or convert the table to stacked cards at `sm:` breakpoint.
15. [ ] `ContactForm.tsx`: Wrap GDPR checkbox in a `min-h-[44px]` tap-target container.
16. [ ] Audit all uses of `text-dark-500` and upgrade to `text-dark-400` where the text conveys functional information.
17. [ ] Extract repeated bullet-list pattern into a shared `<BulletList>` component.
18. [ ] Extract repeated related-links pill pattern into a shared utility or component.
