---
title: "storyItemSkipped"
original: "https://core.telegram.org/constructor/storyItemSkipped"
section: ref
description: "Represents an active story, whose full information was omitted for space and performance reasons; use stories.getStoriesByID to fetch full info about the skipped story when and if…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyItemSkipped","url":"/constructor/storyItemSkipped/"}]
layout: layout.njk
---

# storyItemSkipped

Represents an active story, whose full information was omitted for space and performance reasons; use [stories.getStoriesByID](/method/stories.getStoriesByID/) to fetch full info about the skipped story when and if needed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyItemSkipped/" class="current_page_link">storyItemSkipped</a>#ffadc913 flags:<a href="/type/%23/">#</a> close_friends:flags.8?true live:flags.9?true id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> expire_date:<a href="/type/int/">int</a> = <a href="/type/StoryItem/">StoryItem</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>close_friends</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Whether this story can only be viewed by <a href="/api/privacy/">our close friends, see here »</a> for more info</td></tr><tr><td><strong>live</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether this story is a <a href="/api/stories/">live video stream »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Story ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the story posted.</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When does the story expire.</td></tr></tbody></table>

### Type

[StoryItem](/type/StoryItem/)

### Related pages

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](/api/stories/) by their IDs.
