# Phase 2B-1: WordPress photography review

Reviewed 27 October 2026. Selection advice only; no homepage integration, optimisation, source edits or commit.

## Deliverables and scope

- [Contact sheet](contact-sheet.pdf): 16 A4 pages, six photographs per page. Pages 1-2 show 12 shortlisted options; pages 3-16 show all 83 filename families, including rejected images and icons. Images retain their source framing, with EXIF display orientation honoured. IDs are stable within this review.
- [Inventory](image-inventory.csv): **356 image files**, one row per file: 344 JPG, two JPEG and ten PNG. All decoded successfully. Eight non-image files (five PHP, one JS and two CSS) were excluded and not executed.
- **46 distinct provisional project-photograph candidate groups**, after collapsing detected duplicate/near-duplicate views and excluding nine generic lifestyle families, one unverified styled curtain image (P015), the safety mechanism (P036), and ten theme icons. This is a review pool, not 46 approved homepage images or 46 separate projects. Twelve representative images form the shortlist.
- 273 files have WordPress dimension suffixes. There are 12 byte-identical duplicate sets containing 14 redundant copies beyond the first file in each set. Thirty exact local paths appear in the audit.

All inventory paths are relative to `migration-source/wp-content/uploads/`. The CSV `id` identifies a filename family, while `relative_path` uniquely identifies a file. `representative` is the largest decoded image by pixel area within that family, using file size to break ties; it is not a claim that the file is an untouched camera original. `photo_group` combines detected related families, including some alternate crops/views, for the provisional candidate count. Different views of the same room generally remain separate candidates.

## Evidence and method

Read `.codex/plans/SITE_MIGRATION_AUDIT.md`, `src/pages/index.pug`, header/footer components, and the Shuffle reference README and Pug template. The existing template and Shuffle reference agree on the five image slots. No live site or third-party photographs were downloaded.

Every image was decoded for format, dimensions, bytes and EXIF orientation; SHA-256 identifies exact duplicates. Dimension-suffix matching groups WordPress variants. A 64-bit difference hash is recorded for comparison, but is not treated as proof of duplication. All 83 largest-family representatives were visually reviewed, and leading candidates were inspected at larger preview sizes. The 273 resized/cropped derivatives were decoded but were not each individually examined at native pixel size. Visual grouping catches obvious resizes, exposure variants and related crops; it is not an exhaustive image-forensics result.

`audit_exact_path` records an exact path reference; `audit_family` records that a dimension-suffix sibling was referenced. For example, the audit names smaller `Kitchen1_1` and `SittingRoom1_3` variants, while their larger local originals are now available. Cross-name matches such as P050 with the audited eyelet imagery are recorded as related families, not falsely marked as exact audit references. Subject notes distinguish the audit, filename clues and visual inference. Upload folders are not taken as capture or project dates. No customer, photographer, camera, licence or completion metadata has been invented.

## Recommended photographs by homepage section

All choices require owner confirmation of copyright and continued use of customer interiors. Audit inclusion establishes prior site use, not permission.

