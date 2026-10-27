# Site migration audit: Annie's Curtains and Blinds

Audit date: **27 October 2026**  
Existing site: <https://anniescurtainsandblinds.co.uk/>  
Purpose: evidence-based inventory for a future Pug/Tailwind static replacement, eventually hosted on GitHub Pages. This is a planning document, not an implementation specification or approval to remove content.

## 1. Scope, method and confidence

Public HTML was inspected for the homepage, both standalone pages, all eight sitemap-listed articles, all five linked categories, category pagination, both linked tags, author pagination, and the three linked monthly archives including pagination. Navigation, article text, image references, metadata and sitemap responses were examined. Selected image URLs received HEAD requests only; image binaries were not downloaded. No login, form submission, administrative access or changes to the live site were made.

Discovery sources:

- [Homepage](https://anniescurtainsandblinds.co.uk/), its header/footer links and featured articles.
- [robots.txt](https://anniescurtainsandblinds.co.uk/robots.txt): advertises `wp-sitemap.xml`, `sitemap.xml` and `sitemap.html`; disallows `/wp-admin/` except `admin-ajax.php`.
- [XML sitemap index](https://anniescurtainsandblinds.co.uk/sitemap.xml): points to [miscellaneous URLs](https://anniescurtainsandblinds.co.uk/sitemap-misc.xml), [eight articles](https://anniescurtainsandblinds.co.uk/post-sitemap.xml) and [two pages](https://anniescurtainsandblinds.co.uk/page-sitemap.xml).
- [HTML sitemap](https://anniescurtainsandblinds.co.uk/sitemap.html): plugin-generated index linking its three HTML child sitemaps.
- [WordPress sitemap endpoint](https://anniescurtainsandblinds.co.uk/wp-sitemap.xml): HTTP 200 but an empty `urlset` at inspection. `/sitemap_index.xml` returned 404. Neither is evidence that the site has no content.

Direct live HTTP responses take precedence over search-tool extracts, some of which were cached and showed an older footer year or omitted sidebars/pagination. A supplementary domain search returned no results; this does **not** establish that the site is unindexed. The sitemap and fully followed author archive agree on eight articles. This is a strong inventory of discoverable content, not proof that no orphaned URLs, attachments or historical redirects exist.

**Observed content:** homepage + two standalone pages + eight articles = **11 substantive URLs**, plus three important navigation category URLs and supporting archive/technical URLs. All 14 primary URLs in section 3 returned HTTP 200. Article publication dates are 2018–2019; testimonials include 2020. A 2026 footer is not evidence that business information has recently been reviewed.

## 2. Existing navigation and user journeys

| Location | Observed links / behaviour | Migration implication |
| --- | --- | --- |
| Site identity | Business name links to `/`; tagline describes handmade, made-to-measure curtains and blinds in Oxfordshire | Retain identity and regional relevance; no separate About page discovered |
| Header | `Categories` is a parent label without an href; children: Blinds, Curtains, Curtain Headings; then Testimonials and Contact | Replace the generic category label with direct, customer-facing navigation |
| Footer | Blinds, Curtains, Curtain Headings; two telephone links; copyright | Retain useful service/contact access |
| Homepage | Contact Us; featured links to Child Safety and Blinds, Eyelet Curtains, Choosing the Perfect Curtain | Retain a clear contact route and contextual advice links |
| Article/archive sidebar | Annie's name and phone numbers; search; five recent posts; January 2019, October 2018, January 2018 archives; five categories | Contact information remains useful; blog machinery can be simplified |
| Article metadata | Annie Holden author archive; categories; two tags on Difficult windows | Preserve authorship where useful without requiring archive widgets |

The current service navigation opens full-text article archives, generally three posts per page. It does not open dedicated service descriptions. This hides useful advice behind pagination and repeats article content across several URLs.

## 3. Primary content and URL preservation register

Classification describes the **content**, not permission to abandon its URL:

- **Retain substantially unchanged:** preserve the information/story; light editing and accessibility work are still appropriate.
- **Rewrite/modernise:** keep the subject and useful evidence, update presentation or claims.
- **Merge into another page:** consolidate overlapping material; retain a useful legacy destination until a redirect strategy is approved.
- **Potentially remove:** low-value presentation or duplicate content; subject to traffic/backlink checks and an explicit URL decision.

Every URL below should remain reachable at launch. The preferred initial strategy is to retain the paths, including trailing slashes. Dates are displayed publication dates, not inferred project completion dates. Titles in the second column are also the observed HTML titles and H1s, except the homepage as noted.

| Existing URL | Current title / date | Evidence and classification | Recommended destination / treatment |
| --- | --- | --- | --- |
| [Homepage](https://anniescurtainsandblinds.co.uk/) | Title: `Annie's Curtains and Blinds – Hand made, made to measure curtains and blinds, Oxfordshire`; H1: business name | **Rewrite/modernise.** Introduction to Annie; curtains, Roman blinds, other furnishings, home visits, fabric advice, alterations, fitting and geographic coverage | Keep `/`. Shorter overview with clear service links, selected work, testimonial excerpts and contact action. Move detailed service material to the relevant hubs |
| [Contact](https://anniescurtainsandblinds.co.uk/contact/) | Contact | **Retain substantially unchanged**, after confirming details. Telephone, mobile, email and postal address; no contact form in inspected HTML | Keep `/contact/`; include confirmed service area and explain whether visits to the address are possible |
| [Testimonials](https://anniescurtainsandblinds.co.uk/testimonials/) | Testimonials | **Retain substantially unchanged.** Seven attributed, dated testimonials; several associated work photographs | Keep `/testimonials/`. Preserve quotations, names and dates accurately; make all entries accessible without relying on a carousel |
| [Blinds](https://anniescurtainsandblinds.co.uk/category/blinds/) | Blinds | **Rewrite/modernise.** Archive contains safety, choosing curtains and bespoke-benefits articles; currently `noindex` | Keep this path initially as a substantive Blinds service hub, using homepage Roman-blind material and linking to safety advice |
| [Curtains](https://anniescurtainsandblinds.co.uk/category/curtains/) | Curtains | **Rewrite/modernise.** Five articles across two pages: Difficult windows, Not just for windows, Eyelet Curtains, Choosing the Perfect Curtain, Why Choose Bespoke Curtains or Blinds? | Keep this path initially as Curtains service hub with alterations, linings, fabrics, fitting and project links |
| [Curtain Headings](https://anniescurtainsandblinds.co.uk/category/curtain-headings/) | Curtain Headings | **Rewrite/modernise.** Four articles across two pages: Pleating to pattern, Inverted Pleats, Eyelet Curtains and Choosing the Perfect Curtain | Keep this path initially as a comparison/selection hub, linking to individual guides |
| [Why Choose Bespoke Curtains or Blinds?](https://anniescurtainsandblinds.co.uk/why-choose-bespoke-curtains-or-blinds/) | Why Choose Bespoke Curtains or Blinds? — 22 Jan 2018 | **Merge into another page.** Overlaps homepage/service benefits. Correct spelling and reconsider the absolute claim about ready-made pinch-pleat curtains | Merge useful benefits into Curtains and Blinds hubs. Initially retain a concise, useful page at this URL linking to both; later redirect only if a suitable single destination and redirect mechanism are agreed |
| [Choosing the Perfect Curtain](https://anniescurtainsandblinds.co.uk/choosing-the-perfect-curtain/) | Choosing the Perfect Curtain — 22 Jan 2018 | **Rewrite/modernise.** Five-step guide to purpose, room needs, space, heading style and fabric; useful practical advice with numeric allowances and a broken internal link | Keep URL as main buying/selection guide. Review numerical guidance with Annie and replace vague step headings with descriptive headings |
| [Eyelet Curtains](https://anniescurtainsandblinds.co.uk/eyelet-curtains/) | Eyelet Curtains — 22 Jan 2018 | **Rewrite/modernise.** Useful style/fabric guidance and local blacksmith reference; relative birthday statement is stale | Keep URL as heading guide. Remove relative age reference; confirm whether bespoke pole supply is still available |
| [Child Safety and Blinds](https://anniescurtainsandblinds.co.uk/child-safety-and-blinds/) | Child Safety and Blinds — 7 Oct 2018 | **Rewrite/modernise — priority review.** Historical safety/regulatory assertions, installation heights, breakaway mechanism advice and motorisation claims | Keep URL and prominent link from Blinds. Have current advice checked against authoritative guidance and the actual systems supplied before republishing; this audit does not validate the old instructions |
| [Inverted Pleats](https://anniescurtainsandblinds.co.uk/inverted-pleats/) | Inverted Pleats — 13 Oct 2018 | **Retain substantially unchanged.** Explains heading appearance, stack-back and unlined work in Enstone; two photographs | Keep URL under Curtain Headings; retain project context, lightly edit, confirm quantitative fabric guidance |
| [Not just for windows](https://anniescurtainsandblinds.co.uk/not-just-for-windows/) | Not just for windows — 13 Oct 2018 | **Retain substantially unchanged.** Ascott-under-Wychwood stair/banister curtain project demonstrating draught control and screening | Keep URL as a small project story linked from Curtains; retain image and historical framing |
| [Difficult windows](https://anniescurtainsandblinds.co.uk/difficult-windows/) | Difficult windows — 13 Oct 2018 | **Retain substantially unchanged.** Long Compton sloping-window/door project with bespoke pole and three process/result images | Keep URL as a case study; connect to Curtains and the related Chris & Ken testimonial; confirm the association with Annie before presenting it as definitive |
| [Pleating to pattern](https://anniescurtainsandblinds.co.uk/pleating-to-pattern/) | Pleating to pattern — 20 Jan 2019 | **Retain substantially unchanged.** Burford project contrasts patterned triple pinch pleats and pencil pleats in two rooms | Keep URL as a guide/project story linked from Curtain Headings |

## 4. Secondary URLs and proposed handling

All paths in this section are relative to **`https://anniescurtainsandblinds.co.uk`**; the base plus path is the exact URL. These are not additional unique articles. Unless explicitly labelled otherwise, HTML paths were fetched successfully with HTTP 200.

| Existing path(s) | Observation | Classification and migration action |
| --- | --- | --- |
| `/category/curtains/page/2/` | Remaining two Curtains articles; `noindex` | **Merge into another page:** Curtains hub. Preserve a small legacy index or route to the hub through an agreed redirect mechanism |
| `/category/curtain-headings/page/2/` | Choosing the Perfect Curtain; `noindex` | **Merge into another page:** Curtain Headings hub; same compatibility requirement |
| `/category/front-page/` | Safety, Eyelet and Choosing articles; `noindex` | **Potentially remove** editorial taxonomy; a legacy list of these three links is a safe interim destination |
| `/category/uncategorized/` | Pleating to pattern only; `noindex` | **Merge into another page:** Pleating to pattern; do not reproduce an Uncategorized navigation item |
| `/tag/apex-window/` and `/tag/bespoke-curtain-pole/` | Both contain Difficult windows only; `noindex` | **Merge into another page:** Difficult windows; preserve/redirect these entry points if required by inbound-link evidence |
| `/author/annie/`, `/author/annie/page/2/`, `/author/annie/page/3/` | Together enumerate all eight posts; author archive is `noindex` | **Potentially remove** archive UI; retain authorship on articles and consider a single legacy index linking to all eight |
| `/2019/01/` | Pleating to pattern; `noindex` | **Potentially remove** monthly navigation; retain useful legacy links or map to corresponding article |
| `/2018/10/`, `/2018/10/page/2/` | Four October articles; first page is `noindex` | **Potentially remove** monthly navigation; legacy index should link to all four, not arbitrarily one |
| `/2018/01/` | Three January articles; `noindex` | **Potentially remove** monthly navigation; use an article index if preservation is needed |
| `/page/2/`, `/page/3/` | Repeat homepage layout/content; own canonical URLs; no `noindex` observed; discovered via head pagination | **Merge into another page:** `/`; avoid continuing duplicate indexable homepages |
| `/eyelet-curtains` | Existing in-content link resolves to `/eyelet-curtains/` | Preserve slash normalisation; use canonical trailing-slash URL in new links. Final URL was observed, intermediate redirect code was not captured |
| `/how-to-choose-the-perfect-window-treatment/tab-top-curtains` | Linked from Choosing guide; **404** | **Potentially remove** broken link, or replace with an accurate heading-guide section. Record as a historical URL; no recoverable content established |
| `/sitemap.html` | Plugin-generated sitemap index, title `XML Sitemap` | **Rewrite/modernise** as a simple static sitemap if retaining this public entry point |
| `/sitemap-misc.html`, `/post-sitemap.html`, `/page-sitemap.html` | Linked from HTML sitemap; child HTML pages not fetched separately | **Potentially remove** plugin presentation; decide compatibility route to the replacement sitemap |
| `/sitemap.xml`, `/sitemap-misc.xml`, `/post-sitemap.xml`, `/page-sitemap.xml`, `/wp-sitemap.xml` | XML endpoints inspected; WordPress endpoint is empty | Replace with accurate static sitemap output; keep `/sitemap.xml` as discovery entry point and update robots. Decide whether old child endpoints remain useful aliases |
| `/feed/`, `/comments/feed/` | Advertised in HTML head; feeds not fetched or subscriber usage measured | **Potentially remove** WordPress feed generation; assess subscriptions before retirement, or generate a static feed later if justified |

Do not blanket-redirect every old URL to the homepage. A noindex setting reduces the case for keeping duplicate archive content but does not prove there are no bookmarks or inbound links. Exact redirect/compatibility decisions remain implementation work, informed by analytics and backlink evidence unavailable here.

## 5. Reusable business content

### Contact details

Source: [Contact](https://anniescurtainsandblinds.co.uk/contact/), corroborated by homepage/footer telephone links.

| Field | Published value | Reuse note |
| --- | --- | --- |
| Business | Annie's Curtains and Blinds | Preserve spelling and apostrophe consistently |
| Person | Annie Holden | Main introduction, contact and article author |
| Telephone | 01993 830687 | Existing href: `tel:01993830687` |
| Mobile | 07989 497253 | Existing href: `tel:07989497253` |
| Email | annie@anniescurtainsandblinds.co.uk | Existing mailto includes `?subject=Send%20a%20message`; subject is optional |
| Postal address | 19 Church View, Ascott-under-Wychwood, Oxfordshire, OX7 6AA | Labelled postal address, not established as a walk-in showroom |

Confirm currency with the owner before launch. No opening hours, booking system, prices, response-time promise or showroom arrangements were established. Preserve domain email when changing web hosting; mail migration is a separate matter.

### Services and process

Source: [homepage](https://anniescurtainsandblinds.co.uk/). **Rewrite/modernise** into concise service modules: handmade curtains and Roman blinds; home consultation and measuring; fabric/style advice and sourcing; linings/interlinings; poles/tracks/rails and hanging/fitting; adjustments/remaking existing curtains where practical. Ancillary work includes re-upholstery, loose covers, bedheads, cushions, throws, tablecloths and tea cosies. Confirm which ancillary services remain offered before giving them prominent navigation.

Keep the distinction that fabric is sourced for individual orders rather than stocked. Do not invent free consultations, guarantees, lead times or product ranges. Claims about word-of-mouth-only work, fabric availability and suppliers need owner confirmation. Detailed service material can move from the homepage to the Curtains/Blinds hubs without losing the home page's introductory purpose.

### Service area

Source: [homepage](https://anniescurtainsandblinds.co.uk/) body and repeated footer. **Rewrite/modernise** the presentation, retaining confirmed locations:

- Base: Ascott-under-Wychwood.
- Main counties: Oxfordshire, Warwickshire, Worcestershire and Gloucestershire.
- Occasional work: Berkshire and Buckinghamshire; do not present these as unconditional coverage.
- Body examples: Oxford, Charlbury, Witney, Burford, Chipping Norton, Lechlade, Stow-on-the-Wold and Bourton-on-the-Water.
- Additional footer examples: Woodstock, Stonesfield, Fifield, Leafield and Abingdon. Footer also uses abbreviated `Stow` and `Bourton on Water`; normalise only after checking intended places.

Replace the repeated location-keyword paragraph with readable coverage information on Contact and a short regional summary elsewhere. No separate town landing pages were discovered; do not infer that each town requires its own page.

### Testimonials

Source: [Testimonials](https://anniescurtainsandblinds.co.uk/testimonials/). **Retain substantially unchanged**, subject to permission/current-use confirmation. This table identifies content without copying the complete quotations.

| Attribution as displayed | Subject | Reuse opportunity |
| --- | --- | --- |
| Ruth, 2020 | Blinds for a new home; workmanship and speed; mentions Jan | Blinds service proof |
| Rachel, 2018 | Curtains improving room usability and evening warmth | Curtains/project proof |
| Suzanne, 2018 | Blinds, curtains, cushions; advice, detail and agreed timescales | General service proof |
| Chris & Ken, February 2013 | Non-standard entrance/windows and Brian's bespoke pole | Difficult-window case-study context |
| Colleen, March 2013 | Blinds installed by Simon | Blinds proof; do not imply Annie performed the installation |
| Rosy, April 2013 | Window seat, pouffe and wheelchair cushion cover | Ancillary furnishings proof |
| Claire, April 2013 | Accurate blind width/drop and praise for workmanship | Measuring/workmanship proof |

Keep original dates and attribution; do not turn historical testimonials into recent reviews, invent star ratings, or silently rewrite quoted speech. Owner approval is needed for any shortened excerpts and continued use of customer interiors/names.

## 6. Image and asset retention register

These are **observed references**, not a downloaded media library. Paths below expand against `https://anniescurtainsandblinds.co.uk`. Retention means preserve the source for later selection and optimisation, subject to ownership/customer permission; it is not approval of every image's visual quality. Photographs were identified through HTML and adjacent content, not a visual inspection of all files.

`HEAD 200` means the selected resource was checked without downloading its body. Other references have not had their availability independently checked. Variants explicitly listed were present in `src`, `srcset`, links or inline CSS; unlisted original filenames must not be guessed by stripping dimensions.

| Context / priority | Exact observed asset path(s) | Evidence and disposition |
| --- | --- | --- |
| Homepage background — candidate | `/wp-content/uploads/2018/10/background.2.jpg` | Inline CSS; HEAD 200, 993,530 bytes. Review image and crop before reuse |
| Roman blind — retain | `/wp-content/uploads/2018/10/Windrush-Hall-Roman-Blind.featured.jpg`; `/wp-content/uploads/2018/10/Windrush-Hall-Roman-Blind.200.jpg`; `/wp-content/uploads/2018/10/Windrush-Hall-Roman-Blind.1424.jpg` | Home feature and safety article/caption. `.1424.jpg` HEAD 200, 1,320,472 bytes; useful project photograph independent of old safety text |
| Safety mechanism — review | `/wp-content/uploads/2018/10/breakaway.jpg` | Safety article's 200×200 illustration; retain only if relevant to reviewed current advice |
| Eyelet curtain — retain | `/wp-content/uploads/2018/10/eyelet.1.featured.jpg`; `/wp-content/uploads/2018/10/eyelet.1424.jpg`; `/wp-content/uploads/2018/01/noke-kitchen-3-poss-300-x-400-225x300.jpg`; `/wp-content/uploads/2018/01/noke-kitchen-3-poss-300-x-400.jpg` | Home feature and article thumbnail/lightbox references. `.1424.jpg` HEAD 200, 1,511,284 bytes. Check whether linked large image and thumbnail depict the same view |
| Choosing guide feature — retain candidate | `/wp-content/uploads/2015/10/nursery-800x400.jpg`; `/wp-content/uploads/2015/10/nursery-1200x600.jpg` | Homepage card/srcset. 1200×600 variant HEAD 200, 90,072 bytes; no body image on the guide itself |
| Difficult windows — high-priority retain | `/wp-content/uploads/2018/10/Long-Compton-inside-1-lighter.jpg`; `/wp-content/uploads/2018/10/Long-Compton-pole-up.jpg`; `/wp-content/uploads/2018/10/Long-Compton-curtains-closed.jpg` | Before/pole/result sequence in article; closed-curtain image reused in testimonials. Preserve sequence and avoid duplicate asset copies |
| Not just for windows — retain | `/wp-content/uploads/2018/10/Kates-curtain-swoop.jpg` | Stair/banister curtain article |
| Inverted Pleats — retain | `/wp-content/uploads/2018/10/inverted-pleat-closed-1-1.jpg`; `/wp-content/uploads/2018/10/inverted-pleat-open.jpg` | Paired article illustrations; retain context of unlined curtains and Enstone example |
| Pleating to pattern, drawing room — high-priority retain | `/wp-content/uploads/2019/01/SittingRoom1_3-200x300.jpg`; `/wp-content/uploads/2019/01/SittingRoom1_3-768x1152.jpg`; `/wp-content/uploads/2019/01/SittingRoom1_3-683x1024.jpg` | Article srcset; 768×1152 HEAD 200, 120,590 bytes. Current 200px source is displayed at 255px width in HTML |
| Pleating to pattern, kitchen — high-priority retain | `/wp-content/uploads/2019/01/Kitchen1_1-300x202.jpg`; `/wp-content/uploads/2019/01/Kitchen1_1-768x516.jpg`; `/wp-content/uploads/2019/01/Kitchen1_1-1024x688.jpg` | Article srcset; 1024×688 HEAD 200, 122,742 bytes; comparison partner for drawing room |
| Ruth testimonial — retain | `/wp-content/uploads/2020/02/sitting-1-300x225.jpg`; `/wp-content/uploads/2020/02/sitting-1-768x576.jpg`; `/wp-content/uploads/2020/02/sitting-1-1024x768.jpg` | Testimonial srcset; 1024×768 HEAD 200, 95,291 bytes |
| Rachel / Suzanne testimonials — retain | `/wp-content/uploads/2018/10/coxcoon-2-cut.jpeg`; `/wp-content/uploads/2018/10/Blind-loo.jpg` | Images adjacent to Rachel and Suzanne respectively |
| Further Testimonials page image — retain candidate | `/wp-content/uploads/2018/01/Sitting-Room.480.jpg`; `/wp-content/uploads/2018/10/Sitting-Room.1424.jpg` | Display image and linked larger image use different month directories. Large file HEAD 200, 855,245 bytes; verify placement/association before attaching to a specific quote |
| Theme background / favicon — potentially remove | `/wp-content/themes/interior-pro/images/bg-post.jpg`; `/wp-content/themes/interior-pro/images/favicon.ico` | Theme assets, not established as bespoke brand artwork. Replace/review rather than automatically carrying theme assets forward |

Most inspected content image tags have empty `alt` attributes. Plan descriptive alt text for meaningful project photographs and empty alt only for genuinely decorative images. Preserve captions and useful before/after relationships. Check actual dimensions, image quality and orientation before choosing derivatives; several linked files are around 1 MB or more. Later produce responsive optimised assets and explicit dimensions rather than shipping every WordPress thumbnail. Keep important existing media URLs working, or map them individually, if image-search/backlink evidence warrants it. A `/wp-content/uploads/` path can be served statically; retaining a path does not require retaining WordPress.

No distinct custom logo file, downloadable brochure or PDF was identified in the inspected HTML. This is not proof that none exists in the media library.

## 7. WordPress-specific elements that need not be rebuilt

Observed public source references Genesis/Interior Pro theme assets, Genesis Extender CSS, Genesis Responsive Slider/FlexSlider, WP Featherlight, WPStudio Testimonial Slider/lightSlider, jQuery/Migrate, Superfish, WordPress block/global styles and emoji scripts. HTML comments identify WP Fastest Cache; sitemap output identifies Google XML Sitemap Generator. These are source observations, not a complete installed-plugin audit.

The static replacement need not carry over:

- PHP/database/runtime, WordPress admin, REST discovery (`/wp-json/`), XML-RPC/RSD links or generator-specific code.
- Theme widget wrappers, `wp-image-*` and post-ID classes, empty spacing paragraphs, inline sizing used for layout, and plugin-generated styling/scripts.
- Full-text duplicate category, tag, author and monthly archive systems; `Front Page` and `Uncategorized` editorial labels.
- Dynamic site search unless a demonstrated need justifies a static alternative. The existing sidebar submits a search; no search-result inventory was performed.
- Sliders/lightboxes simply because plugins exist. Retain readable testimonials and access to larger project images through an intentional, accessible presentation.
- Comments-feed machinery; no visible comment form/thread was found in the eight inspected articles. Hidden comments or subscribers cannot be ruled out.

Keep the useful functions currently bundled with those systems: accessible navigation, skip links, responsive images, article authorship where useful, contact actions, canonical metadata and sitemaps. Do not discard accessibility just because its current implementation is theme-specific.

## 8. External links and broken-link checks

These are existing outbound destinations, **not verified endorsements or confirmed current supplier relationships**. Supplier destinations were recorded from homepage HTML but not followed in this audit. Check availability, final URL, HTTPS, relevance and the owner's current ability to supply before launch.

| Existing destination | Where / issue | Action |
| --- | --- | --- |
| `https://www.andrewmartin.co.uk/` | Homepage fabric supplier | Confirm destination and relationship |
| `http://www.colefax.com/` | Homepage, Colefax and Fowler | Check HTTPS destination and branding |
| `http://www.janechurchill.com/` | Homepage | Check HTTPS destination and relationship |
| `http://www.manuelcanovas.com/` | Homepage text spells label `Manuel Conavas` | Verify preferred brand spelling and HTTPS destination |
| `fonts.googleapis.com` | Theme requests Open Sans, Lora and Homemade Apple | Decide typography later; do not automatically retain remote font requests |
| `code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css` | Theme icon CSS | Replace only if icons are actually needed; no reason to retain old CDN dependency |
| `s.w.org/images/core/emoji/…` | WordPress emoji configuration | Remove WordPress runtime dependency |
| `https://auctollo.com/`, its sitemap-generator product/help URLs, `https://wordpress.org/`, its sitemap-plugin support URL, `https://sitemaps.org` | Generated HTML sitemap attribution/help | Plugin documentation is not customer content; need not migrate |

Existing supplier links use `target="_blank"` with `rel="noopener"`. Decide a consistent link policy later. No social-profile or map link was found in the inspected customer-facing content. The broken tab-top link is **internal**, listed in section 4; it should not survive unchanged. Telephone/email links should be checked for correct values, without placing calls or sending messages as part of this audit.

## 9. SEO baseline and migration considerations

### Observed metadata and headings

- Homepage has the full title recorded in section 3 and meta description `Hand made, made to measure curtains and blinds, Oxfordshire`. Its H1 is the business name; visible content section headings are H3s, with a hidden Main Content H2.
- Both standalone pages and all eight article pages have the short titles/H1s recorded in section 3, self-referencing HTTPS canonicals and **no meta description found** in the inspected HTML. Titles lack a business-name suffix.
- Three main category archives and their inspected pagination have `noindex`; their titles/H1s are the category labels, with `– Page 2` in paginated titles. Category pages have self-referencing canonicals. Other inspected category/tag/author archive roots are also `noindex`.
- Monthly archive roots have `noindex`, but no canonical link was found in their inspected heads. Do not assume the same metadata behaviour for every archive type.
- `/page/2/` and `/page/3/` repeat homepage content and description while using separate canonicals and paginated titles. This is a duplication issue, not new content to reproduce.
- Child Safety jumps from H1 to H3 subsections; Contact uses H3 for Postal Address; Testimonials uses H5 attribution headings. Choosing uses an H2 introduction and generic H2 step headings. Improve hierarchy without losing useful topic wording.
- Source includes schema.org microdata for WebSite/WebPage, navigation, article CreativeWork and author Person. No dedicated LocalBusiness JSON-LD was identified in the inspected primary pages. This was not a structured-data validator audit.
- Sitemap timestamps are not a reliable freshness measure: the Testimonials sitemap entry reports 2018 despite a testimonial attributed to 2020. Use actual editorial revision dates in the replacement.

### Proposed migration rules

1. Preserve the existing HTTPS custom domain and primary paths. Compile future pages to support these directory-style URLs. Avoid simultaneously changing domain, information architecture and every slug without evidence of benefit.
2. Treat URL preservation separately from navigation labels: a modern Curtains hub can initially live at `/category/curtains/`. Removing `/category/` is optional, not a prerequisite for a static site.
3. Write unique, factual titles and descriptions later. Suggested title pattern: specific service/topic plus business name; include location where helpful, not as repeated town lists. These are recommendations, not approved replacement copy.
4. Give each page a meaningful H1 and logical H2/H3 structure. Retain article topics, local project context, authorship and genuine publication dates; add reviewed dates only after actual review.
5. If category URLs become substantive service hubs, deliberately revisit their inherited `noindex`. Do not copy WordPress indexing directives blindly or index thin compatibility pages merely to preserve URLs.
6. Use a single canonical per substantive page, consistent internal URLs, an accurate static XML sitemap and updated robots. Keep preview/deployment URLs from competing with the production domain. Check mobile layout, image performance, accessible links and image descriptions during implementation.
7. Review any proposed business structured data against confirmed public facts. Do not invent opening hours, showroom status, ratings or service areas.
8. Obtain Search Console, analytics and backlink evidence before retiring legacy archives/media. Record and test old-to-new mappings, including slash/host variants and any known query-based URLs. Current HTTP-to-HTTPS and www behaviour was not tested here.

GitHub describes Pages as static HTML/CSS/JavaScript hosting with custom-domain support: [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages). Consequently, plan to build Pug/Tailwind output before publication; no application setup is part of this audit. Do not assume WordPress/PHP or Apache `.htaccess` redirects will transfer. The preferred initial architecture avoids moving primary URLs. If later consolidation needs HTTP 301 redirects, explicitly establish a supported hosting/edge mechanism; a canonical tag or an HTML navigation page is not an HTTP redirect. Verify hosting constraints during the implementation phase.

## 10. Proposed information architecture

This is a content structure for review, not a design or application scaffold. Use direct top-level navigation: **Home, Curtains, Blinds, Curtain Headings, Testimonials, Contact**. The brand can supply the Home link. Provide project/advice links within service pages rather than adding several sparse top-level sections.

| Navigation / content | Proposed initial path | Content sources and purpose |
| --- | --- | --- |
| Home | `/` | Annie introduction, short service summary, regional coverage, selected work/reviews, contact route |
| Curtains | `/category/curtains/` | Homepage curtain/alteration/fabric/fitting material; bespoke benefits; links to project and heading pages |
| Blinds | `/category/blinds/` | Roman-blind service and measuring; relevant photographs and testimonials; safety guide |
| Curtain Headings | `/category/curtain-headings/` | Comparison overview linking Eyelet Curtains, Inverted Pleats and Pleating to pattern |
| Testimonials | `/testimonials/` | Seven existing testimonials, accurate dates/attributions and associated photographs |
| Contact and service area | `/contact/` | Contact details, postal-address context, coverage and how enquiries work |
| Advice: choosing curtains | `/choosing-the-perfect-curtain/` | Modernised five-step guide, linked from both service hubs |
| Advice: blind safety | `/child-safety-and-blinds/` | Reviewed current guidance; linked prominently from Blinds |
| Heading guides | `/eyelet-curtains/`, `/inverted-pleats/`, `/pleating-to-pattern/` | Existing practical content and project illustrations |
| Project stories | `/difficult-windows/`, `/not-just-for-windows/` | Evidence of bespoke problem-solving; surfaced through Curtains |
| Bespoke-benefits legacy page | `/why-choose-bespoke-curtains-or-blinds/` | Useful concise explanation linking to Curtains/Blinds after benefits are consolidated |

An About page, separate gallery, separate town pages or an ongoing news blog is not necessary to preserve the current evidence. Consider them later only if the owner provides sufficient distinct content. Ancillary furnishings can initially be a service-page section. Privacy information may need a new page once actual analytics, contact handling and third-party choices are known; no policy page was discovered in navigation or the page sitemap.

## 11. Unknowns and decisions required before implementation

| Cannot be determined reliably from public inspection | Why it matters / next evidence needed |
| --- | --- |
| Whether all contact details, services, coverage and supplier arrangements are current | Owner review of section 5 and supplier list; confirm blacksmith/pole offering |
| Current safety requirements and exact compliant systems supplied | Review current authoritative sources and manufacturer instructions with a qualified supplier; do not treat 2018 wording as validated advice |
| Copyright, photo permissions, customer consent and availability of full-resolution originals | Owner/media-library confirmation before downloading and republishing selected assets |
| Complete historic/orphaned URL list, attachment pages, query URLs, redirects and unlinked media | WordPress export, server redirect configuration/logs, Search Console and backlink data later; sitemap alone is insufficient |
| Search traffic, conversions, rankings, backlink value and feed subscribers | Analytics/Search Console/feed evidence; no claim of zero traffic or SEO value is made |
| Whether the postal address is appropriate for customer visits; hours and appointment arrangements | Owner confirmation; no invented showroom or opening times |
| Full plugin inventory, backend forms/integrations, cookies and consent behaviour | Public HTML only reveals loaded assets; no authenticated/plugin or browser-network audit was performed |
| Visual quality of all photographs, final crops, responsive behaviour and carousel interaction | Later visual review; this phase inspected content/source, not a full visual or accessibility audit |
| Domain/DNS ownership, www redirects, existing mail records and GitHub Pages configuration | Hosting discovery before deployment; retain working email records when changing web hosting |
| Whether testimonials should be supplemented with recent work | Owner-provided approved content; do not infer that old dates mean the business has ceased trading |

Before design starts, resolve business accuracy and content priorities, identify approved image originals and settle the primary URL strategy. Before launch, complete safety copy review, metadata/redirect/link checks and a baseline comparison against this inventory. No website, dependencies, build files, asset collection or deployment configuration has been created in this phase.
