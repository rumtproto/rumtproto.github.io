---
title: "mediaAreaCoordinates"
original: "https://core.telegram.org/constructor/mediaAreaCoordinates"
section: ref
description: "Coordinates and size of a clickable rectangular area on top of a story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaCoordinates","url":"/constructor/mediaAreaCoordinates/"}]
layout: layout.njk
---

# mediaAreaCoordinates

Coordinates and size of a clickable rectangular area on top of a story.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaCoordinates/" class="current_page_link">mediaAreaCoordinates</a>#cfc9e002 flags:<a href="/type/%23/">#</a> x:<a href="/type/double/">double</a> y:<a href="/type/double/">double</a> w:<a href="/type/double/">double</a> h:<a href="/type/double/">double</a> rotation:<a href="/type/double/">double</a> radius:flags.0?<a href="/type/double/">double</a> = <a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>x</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>The abscissa of the rectangle's center, as a percentage of the media width (0-100).</td></tr><tr><td><strong>y</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>The ordinate of the rectangle's center, as a percentage of the media height (0-100).</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>The width of the rectangle, as a percentage of the media width (0-100).</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>The height of the rectangle, as a percentage of the media height (0-100).</td></tr><tr><td><strong>rotation</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Clockwise rotation angle of the rectangle, in degrees (0-360).</td></tr><tr><td><strong>radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/double/">double</a></td><td>The radius of the rectangle corner rounding, as a percentage of the media width.</td></tr></tbody></table>

### Type

[MediaAreaCoordinates](/type/MediaAreaCoordinates/)
