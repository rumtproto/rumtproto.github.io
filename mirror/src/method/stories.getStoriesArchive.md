---
title: "stories.getStoriesArchive"
original: "https://core.telegram.org/method/stories.getStoriesArchive"
section: ref
description: "Fetch the story archive » of a peer we control."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getStoriesArchive","url":"/method/stories.getStoriesArchive/"}]
layout: layout.njk
---

# stories.getStoriesArchive

Fetch the [story archive »](/api/stories/#pinned-or-archived-stories) of a peer we control.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.stories/">stories.stories</a>#63c3dd0a flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryItem/">StoryItem</a>&gt; pinned_to_top:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.Stories/">stories.Stories</a>;
---functions---
<a href="/method/stories.getStoriesArchive/" class="current_page_link">stories.getStoriesArchive</a>#b4352016 peer:<a href="/type/InputPeer/">InputPeer</a> offset_id:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.Stories/">stories.Stories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer whose archived stories should be fetched</td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[stories.Stories](/type/stories.Stories/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
