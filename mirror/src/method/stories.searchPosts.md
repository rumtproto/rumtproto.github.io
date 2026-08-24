---
title: "stories.searchPosts"
original: "https://core.telegram.org/method/stories.searchPosts"
section: ref
description: "Globally search for stories using a hashtag or a location media area, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.searchPosts","url":"/method/stories.searchPosts/"}]
layout: layout.njk
---

# stories.searchPosts

Globally search for [stories](/api/stories/) using a hashtag or a [location media area](/api/stories/#location-tags), see [here »](/api/stories/#searching-stories) for more info on the full flow.

Either `hashtag` **or** `area` **must** be set when invoking the method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.foundStories/">stories.foundStories</a>#e2de7737 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FoundStory/">FoundStory</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.FoundStories/">stories.FoundStories</a>;
---functions---
<a href="/method/stories.searchPosts/" class="current_page_link">stories.searchPosts</a>#d1810907 flags:<a href="/type/%23/">#</a> hashtag:flags.0?<a href="/type/string/">string</a> area:flags.1?<a href="/type/MediaArea/">MediaArea</a> peer:flags.2?<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.FoundStories/">stories.FoundStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>hashtag</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Hashtag (without the <code>#</code>)</td></tr><tr><td><strong>area</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/MediaArea/">MediaArea</a></td><td>A <a href="/constructor/mediaAreaGeoPoint/">mediaAreaGeoPoint</a> or a <a href="/constructor/mediaAreaVenue/">mediaAreaVenue</a>.<br>Note <a href="/constructor/mediaAreaGeoPoint/">mediaAreaGeoPoint</a> areas may be searched only if they have an associated <code>address</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, returns only stories posted by this peer.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for <a href="/api/offsets/">pagination</a>: initially an empty string, then the <code>next_offset</code> from the previously returned <a href="/constructor/stories.foundStories/">stories.foundStories</a>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[stories.FoundStories](/type/stories.FoundStories/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>HASHTAG_INVALID</td><td>The specified hashtag is invalid.</td></tr></tbody></table>

### Related pages

#### [mediaAreaGeoPoint](/constructor/mediaAreaGeoPoint/)

Represents a geolocation tag attached to a [story](/api/stories/).

#### [mediaAreaVenue](/constructor/mediaAreaVenue/)

Represents a location tag attached to a [story](/api/stories/), with additional venue information.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [stories.foundStories](/constructor/stories.foundStories/)

Stories found using [global story search »](/api/stories/#searching-stories).

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
