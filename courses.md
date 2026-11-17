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

Each course has two direction choices. The numbers below are source road IDs and sample offsets, not street names. The first listed tier is where the course appears in the Quest selector; its position in the menu can differ from its source ID.

| Course ID | First Quest tier | Direction 0 start | Direction 1 start |
| ---: | ---: | --- | --- |
| <span id="course-0">0</span> | 0 | [194]({{ "/roads.html#road-194" | relative_url }}), sample 87 | [458]({{ "/roads.html#road-458" | relative_url }}), sample 85 |
| <span id="course-1">1</span> | 0 | [188]({{ "/roads.html#road-188" | relative_url }}), sample 0 | [466]({{ "/roads.html#road-466" | relative_url }}), sample 0 |
| <span id="course-2">2</span> | 0 | [209]({{ "/roads.html#road-209" | relative_url }}), sample 148 | [443]({{ "/roads.html#road-443" | relative_url }}), sample 65 |
| <span id="course-3">3</span> | 0 | [202]({{ "/roads.html#road-202" | relative_url }}), sample 118 | [450]({{ "/roads.html#road-450" | relative_url }}), sample 100 |
| <span id="course-4">4</span> | 0 | [244]({{ "/roads.html#road-244" | relative_url }}), sample 318 | [491]({{ "/roads.html#road-491" | relative_url }}), sample 18 |
| <span id="course-5">5</span> | 0 | [495]({{ "/roads.html#road-495" | relative_url }}), sample 47 | [239]({{ "/roads.html#road-239" | relative_url }}), sample 58 |
| <span id="course-6">6</span> | 0 | [500]({{ "/roads.html#road-500" | relative_url }}), sample 100 | [235]({{ "/roads.html#road-235" | relative_url }}), sample 208 |
| <span id="course-7">7</span> | 1 | [511]({{ "/roads.html#road-511" | relative_url }}), sample 70 | [269]({{ "/roads.html#road-269" | relative_url }}), sample 294 |
| <span id="course-8">8</span> | 2 | [514]({{ "/roads.html#road-514" | relative_url }}), sample 205 | [266]({{ "/roads.html#road-266" | relative_url }}), sample 159 |
| <span id="course-9">9</span> | 2 | [517]({{ "/roads.html#road-517" | relative_url }}), sample 468 | [263]({{ "/roads.html#road-263" | relative_url }}), sample 1571 |
| <span id="course-10">10</span> | 2 | [517]({{ "/roads.html#road-517" | relative_url }}), sample 1373 | [263]({{ "/roads.html#road-263" | relative_url }}), sample 826 |
| <span id="course-11">11</span> | 2 | [522]({{ "/roads.html#road-522" | relative_url }}), sample 60 | [261]({{ "/roads.html#road-261" | relative_url }}), sample 1 |
| <span id="course-12">12</span> | 2 | [257]({{ "/roads.html#road-257" | relative_url }}), sample 964 | [524]({{ "/roads.html#road-524" | relative_url }}), sample 194 |
| <span id="course-13">13</span> | 2 | [257]({{ "/roads.html#road-257" | relative_url }}), sample 400 | [524]({{ "/roads.html#road-524" | relative_url }}), sample 817 |
| <span id="course-14">14</span> | 2 | [257]({{ "/roads.html#road-257" | relative_url }}), sample 142 | [524]({{ "/roads.html#road-524" | relative_url }}), sample 1000 |
| <span id="course-15">15</span> | 2 | [255]({{ "/roads.html#road-255" | relative_url }}), sample 675 | [529]({{ "/roads.html#road-529" | relative_url }}), sample 240 |

## Time Attack starting positions

Time Attack has a separate route list and a separate starting-position table. The World 1 entries below are **raw start requests**: the session setup subtracts 14 samples and normalizes the position through the road network before placement. Consequently, a raw road and the final placed road can differ. Time Attack reads the non-Quest course tier, not the Quest tier directly.

| Route ID | Direction | First non-Quest tier | Raw World 1 start |
| ---: | ---: | ---: | --- |
| 0 | 0 | 0 | [186]({{ "/roads.html#road-186" | relative_url }}), sample 30 |
| 1 | 0 | 0 | [495]({{ "/roads.html#road-495" | relative_url }}), sample 47 |
| 2 | 0 | 2 | [262]({{ "/roads.html#road-262" | relative_url }}), sample 1 |
| 3 | 0 | 2 | [524]({{ "/roads.html#road-524" | relative_url }}), sample 194 |
| 4 | 0 | 2 | [466]({{ "/roads.html#road-466" | relative_url }}), sample 20 |
| 0 | 1 | 0 | [466]({{ "/roads.html#road-466" | relative_url }}), sample 20 |
| 1 | 1 | 0 | [239]({{ "/roads.html#road-239" | relative_url }}), sample 58 |
| 2 | 1 | 2 | [511]({{ "/roads.html#road-511" | relative_url }}), sample 70 |
| 3 | 1 | 2 | [255]({{ "/roads.html#road-255" | relative_url }}), sample 675 |
| 4 | 1 | 2 | [186]({{ "/roads.html#road-186" | relative_url }}), sample 30 |

The three additional Time Attack route IDs 16, 17 and 18 are present at non-Quest tier 0. Their session profiles use **World 0**, not the World 1 map above, and each requests World 0 road 1, sample 0 before its profile-specific setup. The source route-list slot 3 is skipped and is not an additional selectable route.

## Source and limits

The course list comes from `CourseCatalog`’s recovered US T40211N V1.002 ordinary selection rows. Quest starting positions use `CoursePairs4` and the profile-1 session setup. Quest tier promotion follows `QuestRivalProgress::Build`; individual challenge and progression paths still need full original-game and native-player verification. Geographic area names and natural progression are still being verified.
