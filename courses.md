---
layout: default
title: Course & Areas
section: courses
help: Explore source roads, start positions and unlocks.
---

# Course & Areas

The original game uses a connected World 1 road network. The [road ID index]({{ "/roads.html" | relative_url }}) covers all 690 internal road records and their primary, secondary and previous links. Road IDs are internal segments, not names for geographic areas. The [rival appearance pools]({{ "/rival-appearance-pools.html" | relative_url }}) show additional rival starting positions.

## World 1 road map

This overhead map plots the recovered road centre-line samples from the game’s World 1 data. Select a road line to open its source record, or use the [road ID index]({{ "/roads.html" | relative_url }}) when segments overlap. Red markers represent ordinary starting points; select one to see its course row. The map shows the entire source road network, including segments that may be closed or unavailable at a particular Quest tier. It is a schematic map of road samples, not a 3D view or a map of verified geographic names.

{% include course-map.svg %}

## Quest unlock tiers

* **Tier 0:** Seven ordinary starting points are available at the beginning of the Quest course-selection list.
* **Tier 1:** After the early category 9 and category 10 zone bosses have both been defeated, the game promotes the Quest course tier to at least 1 and adds course 7. Each zone boss has its own progression requirements; this is not simply a count of ordinary team leaders.
* **Tier 2:** Defeating the first stage-ending boss activates the advanced roster, which promotes the Quest course tier to 2 and adds courses 8–15. The first-boss variants are [Purple Comet]({{ "/rivals/321.html" | relative_url }}) and [White Phantom]({{ "/rivals/322.html" | relative_url }}); the game’s selection depends on conditions including car class and encounter history. Road closures and available routes also depend on this tier.

The non-Quest modes read a separate course-tier byte. These are recovered selection and progression rules, not proof of every natural unlock path or road traversal in the current port.

## Ordinary starting positions

Each starting area has two direction choices. The named areas come from the game’s course selector; road IDs and sample offsets identify internal segments and positions. The first listed tier is where the course appears in the Quest selector; its menu position can differ from its course ID.

| Starting area (course ID) | First Quest tier | Direction 0 start | Direction 1 start |
| ---: | ---: | --- | --- |
| <span id="course-0">Kasumigaseki (0)</span> | 0 | [Kasumigaseki start area (Road 194)]({{ "/roads.html#road-194" | relative_url }}), sample 87 | [Kasumigaseki start area (Road 458)]({{ "/roads.html#road-458" | relative_url }}), sample 85 |
| <span id="course-1">Kandabashi (1)</span> | 0 | [Kandabashi start area (Road 188)]({{ "/roads.html#road-188" | relative_url }}), sample 0 | [Kandabashi start area (Road 466)]({{ "/roads.html#road-466" | relative_url }}), sample 0 |
| <span id="course-2">Ginza (2)</span> | 0 | [Ginza start area (Road 209)]({{ "/roads.html#road-209" | relative_url }}), sample 148 | [Ginza start area (Road 443)]({{ "/roads.html#road-443" | relative_url }}), sample 65 |
| <span id="course-3">Shibakouen (3)</span> | 0 | [Shibakouen start area (Road 202)]({{ "/roads.html#road-202" | relative_url }}), sample 118 | [Shibakouen start area (Road 450)]({{ "/roads.html#road-450" | relative_url }}), sample 100 |
| <span id="course-4">Fukuzumi (4)</span> | 0 | [Fukuzumi start area (Road 244)]({{ "/roads.html#road-244" | relative_url }}), sample 318 | [Fukuzumi start area (Road 491)]({{ "/roads.html#road-491" | relative_url }}), sample 18 |
| <span id="course-5">Ariake (5)</span> | 0 | [Ariake start area (Road 495)]({{ "/roads.html#road-495" | relative_url }}), sample 47 | [Ariake start area (Road 239)]({{ "/roads.html#road-239" | relative_url }}), sample 58 |
| <span id="course-6">Daiba (6)</span> | 0 | [Daiba start area (Road 500)]({{ "/roads.html#road-500" | relative_url }}), sample 100 | [Daiba start area (Road 235)]({{ "/roads.html#road-235" | relative_url }}), sample 208 |
| <span id="course-7">13-gochi (7)</span> | 1 | [13-gochi start area (Road 511)]({{ "/roads.html#road-511" | relative_url }}), sample 70 | [13-gochi start area (Road 269)]({{ "/roads.html#road-269" | relative_url }}), sample 294 |
| <span id="course-8">Oi minami (8)</span> | 2 | [Oi minami start area (Road 514)]({{ "/roads.html#road-514" | relative_url }}), sample 205 | [Oi minami start area (Road 266)]({{ "/roads.html#road-266" | relative_url }}), sample 159 |
| <span id="course-9">Haneda Airport (9)</span> | 2 | [Haneda Airport / Higashiogijima start areas (Road 517)]({{ "/roads.html#road-517" | relative_url }}), sample 468 | [Haneda Airport / Higashiogijima start areas (Road 263)]({{ "/roads.html#road-263" | relative_url }}), sample 1571 |
| <span id="course-10">Higashiogijima (10)</span> | 2 | [Haneda Airport / Higashiogijima start areas (Road 517)]({{ "/roads.html#road-517" | relative_url }}), sample 1373 | [Haneda Airport / Higashiogijima start areas (Road 263)]({{ "/roads.html#road-263" | relative_url }}), sample 826 |
| <span id="course-11">Daikoku futo (11)</span> | 2 | [Daikoku futo start area (Road 522)]({{ "/roads.html#road-522" | relative_url }}), sample 60 | [Daikoku futo start area (Road 261)]({{ "/roads.html#road-261" | relative_url }}), sample 1 |
| <span id="course-12">Shioiri (12)</span> | 2 | [Shioiri / Daishi / Haneda start areas (Road 257)]({{ "/roads.html#road-257" | relative_url }}), sample 964 | [Shioiri / Daishi / Haneda start areas (Road 524)]({{ "/roads.html#road-524" | relative_url }}), sample 194 |
| <span id="course-13">Daishi (13)</span> | 2 | [Shioiri / Daishi / Haneda start areas (Road 257)]({{ "/roads.html#road-257" | relative_url }}), sample 400 | [Shioiri / Daishi / Haneda start areas (Road 524)]({{ "/roads.html#road-524" | relative_url }}), sample 817 |
| <span id="course-14">Haneda (14)</span> | 2 | [Shioiri / Daishi / Haneda start areas (Road 257)]({{ "/roads.html#road-257" | relative_url }}), sample 142 | [Shioiri / Daishi / Haneda start areas (Road 524)]({{ "/roads.html#road-524" | relative_url }}), sample 1000 |
| <span id="course-15">Suzugamori (15)</span> | 2 | [Suzugamori start area (Road 255)]({{ "/roads.html#road-255" | relative_url }}), sample 675 | [Suzugamori start area (Road 529)]({{ "/roads.html#road-529" | relative_url }}), sample 240 |

