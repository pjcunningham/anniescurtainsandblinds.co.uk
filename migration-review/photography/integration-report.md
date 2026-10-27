# Phase 2B-2: homepage photography integration

Completed locally on 27 October 2026. **Rights and customer consent remain unconfirmed, pending owner review. Do not commit or publish these photographs until visual review and rights confirmation.**

## Scope

Replaced exactly five Unsplash photographs. Approved Shuffle layout, image heights, grids, hover treatment and homepage copy are unchanged. P066 (`2019/01/SittingRoom1_4.jpg`) remains a future candidate only; craftsmanship remains text-only. No other pages, runtime dependencies, DNS or deployment configuration changed.

## Assets and optimisation

Sources are relative to the ignored `migration-source/wp-content/uploads/`. Outputs are under `public/images/home/`, copied unchanged to `dist/images/home/` by Vite. Only these 15 WebP derivatives enter the application.

Offline generator: [optimise.py](optimise.py), Python 3.12.13 / Pillow 13.0.0, Lanczos resampling, WebP quality 84, method 6. EXIF display orientation is honoured; derivatives omit original metadata. No upscaling, permanent cropping, colour/exposure alteration or repeated JPEG recompression. Originals are read-only inputs. All 356 inventory SHA-256 hashes matched both before and after generation. Regenerate from the repository root with `python migration-review/photography/optimise.py` in an environment containing Pillow 13.0.0. This is optional tooling, not part of the website build.

Byte-exact results are also recorded in [optimisation-results.json](optimisation-results.json). Savings below compare each resized WebP with its full-resolution original; they combine resizing and compression, not codec-only savings.

| ID / source | Original dimensions | Original bytes |
| --- | --- | ---: |
| P065 - `2019/01/SittingRoom1_3.jpg` | 2592 x 3888 | 1,094,868 |
| P059 - `2019/01/Kitchen1_1.jpg` | 3440 x 2312 | 945,578 |
| P072 - `2020/02/sitting-1.jpg` | 4032 x 3024 | 1,962,449 |
| P021 - `2018/10/Long-Compton-curtains-closed.jpg` | 2592 x 1944 | 779,117 |
| P038 - `2018/10/coxcoon-2-cut.jpeg` | 1911 x 2885 | 1,721,415 |

| Output filename | Dimensions | Bytes | Reduction vs original |
| --- | --- | ---: | ---: |
| `patterned-sitting-room-curtain-480.webp` | 480 x 720 | 41,816 | 96.2% |
| `patterned-sitting-room-curtain-960.webp` | 960 x 1440 | 123,342 | 88.7% |
| `patterned-sitting-room-curtain-1920.webp` | 1920 x 2880 | 344,330 | 68.6% |
| `kitchen-curtain-pair-640.webp` | 640 x 430 | 48,058 | 94.9% |
| `kitchen-curtain-pair-1280.webp` | 1280 x 860 | 129,598 | 86.3% |
| `kitchen-curtain-pair-1920.webp` | 1920 x 1290 | 230,492 | 75.6% |
| `corner-roman-blinds-640.webp` | 640 x 480 | 32,244 | 98.4% |
| `corner-roman-blinds-1280.webp` | 1280 x 960 | 97,208 | 95.0% |
| `corner-roman-blinds-1920.webp` | 1920 x 1440 | 213,606 | 89.1% |
| `sloping-window-curtains-640.webp` | 640 x 480 | 38,444 | 95.1% |
| `sloping-window-curtains-960.webp` | 960 x 720 | 92,230 | 88.2% |
| `sloping-window-curtains-1280.webp` | 1280 x 960 | 178,028 | 77.2% |
| `patterned-curtains-room-480.webp` | 480 x 725 | 74,900 | 95.6% |
| `patterned-curtains-room-800.webp` | 800 x 1208 | 187,998 | 89.1% |
| `patterned-curtains-room-1280.webp` | 1280 x 1932 | 413,866 | 76.0% |

The five originals total **6,503,427 bytes**. One largest derivative per image totals **1,380,322 bytes**, a **78.8% reduction**. All 15 variants together occupy **2,246,160 bytes**; browsers download selected candidates, not all variants.

## Responsive sizing and loading

- Three width variants per photograph cover ordinary and approximately 2x displays, including the wide 1023px tablet layout. Full framing is retained, so portrait files contain pixels hidden by CSS; this is the tradeoff for reversible cropping without extra art-directed variants.
- Width-descriptor `srcset` and breakpoint-specific `sizes` follow the existing 40px/64px/96px outer padding, 1280px container cap and nested grid gaps. For landscape images in taller slots, `sizes` uses a minimum effective image width to account for `object-cover` scaling by height (curtains 447/625px, blinds 374/467px, sloping-window tile 374/480px). This deliberately exceeds the element width where side cropping requires more source pixels.
- Explicit width/height attributes describe each fallback file. Existing fixed CSS heights and full widths continue reserving the exact slot before image loading; `object-cover` is unchanged.
- Hero is eager with `fetchpriority="high"`. Four lower images are lazy-loaded with asynchronous decoding. No image-loading JavaScript or runtime processing was introduced.
- Root-relative `/images/home/` URLs work from the homepage and nested routes in both development and production preview. Existing root-domain deployment assumptions remain unchanged.

