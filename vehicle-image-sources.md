---
layout: default
title: Vehicle image sources
section: cars
help: How the vehicle images were captured and what they show.
---

# Vehicle image sources

Unless identified as an original-game reference, the car and rival images are screenshots from the TXR2 port, using its native or browser build with the supported US release’s game data. They show the port’s reconstructed appearance, lighting and rendering; they are not screenshots of the original Dreamcast game. Individual comparisons with the original game remain outstanding.

## Car images

The standard capture selects the car by its zero-based catalogue ID. For normal cars it uses the first factory paint and an unmodified stock configuration. Traffic models use the port’s traffic-geometry capture path. The delivery lorry (136) uses a clean browser-garage capture in the original showroom strip, with traffic style 0, stock parts and the interface hidden. It was captured through the port’s WebGPU renderer in Windows Edge using the supported US assets. The roadworks lorry (138) uses a labelled native model-viewer capture because the standard capture camera clips into it; its page also has an interface-free browser-garage capture from the high idle camera, using traffic style 0 and stock parts. Their backgrounds, lighting and angles differ from the other catalogue images. Cars 106–108, 117–120 and 123 also use interface-free browser-garage captures with their first factory paint and stock parts; their original graphics-test captures showed displaced wheels. The showroom shadow can appear separated from the car. The other 130 car images were checked byte for byte against their native capture batch, and each replacement was matched to its selected capture. This verifies file provenance, not original-game visual fidelity.

### Shared model resources

In the supported US data, catalogue IDs 106–108 and 117–120 have different TYPE codes and specifications, but their corresponding body and wheel resources are identical. The original garage's documented model-selection path forwards the selected catalogue ID to the resource lookup. The port therefore displays the same body for these records; the garage rendering has not yet been compared with an original-game view of each record. Car 123 shares their texture resources but has different body and wheel geometry. See the port's [visual resource recovery](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/docs/car-visual-resources-recovery.md) for the lookup and garage path.

## Rival images

The rival capture selects the zero-based rival record and its associated car. The native capture code reads that rival’s replay appearance parameters to choose its body configuration and wheel geometry, and loads the applicable sticker resource. The complete parameter block for every rival, including paint values, has been [compared with the original game data](https://github.com/tofuman0/txr2-documentation/blob/main/CATALOGUE-STATUS.md#rival-appearance-parameter-comparison). This is a capture of the port’s reconstruction of those records, rather than a photograph of an original-game encounter. Matching the input data does not establish that every part, paint colour or sticker is rendered exactly as it was in the original game.

The standard images use the port’s graphics-test scene and its camera; they are not captures of an original-game race encounter. For rivals, the port obtains the recorded parameters through [`RaceSessionCatalog::ReplayRival`](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/race_session_config.cpp#L111), then [`GraphicsTestScene::PrepareCar`](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/src/graphics_test_scene.cpp#L558) applies the normal actor-binding rules and prepares the geometry, wheel resources and applicable sticker. Car 136 uses the browser garage and car 138 uses the native model viewer instead. The image IDs match the car or rival source IDs used by the linked pages; the in-game rival number is one higher than the rival source ID.

The car links on all 372 rival pages have been compared with the `m_Car` values in the port’s [recovered SessionRivals table](https://github.com/tofuman0/TXR2-Port/blob/a66040a6/include/txr2/race_session_data.hpp#L587). Each page also links to the capture bearing its rival ID. These checks establish the recorded car and file mapping; they do not verify the appearance or visual fidelity of each capture.

All 372 published rival PNG files were also checked byte for byte against the corresponding files in the native capture batch. This verifies that the published files came from that batch; it does not independently verify the captured car’s original-game appearance.
