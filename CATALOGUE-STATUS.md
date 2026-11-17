# Catalogue verification status

Checked 17 November 2026 against the files in this repository. Counts establish
that files exist; they do not establish that every value or image is accurate.

| Item | Files present | Remaining verification |
| --- | ---: | --- |
| Original car records | 140 pages, 140 images | Compare all values and images against the supported original release. IDs 132–139 are traffic vehicles; their Class T purchase and upgrade features are port additions. |
| Original rival records | 372 pages, 372 images | Compare each reconstructed car appearance and configuration with the original game. |
| Port traffic challenges | 8 pages | Verify each challenge and unlock against current port behaviour. |
| Teams | 43 pages, 43 existing logos | Team pages 01–42 display the supplied AI-upscaled sheet. Team 00 retains its previous logo while the sheet’s Rolling Guy lettering is corrected. The upscaled versions may differ from the originals and still need individual comparison. |

A catalogue link check found no missing local targets among relative links to
car, rival, team and image files in these pages. It does not check anchors,
external links, rendering, or the accuracy of link labels. The car and rival
images are native-port captures, with the exceptions described in
[vehicle image sources](vehicle-image-sources.md); they are not evidence that
the original game renders each car identically.

## Class T dealer price check

The dealer prices on car pages 132–139 were compared with the port's
[`CarCatalog::GetDealerPrice`](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/car_catalog.cpp#L157)
and its [price fixture](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/tests/quest_purchase_tests.cpp#L96).
All eight page prices match the source and fixture at commit `a66040a6`:
10,000, 15,000, 12,000, 30,000, 100,000, 20,000, 40,000 and 80,000 CP,
respectively. This is a source comparison; the purchase test was not run as
part of this documentation check. These dealer prices are port additions.

## Regular-team roster check

The 43 published team pages were compared with the port project's
[source-backed US rival roster](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/quest-regular-rivals-by-name.md)
at commit `a66040a6`. All 298 regular rival IDs appear under the same teams,
and each team has the same leader. The check also verified each roster link,
rival-to-team link and in-game number (source ID plus one). The rival page
headings also match all 298 names in that roster, and team-table names match
the linked rival pages. This is a comparison with the project’s recovered roster,
not a fresh inspection of the original executable. It did not verify appearance
requirements, screenshots or logo fidelity.

## Complete rival name and index check

All 372 individual page headings were compared with the original-row names
in the project's [recovered US rival inventory](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/quest-rival-inventory.md)
at commit `a66040a6`. The check removed the inventory's leader marker and
normalised its slash-separated name fields into the site’s displayed names;
all 372 matched. The rival index also lists those 372 pages in source-ID order,
with matching names, links and in-game numbers. This is a comparison with an
existing recovery document, not a fresh executable inspection, and does not
verify encounter conditions or vehicle appearances.

## Car ID and TYPE code check

All 140 car-list entries and individual page headings were compared with the
TYPE fields in the supported US release’s local CARMODEL resource 0x2000.
The IDs, links and codes match in source-ID order, including the eight traffic
records. The check does not establish prices, part effects or visual fidelity.
The source record layout is described in the port’s
[car specification recovery notes](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/car-specs-recovery.md).

## Standard-car dealer prices and classes

All 132 standard-car dealer classes and prices in the list and individual
pages match the local original car records. The comparison used the field
interpretation in the port's [CarCatalog reader](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/car_catalog.cpp#L73):
class byte at `0x06`, and signed price at `0x310` multiplied by ten. This
check does not verify when each car becomes available. Class T uses the port's
separate prices and is covered by the check above.

## Published team-logo layout check

Team pages 01, 07, 13, 24 and 42 were loaded from GitHub Pages in Edge at
390 px and 1,280 px viewport widths. Each loaded its selected logo from the
supplied sheet at 64 × 62 CSS pixels; the five mobile captures were visually
checked for the intended artwork and cropping. This sample does not establish
that the AI-upscaled designs match the original game artwork.