## Time Attack starting positions

Time Attack has a separate route list and a separate starting-position table. The World 1 entries below are **raw start requests**: the session setup subtracts 14 samples and normalizes the position through the road network before placement. Consequently, a raw road and the final placed road can differ. Time Attack reads the non-Quest course tier, not the Quest tier directly. Route names below use the recovered Time Attack replay labels.

| Route ID | Direction | Replay label | First non-Quest tier | Raw World 1 start |
| ---: | ---: | --- | ---: | --- |
| 0 | 0 | C1 Inner | 0 | [186]({{ "/roads.html#road-186" | relative_url }}), sample 30 |
| 1 | 0 | Fukagawa R | 0 | [Ariake start area (Road 495)]({{ "/roads.html#road-495" | relative_url }}), sample 47 |
| 2 | 0 | Wangan Up | 2 | [262]({{ "/roads.html#road-262" | relative_url }}), sample 1 |
| 3 | 0 | Haneda Up | 2 | [Shioiri / Daishi / Haneda start areas (Road 524)]({{ "/roads.html#road-524" | relative_url }}), sample 194 |
| 4 | 0 | Tokyo Ex. R | 2 | [Kandabashi start area (Road 466)]({{ "/roads.html#road-466" | relative_url }}), sample 20 |
| 0 | 1 | C1 Outer | 0 | [Kandabashi start area (Road 466)]({{ "/roads.html#road-466" | relative_url }}), sample 20 |
| 1 | 1 | Fukagawa L | 0 | [Ariake start area (Road 239)]({{ "/roads.html#road-239" | relative_url }}), sample 58 |
| 2 | 1 | Wangan Down | 2 | [13-gochi start area (Road 511)]({{ "/roads.html#road-511" | relative_url }}), sample 70 |
| 3 | 1 | Haneda Down | 2 | [Suzugamori start area (Road 255)]({{ "/roads.html#road-255" | relative_url }}), sample 675 |
| 4 | 1 | Tokyo Ex. L | 2 | [186]({{ "/roads.html#road-186" | relative_url }}), sample 30 |

The three additional Time Attack route IDs 16, 17 and 18 are labelled Oval 0-400, Oval 0-1000 and Oval ALL respectively and are present at non-Quest tier 0. Their session profiles use **World 0**, not the World 1 map above, and each requests World 0 road 1, sample 0 before its profile-specific setup. The source route-list slot 3 is skipped and is not an additional selectable route.

## Source and limits

The course list comes from `CourseCatalog`’s recovered US T40211N V1.002 ordinary selection rows. Quest starting positions use `CoursePairs4` and the profile-1 session setup. Quest tier promotion follows `QuestRivalProgress::Build`; individual challenge and progression paths still need full original-game and native-player verification. Geographic area names and natural progression are still being verified.
