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
