---
layout: default
title: Game Details
section: overview
help: Explore shared game mechanics and research.
---

# Game Details

This page will document mechanics that affect the game as a whole, separate from rival-specific values and port additions.

## Shared multipliers

Research into shared performance multipliers, their affected statistics and when they apply is ongoing. No blanket numerical value is confirmed here yet. Battle reward multipliers are a separate mechanic from vehicle-performance multipliers.

## Battle CP rewards

The supported US game's result calculation combines a rival component, a remaining-SP component and a distance component, then applies the rival's reward-type multiplier. The rival component for a win changes with encounter history: the source uses a factor of 5 for a rival not previously encountered, 4 for one encountered but not yet defeated, and 2 after a previous defeat. Individual rival pages show the resulting rival component, including that rival's reward-type multiplier.

Remaining SP and distance can increase the final award, so the amounts listed on rival pages are not fixed total payouts. The source also has an optional 1.5× adjustment to the SP component. It rounds intermediate values, so rounding a combined percentage afterward can produce a different result. A loss or draw has no rival win component in the recovered calculation.

These rules are based on the port's source-recovered `090420` result calculation and its battle-award tests. Their reward-type multiplier affects CP, not the rival's car statistics. The port's optional traffic challenges use a separate custom award calculation.

## Rival speed and rubber-banding

The original automatic driver can adjust a non-player rival’s **target speed** while using its following curve. The adjustment uses the followed actor’s signed relation to the rival, multiplied by 0.3125, and the low four bits of the rival’s source priority. It requires a valid relation and does not run for the player or when the actor follows itself. The two comparisons are strict: at either boundary, this distance adjustment leaves the target unchanged.

| Source category | Scaled signed distance below | Target factor | Scaled signed distance above | Target factor |
| ---: | ---: | ---: | ---: | ---: |
| 0 | -20 | 1.20× | 20 | 0.90× |
| 1 | -20 | 1.20× | 25 | 0.90× |
| 2 | -20 | 1.20× | 30 | 0.90× |
| 3 | -20 | 1.20× | 35 | 0.90× |
| 4 | -20 | 1.20× | 40 | 0.90× |
| 5 | -20 | 1.20× | 45 | 0.90× |
| 6 | -20 | 1.25× | 50 | 0.90× |
| 7 | -20 | 1.25× | 55 | 0.90× |
| 8 | -20 | 1.25× | 60 | 0.90× |
| 9 | -20 | 1.25× | 65 | 0.90× |
| 10 | -20 | 1.25× | 70 | 0.90× |
| 11 | -20 | 1.30× | 75 | 0.90× |
| 12 | -20 | 1.30× | 80 | 0.90× |
| 13 | -20 | 1.30× | 85 | 0.90× |
| 14 | -20 | 1.35× | 90 | 0.90× |
| 15 | -20 | 1.35× | 95 | 0.90× |

The selected rival’s source flag 0x02 can apply an additional 0.90× target-speed factor when the runtime actor’s flag 0x04 is also set. This is applied in the following-curve branch and can combine with the distance factor. Individual rival pages show their category-specific values and whether their source flag enables the additional condition. These values change an AI speed target, not engine horsepower, and do not describe every AI speed rule.

The implementation follows the source-recovered `085EA0` relation adjustment and `084E38` flag-gated factor for US T40211N V1.002. The project has source-comparison and boundary tests; full gameplay effects depend on the active driving state.
