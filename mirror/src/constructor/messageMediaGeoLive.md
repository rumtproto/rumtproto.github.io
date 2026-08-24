---
title: "messageMediaGeoLive"
original: "https://core.telegram.org/constructor/messageMediaGeoLive"
section: ref
description: "Indicates a live geolocation"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaGeoLive","url":"/constructor/messageMediaGeoLive/"}]
layout: layout.njk
---

# messageMediaGeoLive

Indicates a [live geolocation](/api/live-location/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaGeoLive/" class="current_page_link">messageMediaGeoLive</a>#b940c666 flags:<a href="/type/%23/">#</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> heading:flags.0?<a href="/type/int/">int</a> period:<a href="/type/int/">int</a> proximity_notification_radius:flags.1?<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint/">GeoPoint</a></td><td>Geolocation</td></tr><tr><td><strong>heading</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>For <a href="/api/live-location/">live locations</a>, a direction in which the location moves, in degrees; 1-360</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Validity period of provided geolocation</td></tr><tr><td><strong>proximity_notification_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>For <a href="/api/live-location/">live locations</a>, a maximum distance to another chat member for proximity alerts, in meters (0-100000).</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [Live geolocation](/api/live-location/)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
