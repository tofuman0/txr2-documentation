---
layout: default
title: Vehicle image sources
section: cars
help: How the vehicle images were captured and what they show.
---

# Vehicle image sources

Unless identified as an original-game reference, the car and rival images are screenshots from the native TXR2 port using the supported US release’s game data. They show the port’s reconstructed appearance, lighting and rendering; they are not screenshots of the original Dreamcast game. Individual comparisons with the original game remain outstanding.

## Car images

The standard capture selects the car by its zero-based catalogue ID. For normal cars it uses the first factory paint and an unmodified stock configuration. Traffic models use the port’s traffic-geometry capture path. Images for the delivery lorry (136) and roadworks lorry (138) instead use labelled native model-viewer captures because the standard capture camera clips into those models. Their backgrounds, lighting and angles therefore differ from the other catalogue images.

## Rival images

The rival capture selects the zero-based rival record and its associated car. The native capture code reads that rival’s replay appearance parameters to choose its body configuration and wheel geometry, and loads the applicable sticker resource. This is a capture of the port’s reconstruction of those records, rather than a photograph of an original-game encounter. An individual image’s exact visual match to the original game has not yet been verified.

The source paths are `GraphicsTestScene::PrepareCar`, `RaceSessionCatalog::ReplayRival`, and the native model viewer. The image IDs match the car or rival source IDs used by the linked pages; the in-game rival number is one higher than the rival source ID.

The car links on all 372 rival pages have been compared with the `m_Car` values in the port’s [recovered SessionRivals table](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/include/txr2/race_session_data.hpp#L587). Each page also links to the capture bearing its rival ID. These checks establish the recorded car and file mapping; they do not verify the appearance or visual fidelity of each capture.

All 372 published rival PNG files were also checked byte for byte against the corresponding files in the native capture batch. This verifies that the published files came from that batch; it does not independently verify the captured car’s original-game appearance.
