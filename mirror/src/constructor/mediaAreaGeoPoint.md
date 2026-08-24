---
title: "mediaAreaGeoPoint"
original: "https://core.telegram.org/constructor/mediaAreaGeoPoint"
section: ref
description: "Represents a geolocation tag attached to a story."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaGeoPoint","url":"/constructor/mediaAreaGeoPoint/"}]
layout: layout.njk
---

# mediaAreaGeoPoint

Represents a geolocation tag attached to a [story](/api/stories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaGeoPoint/" class="current_page_link">mediaAreaGeoPoint</a>#cad5452d flags:<a href="/type/%23/">#</a> coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> address:flags.0?<a href="/type/GeoPointAddress/">GeoPointAddress</a> = <a href="/type/MediaArea/">MediaArea</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a></td><td>The size and position of the media area corresponding to the location sticker on top of the story media.</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint/">GeoPoint</a></td><td>Coordinates of the geolocation tag.</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/GeoPointAddress/">GeoPointAddress</a></td><td>Optional textual representation of the address.</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