Measured production slots (CSS pixels, rounded):

| Viewport | Hero | Curtains | Blinds | Wider work | Narrower work |
| ---: | --- | --- | --- | --- | --- |
| 375 | 335 x 390 | 335 x 300 | 335 x 280 | 335 x 280 | 335 x 240 |
| 768 | 704 x 520 | 704 x 420 | 704 x 350 | 344 x 360 | 344 x 300 |
| 1023 | 959 x 520 | 959 x 420 | 959 x 350 | 472 x 360 | 472 x 300 |
| 1024 | 518 x 620 | 525 x 420 | 363 x 350 | 343 x 360 | 239 x 300 |
| 1440 | 723 x 620 | 730 x 420 | 510 x 350 | 480 x 360 | 337 x 300 |

Cold Chromium 1x image selections after scrolling all images into view:

| Viewport | Total selected image bytes |
| ---: | ---: |
| 375 | 235,462 |
| 768 | 463,492 |
| 1023 | 463,492 |
| 1024 | 316,988 |
| 1440 | 398,528 |

Browser choices vary with display density, cache and browser heuristics. These are image-body byte counts, not total page/network transfer measurements.

## Focal positions and visual review

See [responsive crop review](integration-crops.jpg); rows are 375, 768, 1023, 1024 and 1440px, columns follow homepage order. These are scaled browser screenshots for review, not production assets.

| Photograph | CSS object-position | Result / remaining compromise |
| --- | --- | --- |
| P065 hero | `50% 0%` | Keeps the source heading, patterned curtain and visible window at all inspected widths. Bottom furniture is removed. Dark right side and bright window are inherent in the original; no exposure correction applied. |
| P059 curtains | `50% 0%` | Both panels remain visible. Top alignment protects headings and trims table area in wide slots. At 375px and near 1024px, the fixed taller slot trims outer sides of the panels and leaves more table; showing every panel edge would require changing the layout or fit mode. |
| P072 blinds | `50% 45%` | Both blinds remain recognisable. At 1023px the wide, shallow slot concentrates on folds and trims upper/lower context. |
| P021 wider work | `50% 0%` | Preserves the visible sloping line. Taller tablet/1024px crops trim sides. The highest left part already meets/exits the source frame; missing original context cannot be recovered. Shelf and cube remain. |
| P038 narrower work | `50% 45%` | Lower focus includes chair/cushion context alongside patterned curtain and window, including mobile. Some heading/top and lower chair area is lost in shallow slots. Telescope remains prominent; owner should specifically review this compromise. |

A single focal position per photograph worked across the inspected breakpoints; no responsive focal override was needed. Alt text describes visible subjects without customer/project attribution.

## Verification

- `pnpm test`: **16 tests passed**. Tests preserve all original homepage copy/design classes, enforce five meaningful image descriptions, eager/high hero and lazy lower images, source-set mapping, local paths, WebP signatures and source-width limits.
- Regression HTTP checks fetch every variant in both Vite development and production preview, resolving paths from `/` and `/category/curtains/`, checking status, image MIME type and exact output bytes. Existing tests also check all six page routes.
- `pnpm build`: passed. Exactly 15 WebP derivatives are copied into `dist/images/home/`; no original uploads are included.
- `pnpm preview`: started successfully at `http://127.0.0.1:4173/`; production page inspected with installed Chromium/Playwright at 375, 768, 1023, 1024 and 1440px, 1x pixel density. Every image decoded, requests were local, no Unsplash requests and no horizontal overflow. Individual crop screenshots reviewed; full desktop page also inspected.
- Optional repeatable browser regression: [check-browser.mjs](check-browser.mjs). With preview running, set `PLAYWRIGHT_MODULE` to an installed `playwright-core/index.mjs`, then run `node migration-review/photography/check-browser.mjs`. It writes temporary screenshots/results under `tmp/photography-qa/`; `PHOTO_QA_URL` can target a development server. No Playwright dependency was added to this project.
- The first new HTTP test exceeded its default timeout because deep comparison of binary buffers was expensive. Replaced it with byte-exact `Buffer.equals`; the final full suite passes in roughly 1.2 seconds.

## Outstanding review

- **Owner visual approval, copyright/image rights and customer interior consent remain outstanding. Local development approval is not public reuse approval.**
- P038 telescope prominence, P065 exposure, P059 mobile side trimming and P021 source-edge framing need owner acceptance. No retouching has been applied.
- Existing "Project image placeholder" captions and "Project photographs will be added here" copy remain exactly as requested by the no-content-rewrite constraint. They need a separately authorised content pass before publication.
- Chromium 1x visual checks were performed; other browsers, high-density visual review and field performance metrics were not measured.
- No commit, push or publication was performed.
