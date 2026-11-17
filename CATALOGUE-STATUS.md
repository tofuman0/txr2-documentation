# Catalogue verification status

Checked 17 November 2026 against the files in this repository. Counts establish
that files exist; they do not establish that every value or image is accurate.

| Item | Files present | Remaining verification |
| --- | ---: | --- |
| Car records | 140 pages, 140 images | Factory fields and standard-car part quotes have been checked against original data using recovered rules. Original-game visual comparisons and independent checks of part effects and purchase paths remain incomplete. IDs 132–139 are original traffic vehicles; Class T purchasing and upgrades are port additions. |
| Original rival records | 372 pages, 372 images | Compare each reconstructed car appearance and configuration with the original game. |
| Port traffic challenges | 8 pages | Eligibility and prices checked against current port source; verify the full challenge and unlock flow in gameplay. |
| Teams | 43 pages, 43 existing logos | Team pages 01–42 display the supplied AI-upscaled sheet. Team 00 retains its previous logo while the sheet’s Rolling Guy lettering is corrected. The upscaled versions may differ from the originals and still need individual comparison. |

A catalogue link check found no missing local targets among relative links to
car, rival, team and image files in these pages. It does not check anchors,
external links, rendering, or the accuracy of link labels. The car and rival
images are native-port captures, with the exceptions described in
[vehicle image sources](vehicle-image-sources.md); they are not evidence that
the original game renders each car identically.

## Live car page check

On 17 November 2026, a headless Edge check opened all 140 published car pages at a 390-pixel viewport. Every page returned HTTP 200, loaded its primary car image, displayed a parts-filter selector with multiple options, and had no page-level horizontal overflow. A subsequent check exercised all 2,596 filter options across those pages: each category showed all and only matching rows, and All parts restored the full table. These checks do not verify table values, image identity or visual appearance.

## Live rival page check

On 17 November 2026, a headless Edge check opened all 372 published rival pages at a 390-pixel viewport. Every page returned HTTP 200, loaded its primary rival image, presented the performance-details control, and had no page-level horizontal overflow. A subsequent check opened and closed the performance-details control on every rival page, verifying its visibility and expanded state. These checks do not establish the images' original-game accuracy, every displayed value, or the behaviour of other controls.

## Class T dealer price check

