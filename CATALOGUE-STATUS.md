# Catalogue verification status

Checked 17 November 2026 against the files in this repository. Counts establish
that files exist; they do not establish that every value or image is accurate.

| Item | Files present | Remaining verification |
| --- | ---: | --- |
| Original car records | 140 pages, 140 images | Compare all values and images against the supported original release. IDs 132–139 are traffic vehicles; their Class T purchase and upgrade features are port additions. |
| Original rival records | 372 pages, 372 images | Compare each reconstructed car appearance and configuration with the original game. |
| Port traffic challenges | 8 pages | Verify each challenge and unlock against current port behaviour. |
| Teams | 43 pages, 43 existing logos | The requested user-supplied upscaled sheet has not yet replaced the current logos. Its Rolling Guy lettering needs correction, and individual logos need checking against their originals. |

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
