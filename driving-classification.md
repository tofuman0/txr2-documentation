---
layout: default
title: Driving classification
section: rivals
help: Understand the driving classification used in some Wanderer responses.
---

# Driving classification

Some Wanderers can refuse an approach when the saved driving-classification row is below their threshold and your car belongs to a different source category. Their individual pages describe the other conditions and matching cars. This is a separate check from whether the Wanderer is selected for an appearance.

## How the row is selected

The recovered US T40211N V1.002 classifier examines the rows below from 15 down to 0. A row must meet its minimum number of battle outcomes (wins, losses and draws combined), **and at least one** of its five driving comparisons must match. The first row that matches is used; the game checks the five comparisons in the order shown below. Merely reaching the minimum number of outcomes does not guarantee that row.

* For rows 0–4, the forfeit comparison uses the total number of forfeits. For rows 5–15, it uses forfeits divided by total outcomes. A match is greater than or equal to the table value.
* Peak speed and best recorded battle-average speed must be **greater than** their respective table values, in km/h.
* Battle distance per outcome matches if it is **less than** the lower value or **greater than** the upper value. The calculation truncates the accumulated battle distance to whole kilometres before dividing by total outcomes.

| Row | Minimum outcomes | Forfeit threshold | Peak speed (km/h) | Battle-average speed (km/h) | Distance per outcome below (km) | Distance per outcome above (km) |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 0 | 5 | 1 | 190 | 120 | 3 | 3 |
| 1 | 15 | 2 | 210 | 140 | 2.8 | 3.05 |
| 2 | 30 | 4 | 230 | 160 | 2.6 | 3.1 |
| 3 | 40 | 5 | 250 | 180 | 2.4 | 3.15 |
| 4 | 50 | 6 | 270 | 200 | 2.38 | 3.2 |
| 5 | 60 | 0.1 | 290 | 220 | 2.36 | 3.25 |
| 6 | 70 | 0.11 | 310 | 240 | 2.34 | 3.3 |
| 7 | 80 | 0.12 | 330 | 260 | 2.32 | 3.35 |
| 8 | 100 | 0.13 | 350 | 280 | 2.3 | 3.4 |
| 9 | 120 | 0.14 | 360 | 290 | 2.29 | 3.45 |
| 10 | 140 | 0.15 | 370 | 300 | 2.28 | 3.5 |
| 11 | 160 | 0.16 | 380 | 310 | 2.27 | 3.55 |
| 12 | 180 | 0.17 | 385 | 315 | 2.26 | 3.6 |
| 13 | 200 | 0.18 | 390 | 320 | 2.25 | 3.75 |
| 14 | 225 | 0.19 | 395 | 325 | 2.24 | 3.8 |
| 15 | 250 | 0.2 | 400 | 330 | 2.23 | 3.85 |

The selected row supplies a driving-name classification, but the saved row is not necessarily rewritten on every results calculation: if the existing driving name already equals either of the selected name variants, the source skips the update. A separate contact classification also contributes to the displayed B.A.D. name; it is not the Wanderer response threshold described here.

## Evidence and limits

The calculation follows `ClassifyQuestProgress` and its source-qualified US classifier at `04B04A`, using the driving table at `0EED24`. The response branch at `084C0E` compares the saved row against each rival's threshold. This page describes recovered calculation and response logic; it does not guarantee an encounter or establish a complete route for obtaining a particular classification during normal play.