The dealer prices on car pages 132–139 were compared with the port's
[`CarCatalog::GetDealerPrice`](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/car_catalog.cpp#L157)
and its [price fixture](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/tests/quest_purchase_tests.cpp#L96).
All eight page prices match the source and fixture at commit `a66040a6`:
10,000, 15,000, 12,000, 30,000, 100,000, 20,000, 40,000 and 80,000 CP,
respectively. This is a source comparison; the purchase test was not run as
part of this documentation check. These dealer prices are port additions.

## Class T challenge eligibility check

The vehicle requirements on all eight traffic challenge pages were compared with the current port's [QuestTrafficCandidate::Find](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/quest_cruise_candidate.cpp) and the Keep Garage gate in [RaceFreeRun](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/race_free_run.cpp). The taxi accepts a normal car with normal parts or a Class T car; the other ordinary models require Class T, with additional vehicle restrictions for the tanker and delivery lorry. The delivery lorry also requires wins against the seven other traffic models. All eight page prices match the current dealer-price source. This is a source comparison, not an end-to-end gameplay or save-persistence test.

## Regular-team roster check

The 43 published team pages were compared with the port project's
[source-backed US rival roster](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/quest-regular-rivals-by-name.md)
at commit `a66040a6`. All 298 regular rival IDs appear under the same teams,
and each team has the same leader. The check also verified each roster link,
rival-to-team link and in-game number (source ID plus one). The rival page
headings also match all 298 names in that roster, and team-table names match
the linked rival pages. This is a comparison with the project’s recovered roster,
not a fresh inspection of the original executable. A subsequent offline
comparison checked all 43 rosters directly against the supported US executable:
the 298 team assignments, name-field leader markers and rival link targets
matched. These checks did not verify appearance requirements, screenshots or
logo fidelity.

## Complete rival name and index check

All 372 individual page headings were compared with the original-row names
in the project's [recovered US rival inventory](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/quest-rival-inventory.md)
at commit `a66040a6`. The check removed the inventory's leader marker and
normalised its slash-separated name fields into the site’s displayed names;
all 372 matched. The rival index also lists those 372 pages in source-ID order,
with matching names, links and in-game numbers. This is a comparison with an
existing recovery document and does not verify encounter conditions or
vehicle appearances. A subsequent offline comparison also checked all 372
page headings directly against the two 17-byte name fields at row offsets
`0x18` and `0x29` in the supported US executable identified below. After
removing the leader marker and joining the two fields, every heading matched.

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
checked for the intended artwork and cropping. A later headless Edge check measured all 43 primary logos at 390 px: each remained at or below 64 px wide and retained its SVG or image aspect ratio. This sample does not establish
that the AI-upscaled designs match the original game artwork. A subsequent
check compared all 42 page crop coordinates with their intended positions in
the supplied sheet; all matched. This checks placement rather than artwork
fidelity. Team 00 continues to use the original-based image while the sheet’s
Rolling Guy lettering remains incorrect.

## Factory specification export check

All 13 displayed factory specification labels and values on each of the 140
car pages match the existing local `CarSpecsCatalog::GetFactory` export for the
supported US car records. This checks 1,820 table values against the same
source-derived export used to produce the pages; it is not an independent
comparison with the original game's displayed screens. Modified-car values
and Class T port-only upgrades are separate.

## Direct factory-record comparison

All 13 factory specification fields on all 140 car pages were independently compared with the supplied US CARMODEL resource 0x2000 using the [recovered factory display field offsets and conversions](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/car-specs-recovery.md). All 1,820 values matched: the six dimensions, weight, engine type, displacement, drivetrain, final drive, factory power and torque. Engine and drivetrain labels were read directly from the supported original executable, including the documented car-125 drivetrain override. The comparison decodes the original records directly rather than reading the existing specification export. It uses the port's recovered interpretation of the original display logic, and does not establish part effects or original-game rendering.

## Original-game displayed specification sample

The original-game reference screenshots for [AE86T3]({{ "/cars/001.html" | relative_url }}), [A80RZM]({{ "/cars/008.html" | relative_url }}) and [R34RV]({{ "/cars/034.html" | relative_url }}) show the same weight, maximum horsepower, displacement and drivetrain as their catalogue pages: 2,094 lb / 114 HP / 1.6 litres / FR; 3,329 lb / 280 HP / 3.0 litres / FR; and 3,439 lb / 280 HP / 2.6 litres / 4WD, respectively. This independent visual comparison covers four displayed fields on three cars only; it does not verify the other specifications or part effects.

## S15R original dealer comparison

An original US game capture from the Quest dealer shows S15R (car 025) at 23,900 CP, 2,756 lb, 250 HP, 2.0 litres and FR; these five displayed values match its catalogue page. The capture is linked on that page. This does not verify its remaining specifications, parts, or visual parity with the port.

## Original Class A dealer comparisons

Original US Quest dealer captures show the starting Class A selections R34RV (034), AP1 (067), NA2 (047), CP9A6M (052), FD3RS (055) and GC8C6 (063). Each image displays the car's TYPE code, dealer price, weight, power, displacement and drivetrain; all six prices and all 24 displayed specification values agree with their car pages. The rotary FD3RS displays displacement as 0.7 × 2. Some dealer-camera frames crop part of the car, as noted on their pages. These checks do not establish full visual parity or verify other specifications and modifications.

## Original Class B dealer comparisons

Original US Quest dealer captures show all eight starting Class B selections: XE10RS (010), T231 (087), PS13X (027), S14K (021), DC2M (043), DB8M (045), DE3A (083) and FC3E3 (053). Each image displays the TYPE code, dealer price, weight, power, displacement and drivetrain; all eight prices and all 32 displayed specification values match their car pages. The rotary FC3E3 displays displacement as 0.7 × 2. Some frames crop part of the car or use dark paint, as noted on the relevant pages. These checks do not establish full visual parity or verify other specifications and modifications.

## Original Class C dealer comparisons

Original US Quest dealer captures show all eight starting Class C selections: AE86T3 (001), AE86L2 (002), W30 (088), N15N1 (084), EF8 (098), EG6 (077), EK9M (041) and NB8RS (076). Each image displays the TYPE code, dealer price, weight, power, displacement and drivetrain; all eight prices and all 32 displayed specification values match their car pages. The dark EG6 paint obscures some detail, as noted on its page. These checks do not establish full visual parity or verify other specifications and modifications.

## Original seeded dealer comparisons

An isolated US-game reference session enabled the 132 standard-car availability bits in emulator memory, then opened the original Quest dealer. Captures of 100MV (014), SW20GT (004), ST205 (078), A80RZ (006) and 100TV (012) show their TYPE, prices and headline weight, power, displacement and drivetrain. All five prices and all 20 displayed specification values match their pages. This seeded session does not demonstrate normal unlock paths or validate full visual parity and other specifications. The saved game files were not modified by this flag adjustment.

## Additional seeded dealer comparisons

The same isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for 100TVM (013), 100MVM (015), JZZ30 (075), S161V (097), R34GT (035) and C34 (096). All six displayed prices and 24 headline weight, power, displacement and drivetrain values match their pages. The session does not establish their natural unlock paths, remaining specifications or exact port visual parity. An earlier S141V frame showed the car suspended above the ground and was not used; a later seeded dealer view shows the same general GTO-shaped body as the port capture, although it does not establish every visual detail.

## Further seeded dealer comparisons

The isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for S141V (108), C34M (095), Z32VS (036), R32RN (030), R32RV2 (029) and R33RV (032). All six displayed prices and 24 headline weight, power, displacement and drivetrain values match their pages. The S141V reference also confirms the original dealer displays the same general GTO-shaped body seen in the port; this does not establish every visual detail or the appearance of the other shared-resource records. The seeded session does not demonstrate natural unlock paths.

## More seeded dealer comparisons

An isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for R33RVM (033), S30ZX (125), AP1HT (124), NA1 (046), CE9A (048) and CN9A (049). All six displayed prices and 24 headline weight, power, displacement and drivetrain values match their pages. The seeded session does not demonstrate natural unlock paths, remaining specifications or exact port visual parity.

## Lancer, GTO, rotary and Subaru dealer comparisons

The isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for CP9A5 (050), CP9A6 (051), Z16A (082), Z15A (081), Z15AM (080), FD3RZ (056), JCESE (105), GC8C4 (059), GC8S4 (058) and GF8W4 (064). All ten displayed prices and 40 headline weight, power, displacement and drivetrain values match their pages. Rotary displacements are shown as 0.7 × 2 or 0.7 × 3 as in the game. Some frames crop the car or use dark paint, as noted on the pages. The seeded session does not demonstrate natural unlock paths, remaining specifications or exact port visual parity.

## Final seeded Class A dealer comparisons

The isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for GC8C5 (061), GC8S5 (060), GF8W5 (065), GC8S6 (062), GF8W6 (066), GC8K (057), BE5 (085), BH5B (086), E34 (091), 964C2 (069), 964T (068) and VGTS (122). All 12 displayed prices and 48 headline weight, power, displacement and drivetrain values match their pages. Some frames crop the car or use dark paint, as noted on the pages. The seeded session does not demonstrate natural unlock paths, remaining specifications or exact port visual parity.

## Original Quest dealer capture gaps

There are 98 original dealer images linked from their matching car pages. The remaining eligible records are listed by car ID below. TR (094) is excluded from this dealer and the eight Class T vehicles are port-only purchases.

- Class B (6) 054, 106, 112, 121, 129, 130
- Class C (27) 000, 003, 011, 017, 019, 022, 024, 026, 040, 070, 072, 073, 092, 093, 101, 102, 103, 104, 110, 111, 113, 114, 117, 118, 119, 120, 126

## Class A original-reference coverage

All 53 cars offered by the original Quest dealer in the isolated session with standard-car availability enabled in memory now have an original-game reference on their car pages. Their prices and four headline displayed specification values were checked against the screenshots. The remaining Class A catalogue record, TR (094), is excluded by the recovered Quest dealer rule and has not been captured through that dealer; this is not a claim about every other game mode. These screenshots do not verify natural unlock paths, every specification or exact visual parity with the port.

## Expanded Class B dealer comparisons

The isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for GZ20TT (107), SW20G (005), ST202 (079), UZZ30 (074), A80SZ (007), A80SZM (009), S13K (016), S13KM (018), S13KK (020), PS133 (028) and S14KM (023). All 11 displayed prices and 44 headline weight, power, displacement and drivetrain values match their pages. The GZ20TT original dealer view shows the same general GTO-shaped body seen in the port, consistent with the shared visual-resource evidence; the angle does not establish every detail. Some frames are cropped, as noted on the pages. The seeded session does not demonstrate natural unlock paths, remaining specifications or exact port visual parity.

## More expanded Class B dealer comparisons

The isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for R30 (116), R30M (115), R32GTM (031), A31C (109), Y33CV (038), Y33GTU (039), Y34CV (089), Y34GU (090), S30ZG (071), Z32ZX (037), RNN14 (123), DC2 (042) and DB8 (044). All 13 displayed prices and 52 headline weight, power, displacement and drivetrain values match their pages. Some frames are cropped or dark, as noted on the pages. The seeded session does not demonstrate natural unlock paths, remaining specifications or exact port visual parity.

## Team-member selection descriptions

The player-facing team-selection text on all 255 regular team-member pages was checked against the original rival kind byte and the recovered selector branches. The pages distinguish ordinary members and the four alternatives that depend on whether ordinary teammates were encountered before being defeated. All 255 classifications and description patterns matched. The named ordinary-member lists and all 77 special-member conditions on the 33 affected team pages were also checked against the original team rows and selector kinds; no discrepancies were found. Pool limits, actor placement, challenge response and natural playthroughs remain separate checks.

## Boss progression team-group check

All 43 teams in the boss-progression guide were compared with the original rival records and the recovered pool-to-boss group mapping. Every team appeared once in the correct group and in the expected early or advanced roster. The 23 group and zone-boss variants also match their original type, category and stage, and the three stage/final bosses have the expected source types. This checks the guide's grouping, not an end-to-end Quest playthrough or every boss-selection path.

## Original rival-rule record comparison

All 372 port rival-rule records were compared directly with the supported US executable's `0xA0`-byte rival rows at `0x8C0DD020`. The 5,952 checked fields matched, including rank, priority, team, type, category, eligibility bytes and prerequisite ID. These source-backed records inform the appearance descriptions. Matching them does not verify every shared encounter gate, natural appearance, challenge response or progression path.

## Wanderer condition comparison

Across the 48 Wanderer records, 32 documented day, garage-count, CP and prerequisite conditions were checked against the corresponding original row values; all matched. Eleven total-distance and car-odometer conditions also match the source rows and recovered threshold rules; the three total-distance thresholds were checked directly against the original executable. The eight car-family requirements and their eligible-car lists were also checked against the original rival and car records. These checks cover the listed row-level conditions, not every shared appearance or challenge-response gate.

## Rival tuning export check

All 18 recorded tuning values on each of the 372 rival pages were compared
both with the existing local rival-settings export and directly with the
[port’s recovered rival parameter records](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/include/txr2/race_session_data.hpp#L587)
at commit `a66040a6`: all 6,696 values matched. The direct check reads the
settings at parameter offsets `0x15`–`0x26`, treating the first 17 as signed
and boost as unsigned. The port data is itself recovered from the supported
US release. A separate offline comparison also matched all 6,696 values
against the supplied US T40211N V1.002 executable (SHA-256
`e30d2f4372856c10f079f7e938989695196abb4a20a26af0fde299ff3940608f`).
The executable table begins at `0x8C0DD020`, has `0xA0`-byte rows, and
stores vehicle parameters at row offset `0x54`; see the project’s
[rival record notes](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/quest-rival-record.md).
This verifies the stored values under the port’s field mapping, not whether a
setting is available to players or its gameplay effect.

## Rival appearance parameter comparison

The complete 76-byte vehicle-parameter block for each of the 372 recovered rival records was reconstructed from the port's typed values and compared byte for byte with the supported US executable identified above. All 28,272 bytes matched, including the parts and settings, both paint-colour sets and plate fields. The comparison follows the [port's parameter serialization](https://github.com/tofuman0/TXR2-Port/blob/8f74cb578ed3b476af21e8f276b77aa3682fa180/src/race_session_config.cpp#L29) and the original row offset `0x54`. This verifies the recovered input values; it does not establish that every field affects the captures as it does in the original game or that all 372 images have been visually matched against the original.

## Rival fitted-parts record check

All 18 fitted-part entries on each of the 372 rival pages were compared
offline with the supported US T40211N V1.002 executable identified above.
All 6,696 entries match the original stored type indices, using the port’s
[recovered parts-slot mapping](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/quest_parts_stock.cpp#L397)
and its 76-byte parameter block beginning at owned-car offset `0x14`.
This verifies the recorded indices and their mapping into the pages; it does
not independently verify the appearance of every part in game or establish that
the same part is purchasable by the player.

## Rival car binding check

All 372 rival-page car links match the car IDs stored at row offset `0x04`
in the supported US T40211N V1.002 executable identified above. This verifies
the source record’s vehicle binding and the page link; it does not verify
the rival’s rendered appearance or paint against the original game.

## Image file integrity

All 140 car PNGs and 372 rival PNGs were opened and verified with Pillow.
The rival images and 130 car images measure 1,280 × 800 pixels. Nine browser-garage captures measure 640 × 480; the roadworks-lorry image measures 1,024 × 768 pixels. All 512 files decoded
successfully. This is a file-integrity check, not a comparison with the
original game or proof of a correct model, paint or camera angle.

## Car capture framing review

All 140 catalogue images were reviewed as contact sheets. The original graphics-test captures for cars 106–108, 117–120 and 123 showed unusually large gaps between the body and wheels. They have been replaced with browser-garage captures in which the wheels sit in the arches. A gap between the car and its shadow remains visible in some garage views. These checks do not establish the cause of the graphics-test issue or confirm original-game visual fidelity.

## Rival capture file comparison

All 372 catalogue rival PNGs matched the SHA-256 hashes of their corresponding files in the retained native capture batch, using the same rival ID for both files. This verifies the file mapping. Visual comparison with the original game remains outstanding.

## Rival capture framing review

All 372 published rival images were reviewed as contact sheets. Each shows a vehicle in frame, with no blank capture apparent at thumbnail size. Some dark-coloured cars are difficult to distinguish from the night scene. This is a framing check only: thumbnail review cannot confirm the rival's identity, small visual details, or fidelity to the original game.

## Standard-car part price check

The 10,164 part-price rows across the 132 standard-car pages match the
port’s [shop price tables](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/quest_parts_stock.cpp)
at commit `a66040a6`, using each original car record’s class, engine type,
gear count, tyre sizes and wheel diameter. This includes the listed engine,
exhaust, drivetrain, body, aero, accessories, tyre and wheel variants. The
comparison verifies the quoted prices and listed variants against those
tables; it does not verify stock unlocks, compatibility, part effects or a
purchase in the original game. Class T quotes have a separate port-specific
pricing check.

## Class T part quote comparison

All 400 listed Class T part quotes across cars 132–139 were checked against the current port's pricing tables and per-car source records. Every quote matched, including the delivery lorry's use of the tanker's tyre sizes and its unavailable wheel quotes. The calculation uses port-specific rules and has not been verified through every in-game shop purchase.

## Direct standard-car part quote comparison

All 10,164 part quotes on the 132 standard-car pages were independently recalculated from the supported US executable's price records and the original car records, using the port's recovered shop selection and arithmetic. This includes 8,052 non-tyre/wheel quotes and 2,112 tyre and wheel quotes. All matched. Nineteen source price tables were also compared with the port's recovered constants. This validates the published quotes under those rules, not whether a part is unlocked or a purchase succeeds in original gameplay.

## Original tyre and wheel price tables

The port's tyre factors, tyre-size scales, wheel factors and wheel-diameter scales were compared directly with the supported US executable. All 78 entries match the original values at `0x8C0C4C00`, `0x8C0FB390`, `0x8C0C506C` and `0x8C0FB404`, respectively. A separate direct calculation used those original tables, each original car record's tyre sizes and wheel diameter, and the port's recovered shop indexing to compare 2,112 tyre and wheel quotes across all 132 standard-car pages; every quote matched. This verifies the quoted values under the recovered indexing, not a purchase in the original game. The delivery lorry's tyre-size substitution is a port-specific patch.

## Part shop-condition check

All 10,564 part rows across the 140 car pages were checked against the
current port’s starting counts, rival-priority thresholds, persistent unlock
bits, car compatibility flags and Class T final-stage override in
[QuestPartsStock](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/quest_parts_stock.cpp).
The displayed conditions match those rules. The exact ways all persistent
unlock bits are set remain to be traced, and this check does not independently
verify every original-game purchase path.

## Calculated part effects check

A fresh run of the existing native tuning export reproduced the displayed
weight, initial front/rear grip and front/rear aerodynamic coefficient
changes in all 10,564 part rows. Each comparison fits one part to a neutral
stock configuration and uses the port’s tuning calculation and original car
records. The export executable was previously built; this is a repeatability
check of the port calculation, not an independent comparison against original
gameplay, combined parts, or every possible tuning setting.

## Original tuning table comparison

Both recovered tuning families were compared directly with the supported US executable at `0x8C0C4708` and `0x8C0C50C8`. All 17 tables in each family matched, covering 2,020 numeric fields with no mismatching rows. They include engine, intake and exhaust, transmission, brakes, suspension, tyres, differential, body and aerodynamic parts. This comparison verifies the recovered table values, not every calculation, combined setup or original-game parts-store interaction. Class T uses the port's separate traffic-specific behaviour.

## Rival specification export check

A fresh run of the existing native rival-specification exporter reproduced all
13 values on each of the 372 rival pages, for 4,836 matching values after
removing display padding. The exporter uses recovered rival parameters and
original car records with the port’s owned-car specification calculation.
Its executable was previously built; this verifies reproduction of the port
calculation, not independent original-game displays or race-only modifiers.

## Local navigation check

A local check found targets for 7,601 root-relative Liquid links, including
the pending course viewer’s Jekyll permalink. A separate check resolved
2,128 links with anchors against explicit IDs and Markdown headings. This
checks local source targets, including unpublished course-viewer work; it
does not verify external links, every Jekyll rendering rule or live-site
navigation.

## Rival reward component check

The three displayed win-history components on each of the 372 rival pages
match the original US executable’s rival priority and type fields when
calculated using the port’s [battle award formula](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/battle.cpp).
All 1,116 values matched. These are components, not fixed total payouts:
remaining SP, distance and the applicable multiplier also affect the award.
The check does not independently verify the complete formula against every
original-game battle.

## Catalogue table structure

A Markdown source check found consistent row column counts in the 409 car,
2,976 rival and 43 team tables. The check accounts for Liquid expressions
and escaped separators. It detects missing cells and malformed table rows;
it does not establish that the values are correct or that every table renders
well on every screen size.

## Car-to-rival unlock lists

The rival links in the Quest dealer-availability sections of all 132
standard-car pages match the car IDs in the original US rival records.
All 372 rival references are present under their recorded car, with no extra
entries. The first-win availability rule is based on the port’s recovered
Quest result logic; individual rival encounter conditions and the separate
dealer-roster exclusion for car 094 still apply.

## Original-based team-logo comparison images

All 43 original-based team-logo images were compared pixel-for-pixel with
their locally retained source images after a vertical flip and an 8×
nearest-neighbour enlargement. All matched. This checks those comparison
images and the image currently displayed for team 00; it does not prove that
the separate AI-upscaled sheet preserves the original designs.

## Published catalogue availability

A live HTTP check requested all 140 car pages, 372 rival pages, 43 team pages
and 512 car/rival PNGs. The images and 554 pages returned the expected
content types and successful responses. Car 025 initially returned HTTP 503
and returned HTTP 200 on a separate retry. This verifies availability during
this check, not visual rendering, image identity or ongoing availability.

## Additional Class B dealer comparisons

The isolated US-game session with standard-car availability enabled in emulator memory produced dealer references for CH9 (099), CF4 (100), EASU0 (127), EACU0 (128) and BB6 (131). All five displayed prices and 20 headline weight, power, displacement and drivetrain values match their pages. Some frames crop the car or use dark paint, as noted on the pages. The seeded session does not demonstrate natural unlock paths, remaining specifications or exact port visual parity.
