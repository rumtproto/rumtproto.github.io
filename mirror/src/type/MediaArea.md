---
title: "MediaArea"
original: "https://core.telegram.org/type/MediaArea"
section: ref
description: "Represents a story media area »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MediaArea","url":"/type/MediaArea/"}]
layout: layout.njk
---

# MediaArea

Represents a [story media area »](/api/stories/#media-areas)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaVenue/">mediaAreaVenue</a>#be82db9c coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> title:<a href="/type/string/">string</a> address:<a href="/type/string/">string</a> provider:<a href="/type/string/">string</a> venue_id:<a href="/type/string/">string</a> venue_type:<a href="/type/string/">string</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/inputMediaAreaVenue/">inputMediaAreaVenue</a>#b282217f coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> query_id:<a href="/type/long/">long</a> result_id:<a href="/type/string/">string</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/mediaAreaGeoPoint/">mediaAreaGeoPoint</a>#cad5452d flags:<a href="/type/%23/">#</a> coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> address:flags.0?<a href="/type/GeoPointAddress/">GeoPointAddress</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/mediaAreaSuggestedReaction/">mediaAreaSuggestedReaction</a>#14455871 flags:<a href="/type/%23/">#</a> dark:flags.0?true flipped:flags.1?true coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> reaction:<a href="/type/Reaction/">Reaction</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/mediaAreaChannelPost/">mediaAreaChannelPost</a>#770416af coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> channel_id:<a href="/type/long/">long</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/inputMediaAreaChannelPost/">inputMediaAreaChannelPost</a>#2271f2bf coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> channel:<a href="/type/InputChannel/">InputChannel</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/mediaAreaUrl/">mediaAreaUrl</a>#37381085 coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> url:<a href="/type/string/">string</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/mediaAreaWeather/">mediaAreaWeather</a>#49a6549c coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> emoji:<a href="/type/string/">string</a> temperature_c:<a href="/type/double/">double</a> color:<a href="/type/int/">int</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;
<a href="/constructor/mediaAreaStarGift/">mediaAreaStarGift</a>#5787686d coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> slug:<a href="/type/string/">string</a> = <a href="/type/MediaArea/" class="current_page_link">MediaArea</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/mediaAreaVenue/">mediaAreaVenue</a></td><td>Represents a location tag attached to a <a href="/api/stories/">story</a>, with additional venue information.</td></tr><tr><td><a href="/constructor/inputMediaAreaVenue/">inputMediaAreaVenue</a></td><td>Represents a <a href="/api/stories/#media-areas">location tag</a> attached to a <a href="/api/stories/">story</a>, with additional venue information.</td></tr><tr><td><a href="/constructor/mediaAreaGeoPoint/">mediaAreaGeoPoint</a></td><td>Represents a geolocation tag attached to a <a href="/api/stories/">story</a>.</td></tr><tr><td><a href="/constructor/mediaAreaSuggestedReaction/">mediaAreaSuggestedReaction</a></td><td>Represents a reaction bubble.</td></tr><tr><td><a href="/constructor/mediaAreaChannelPost/">mediaAreaChannelPost</a></td><td>Represents a channel post.</td></tr><tr><td><a href="/constructor/inputMediaAreaChannelPost/">inputMediaAreaChannelPost</a></td><td>Represents a channel post</td></tr><tr><td><a href="/constructor/mediaAreaUrl/">mediaAreaUrl</a></td><td>Represents a <a href="/api/stories/#urls">URL media area</a>.</td></tr><tr><td><a href="/constructor/mediaAreaWeather/">mediaAreaWeather</a></td><td>Represents a <a href="/api/stories/#weather">weather widget »</a>.</td></tr><tr><td><a href="/constructor/mediaAreaStarGift/">mediaAreaStarGift</a></td><td>Represents a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
