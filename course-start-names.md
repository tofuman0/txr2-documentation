---
layout: default
title: Starting-area names
section: courses
help: See how game location names map to starting points.
---

[← Back to Course & Areas]({{ "/courses.html" | relative_url }})

# Starting-area names

These names are the labels in the US game’s course selector. Each direction starts at a particular position on an internal road record. A record may contain more than one named start, and its ID should not be read as an official street name for the whole segment.

| Course ID | Starting area | Direction 0 start | Direction 1 start |
| ---: | --- | --- | --- |
| 0 | Kasumigaseki | [Road 194]({{ "/roads.html#road-194" | relative_url }}), sample 87 | [Road 458]({{ "/roads.html#road-458" | relative_url }}), sample 85 |
| 1 | Kandabashi | [Road 188]({{ "/roads.html#road-188" | relative_url }}), sample 0 | [Road 466]({{ "/roads.html#road-466" | relative_url }}), sample 0 |
| 2 | Ginza | [Road 209]({{ "/roads.html#road-209" | relative_url }}), sample 148 | [Road 443]({{ "/roads.html#road-443" | relative_url }}), sample 65 |
| 3 | Shibakouen | [Road 202]({{ "/roads.html#road-202" | relative_url }}), sample 118 | [Road 450]({{ "/roads.html#road-450" | relative_url }}), sample 100 |
| 4 | Fukuzumi | [Road 244]({{ "/roads.html#road-244" | relative_url }}), sample 318 | [Road 491]({{ "/roads.html#road-491" | relative_url }}), sample 18 |
| 5 | Ariake | [Road 495]({{ "/roads.html#road-495" | relative_url }}), sample 47 | [Road 239]({{ "/roads.html#road-239" | relative_url }}), sample 58 |
| 6 | Daiba | [Road 500]({{ "/roads.html#road-500" | relative_url }}), sample 100 | [Road 235]({{ "/roads.html#road-235" | relative_url }}), sample 208 |
| 7 | 13-gochi | [Road 511]({{ "/roads.html#road-511" | relative_url }}), sample 70 | [Road 269]({{ "/roads.html#road-269" | relative_url }}), sample 294 |
| 8 | Oi minami | [Road 514]({{ "/roads.html#road-514" | relative_url }}), sample 205 | [Road 266]({{ "/roads.html#road-266" | relative_url }}), sample 159 |
| 9 | Haneda Airport | [Road 517]({{ "/roads.html#road-517" | relative_url }}), sample 468 | [Road 263]({{ "/roads.html#road-263" | relative_url }}), sample 1571 |
| 10 | Higashiogijima | [Road 517]({{ "/roads.html#road-517" | relative_url }}), sample 1373 | [Road 263]({{ "/roads.html#road-263" | relative_url }}), sample 826 |
| 11 | Daikoku futo | [Road 522]({{ "/roads.html#road-522" | relative_url }}), sample 60 | [Road 261]({{ "/roads.html#road-261" | relative_url }}), sample 1 |
| 12 | Shioiri | [Road 257]({{ "/roads.html#road-257" | relative_url }}), sample 964 | [Road 524]({{ "/roads.html#road-524" | relative_url }}), sample 194 |
| 13 | Daishi | [Road 257]({{ "/roads.html#road-257" | relative_url }}), sample 400 | [Road 524]({{ "/roads.html#road-524" | relative_url }}), sample 817 |
| 14 | Haneda | [Road 257]({{ "/roads.html#road-257" | relative_url }}), sample 142 | [Road 524]({{ "/roads.html#road-524" | relative_url }}), sample 1000 |
| 15 | Suzugamori | [Road 255]({{ "/roads.html#road-255" | relative_url }}), sample 675 | [Road 529]({{ "/roads.html#road-529" | relative_url }}), sample 240 |

The names were read from the game’s course-selection artwork and checked against its sprite-frame coordinates and original course-selection tables. The road and sample pairs come from the supported US T40211N V1.002 course table. The port documents the [course-selection presentation](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/course-selection-artwork-recovery.md) and [recovered starting-position table](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/include/txr2/race_session_data.hpp#L101). Further mapping is needed before assigning geographic names to the remaining road segments.

## Approximate nearby segments

Some other road records are labelled “Near” a starting area. Their overhead
sample lines have the same number of points as a named starting segment, and
each matching point is within 0.6 units on the site’s 693 × 1,280 map. This
is a two-dimensional proximity comparison, not proof of elevation, an
official street name or an open driving connection. Long segments can pass
more than one starting area, so a label may list several names.
