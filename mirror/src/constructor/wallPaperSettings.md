---
title: "wallPaperSettings"
original: "https://core.telegram.org/constructor/wallPaperSettings"
section: ref
description: "Wallpaper rendering information."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"wallPaperSettings","url":"/constructor/wallPaperSettings/"}]
layout: layout.njk
---

# wallPaperSettings

[Wallpaper](/api/wallpapers/) rendering information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/wallPaperSettings/" class="current_page_link">wallPaperSettings</a>#372efcd0 flags:<a href="/type/%23/">#</a> blur:flags.1?true motion:flags.2?true background_color:flags.0?<a href="/type/int/">int</a> second_background_color:flags.4?<a href="/type/int/">int</a> third_background_color:flags.5?<a href="/type/int/">int</a> fourth_background_color:flags.6?<a href="/type/int/">int</a> intensity:flags.3?<a href="/type/int/">int</a> rotation:flags.4?<a href="/type/int/">int</a> emoticon:flags.7?<a href="/type/string/">string</a> = <a href="/type/WallPaperSettings/">WallPaperSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>blur</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>For <a href="/api/wallpapers/#image-wallpapers">image wallpapers »</a>: if set, the JPEG must be downscaled to fit in 450x450 square and then box-blurred with radius 12.</td></tr><tr><td><strong>motion</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, the background needs to be slightly moved when the device is rotated.</td></tr><tr><td><strong>background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Used for <a href="/api/wallpapers/#solid-fill">solid »</a>, <a href="/api/wallpapers/#gradient-fill">gradient »</a> and <a href="/api/wallpapers/#freeform-gradient-fill">freeform gradient »</a> fills.</td></tr><tr><td><strong>second_background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Used for <a href="/api/wallpapers/#gradient-fill">gradient »</a> and <a href="/api/wallpapers/#freeform-gradient-fill">freeform gradient »</a> fills.</td></tr><tr><td><strong>third_background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Used for <a href="/api/wallpapers/#freeform-gradient-fill">freeform gradient »</a> fills.</td></tr><tr><td><strong>fourth_background_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Used for <a href="/api/wallpapers/#freeform-gradient-fill">freeform gradient »</a> fills.</td></tr><tr><td><strong>intensity</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Used for <a href="/api/wallpapers/#pattern-wallpapers">pattern wallpapers »</a>.</td></tr><tr><td><strong>rotation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Clockwise rotation angle of the gradient, in degrees; 0-359. Should be always divisible by 45.</td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/string/">string</a></td><td>If set, this wallpaper can be used as a channel wallpaper and is represented by the specified UTF-8 emoji.</td></tr></tbody></table>

### Type

[WallPaperSettings](/type/WallPaperSettings/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