| Section | First choice and local path | Why / crop and quality considerations | Alternatives |
| --- | --- | --- | --- |
| Homepage hero | **P065**, `2019/01/SittingRoom1_3.jpg`, **2592 x 3888** | Audit-backed Burford drawing-room curtain from *Pleating to pattern*. Strong fabric and bespoke detail; sufficient pixels. Conditional choice: right side is dark and window highlights are bright. For the desktop near-square slot, preserve the heading and patterned curtain, trimming lower furniture. At the maximum desktop slot, only about 57% of the source height remains. No polished room-wide hero clearly meets all requirements in this library. | **P066**, `2019/01/SittingRoom1_4.jpg`, 1746 x 3348: brighter, cleaner detail, but much narrower and not separately named in the audit; verify the visually related project association. **P038**, `2018/10/coxcoon-2-cut.jpeg`, 1911 x 2885: fuller room story, but telescope dominates and a near-square crop loses top/bottom context. |
| Bespoke Curtains | **P059**, `2019/01/Kitchen1_1.jpg`, **3440 x 2312** | Audit-backed Burford kitchen; best combination of landscape framing, two curtain panels and useful resolution. At the large desktop slot (about 1.74:1), retain the top headings and both panels, trimming some table at the bottom. Roughly 86% of source height survives. Mild exposure/white-balance review. | **P033**, `2018/10/asthall-dining-room-1.jpg`, 3264 x 2448: good landscape arrangement but darker, softer, with a large foreground table; Asthall is a filename clue only. **P050**, `2018/10/noke-kitchen-3-poss.jpg`, 2448 x 3264: larger local source matching the audited eyelet view; portrait-to-landscape crop is difficult and cluttered. |
| Made-to-Measure Blinds | **P072**, `2020/02/sitting-1.jpg`, **4032 x 3024** | Audit links the image to Ruth's testimonial. Clear corner Roman-blind folds and ample pixels; near-landscape composition suits the slot. At the largest desktop ratio, about 91% of source height remains. Keep both blinds and reduce empty ceiling/window area; review ceiling perspective and cool window light. It illustrates finished blinds, not a verified safety claim. | **P028**, `2018/10/Windrush-Hall-Roman-Blind.1424.jpg`, 1424 x 1573: audit-backed, more complete single-window setting. Wide crops need top-biased framing to retain the blind and avoid lower bottle/phone clutter. **P027**, `2018/10/Sitting-Room.1424.jpg`, 1424 x 949: colourful floral blind; do not attach it to a particular testimonial without confirmation. |
| Craftsmanship | **P066**, `2019/01/SittingRoom1_4.jpg`, **1746 x 3348** | Best clean heading/pattern detail among the inspected local alternatives. Visually related to P065, but not itself named in the audit. Suitable for a future detail treatment, not evidence of a workshop or sewing process. **The approved craftsmanship area is text-only; there is no existing image slot or crop ratio. Do not add one during this phase.** | **P065** supplies the audited association. **P068**, `2020/02/bed-2-1.jpg`, 4032 x 3024, shows crisp Roman-blind folds but needs project/provenance confirmation and warm-colour review. **P039** is a useful triple-pleat/button subject, but at 302 x 249 is too small; request a larger original. |
| Our Work: wider tile | **P021**, `2018/10/Long-Compton-curtains-closed.jpg`, **2592 x 1944** | Audit-backed *Difficult windows* finished result. Its 4:3 source closely fits the wider desktop tile. Keep the entire sloping top: that is the bespoke story. Shelf and coloured cube distract. The apparent connection to Chris & Ken remains unconfirmed. | **P059** if not already used for Curtains; **P028** for a blinds-led gallery. Preserve the before/pole/result sequence for a later case study rather than using an unfinished view as the main result. |
| Our Work: narrower tile | **P038**, `2018/10/coxcoon-2-cut.jpeg`, **1911 x 2885** | Audit places it adjacent to Rachel's testimonial. Patterned curtains in a lived-in room provide variety. Portrait source needs considerable top/bottom crop in the desktop tile: about 59% of height survives. Retain heading and enough chair context; telescope remains prominent. | **P020**, `2018/10/Kates-curtain-swoop.jpg`, 2448 x 3264: audited stair/banister project, but visibly soft with bright right edge and domestic clutter. **P027** offers a simpler blind view. |

Avoid using P065/P066 or multiple near-identical blind details repeatedly across the homepage. The preferred five-slot starting set is P065, P059, P072, P021 and P038, subject to the issues above. This is a recommendation for review, not approval to replace images.

## Layout and resolution checks

The layout uses fixed heights with `object-cover`, not fixed aspect ratios. Approximate maximum desktop slots, calculated from the existing max-width/grid/gap classes, are:

| Slot | Approximate maximum desktop display | Suggested 2x crop pixel budget |
| --- | --- | --- |
| Hero | 723 x 620 CSS px | 1446 x 1240 |
| Curtains | 730 x 420 | 1460 x 840 |
| Blinds | 510 x 350 | 1020 x 700 |
| Gallery wider tile | 480 x 360 | 960 x 720 |
| Gallery narrower tile | 337 x 300 | 674 x 600 |

These are planning targets, not measurements from a new browser render. At a 375px viewport, the hero is about 335 x 390; at 768px it is about 704 x 520. Service images also become full-width before the large breakpoint: at 768px the blinds slot is about 704 x 350. Near the 1024px breakpoint, those single-column slots can become wider still. Check those transitional widths as well as desktop and mobile during a later integration phase.

P028 and P027 can cover the 768px-wide layout at approximately 2x with carefully selected crops, but cannot maintain 2x at the widest pre-desktop single-column widths. Do not infer retina suitability solely from a filename such as `.1424`. P065/P059/P072 have ample crop pixels for the intended slots. Cropping P050 to the desktop Curtains ratio retains only about 43% of its height, losing the full drape. Cropping P035's 2.25:1 background to the desktop hero retains only about 52% of its width, worse on narrow screens; its 800px height is also below the 2x hero target.

No crop, recolouring, exposure adjustment or web derivative has been applied. The PDF contains review thumbnails only.

## Duplicates and variants

