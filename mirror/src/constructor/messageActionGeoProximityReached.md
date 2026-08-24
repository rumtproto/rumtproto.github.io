---
title: "messageActionGeoProximityReached"
original: "https://core.telegram.org/constructor/messageActionGeoProximityReached"
section: ref
description: "A user of the chat is now in proximity of another user"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGeoProximityReached","url":"/constructor/messageActionGeoProximityReached/"}]
layout: layout.njk
---

# messageActionGeoProximityReached

A user of the chat is now in proximity of another user

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGeoProximityReached/" class="current_page_link">messageActionGeoProximityReached</a>#98e0d697 from_id:<a href="/type/Peer/">Peer</a> to_id:<a href="/type/Peer/">Peer</a> distance:<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The user or chat that is now in proximity of <code>to_id</code></td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The user or chat that subscribed to <a href="/api/live-location/#proximity-alert">live geolocation proximity alerts</a></td></tr><tr><td><strong>distance</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Distance, in meters (0-100000)</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Live geolocation](/api/live-location/)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.
