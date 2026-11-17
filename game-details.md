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

Source analysis of the supported US release identifies an automatic-driving relative-distance adjustment that considers the followed actor and rival-category coefficients. Further work is needed to explain the complete behaviour and establish which conditions and effects should be described as rubber-banding. A relative-distance adjustment alone does not establish a universal catch-up multiplier.

These findings are based on the project's source-qualified recovery of the original automatic-driving speed routines. Values and a complete player-facing explanation will be added after their conditions are verified.