The CSV lists exact duplicate paths, filename-family representatives and related family IDs. Do not use small WordPress variants as new independent photographs.

| IDs | Relationship / handling |
| --- | --- |
| P016-P019 | Four byte-identical closed-curtain originals. One image, not four portfolio entries. |
| P044/P045 | Byte-identical original; P045 is the audited name. |
| P068/P069 | Original and all nine corresponding WordPress derivatives match byte-for-byte. |
| P010/P027 | Same floral-blind view at different sizes; prefer P027. |
| P011/P040/P041/P042/P050 | Same eyelet scene, resized and feature-cropped variants; prefer larger P050 after quality review. Audit explicitly requested this comparison; visual review supports the same view. |
| P020/P048/P049 | Same-looking stair-curtain frame and smaller variant; P020 has audited context. P047 is a related view with a person, not merged into this group. |
| P023/P024 | Original/darker and lightened versions of the same entrance view. Preserve P024's audited context. |
| P028/P029/P030 | Full Roman-blind view, tiny resize and feature crop; prefer P028. |
| P034/P035 | Related wide framing of the same curtain/room scene; grouped conservatively for selection, not asserted byte-identical or identical captures. |

P070/P071 show the same floral blind from different viewpoints and remain separate candidates. Similar room names, upload dates or matching textiles alone are not proof of file duplication or customer identity.

## Additional review flags

- **Small originals / sources:** P010 480 x 320, P011 300 x 400, P012 480 x 640, P013/P014/P026 640 x 480, P015 564 x 845, P029 200 x 221, P032 display 605 x 319, P036 200 x 200, P039 302 x 249 and P049 300 x 400. Some have larger siblings as listed above; P012/P013/P014/P026/P039 need better originals for prominent use. P030/P040/P042 are 740 x 370 feature crops, not full-resolution sources.
- **Soft or visibly weak detail:** P020/P047/P048/P049 stair-curtain series; P031/P033 Asthall interiors; P016-P019 and P044-P046 backlit pleats. Large dimensions do not guarantee sharpness. P012-P014 combine limited resolution with deep shadows. Hero-scale use is particularly unforgiving.
- **Exposure / colour:** P065 dark interior and bright window; P063 especially underexposed; P050 eyelet window contrast; P016-P019 and P044-P046 yellow/green backlighting; P068/P069 and P070/P071 warm casts. P059/P066 are more promising but still require colour review. Do not promise recovery of clipped highlights or certify exact fabric colour from these files.
- **Difficult crops:** P034/P035 wide banners into the tall hero; P050 into Curtains; P066 into any wide image; P038 into the shorter gallery tile; P028 into a wide tablet blind slot. A centre crop may remove the heading or blind itself. Focal-position checks remain later work.
- **Orientation:** P032 has EXIF orientation 6. Inventory records stored and displayed dimensions separately; the contact sheet honours that tag, yet the result still looks sideways. Confirm the intended orientation before any later derivative generation. Source bytes were not changed.
- **Ownership / reuse:** all selected interiors require owner approval. P001-P009 look like generic lifestyle imagery, with no established Annie project attribution; even audited P003 `nursery.jpg` is held for provenance. P015's styled grey-curtain image is also unverified. Neither appearance nor local presence proves stock origin or ownership. P031-P033, P039, P043, unaudited bedroom/study sets and visually associated alternate views need explicit project/provenance confirmation. P047 includes a person; do not identify them or reuse without consent. P020 also shows family photographs in the room.
- **Context:** do not attach P027 to a specific customer, equate the Long Compton case study definitively with Chris & Ken, or assign all 2020 uploads to Ruth. No workshop/process photograph was established. P036 is a technical mechanism reference, not a homepage project photograph; its current suitability is unverified.

## Technical limitations and verification

- The system Python alias was unusable and the default uv-managed installation was inaccessible. A temporary Python runtime plus Pillow, ReportLab and PyMuPDF were used from the system temporary directory. No package manifest, lockfile or runtime dependency was changed.
- Poppler was unavailable; the PDF was rendered using PyMuPDF for visual QA. All 16 pages were rendered; text/ID presence and layout were checked. The contact sheet is deliberately split into six images per page for normal-size reading.
- Native-pixel sharpness, final browser crops, exact colour reproduction, ownership, customer consent and original camera files cannot be certified by this local review. No EXIF date or filename-based date was used as project evidence.
- SHA-256 verification after generation confirmed all 356 original image files remained unchanged. The migration source remains ignored and outside Git. Only the three review deliverables are retained for this phase; application code and the approved Shuffle design are unchanged. No commit was made.

Stop here. Optimisation, responsive image generation and homepage integration belong to a separately authorised phase.
