---
title: "mediaAreaVenue"
original: "https://core.telegram.org/constructor/mediaAreaVenue"
section: ref
description: "Represents a location tag attached to a story, with additional venue information."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaVenue","url":"/constructor/mediaAreaVenue/"}]
layout: layout.njk
---

# mediaAreaVenue

Represents a location tag attached to a [story](/api/stories/), with additional venue information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaVenue/" class="current_page_link">mediaAreaVenue</a>#be82db9c coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> title:<a href="/type/string/">string</a> address:<a href="/type/string/">string</a> provider:<a href="/type/string/">string</a> venue_id:<a href="/type/string/">string</a> venue_type:<a href="/type/string/">string</a> = <a href="/type/MediaArea/">MediaArea</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a></td><td>The size and location of the media area corresponding to the location sticker on top of the story media.</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint/">GeoPoint</a></td><td>Coordinates of the venue</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue name</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Address</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue provider: currently only "foursquare" needs to be supported.</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue ID in the provider's database</td></tr><tr><td><strong>venue_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Venue type in the provider's database</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
