---
title: "inputMediaAreaVenue"
original: "https://core.telegram.org/constructor/inputMediaAreaVenue"
section: ref
description: "Represents a location tag attached to a story, with additional venue information."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaAreaVenue","url":"/constructor/inputMediaAreaVenue/"}]
layout: layout.njk
---

# inputMediaAreaVenue

Represents a [location tag](/api/stories/#media-areas) attached to a [story](/api/stories/), with additional venue information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaAreaVenue/" class="current_page_link">inputMediaAreaVenue</a>#b282217f coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> query_id:<a href="/type/long/">long</a> result_id:<a href="/type/string/">string</a> = <a href="/type/MediaArea/">MediaArea</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a></td><td>The size and location of the media area corresponding to the location sticker on top of the story media.</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The <code>query_id</code> from <a href="/constructor/messages.botResults/">messages.botResults</a>, see <a href="/api/stories/#media-areas">here »</a> for more info.</td></tr><tr><td><strong>result_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The <code>id</code> of the chosen result, see <a href="/api/stories/#media-areas">here »</a> for more info.</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)

### Related pages

#### [messages.botResults](/constructor/messages.botResults/)

Result of a query to an inline bot

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
