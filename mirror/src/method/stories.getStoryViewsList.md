---
title: "stories.getStoryViewsList"
original: "https://core.telegram.org/method/stories.getStoryViewsList"
section: ref
description: "Obtain the list of users that have viewed a specific story we posted"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getStoryViewsList","url":"/method/stories.getStoryViewsList/"}]
layout: layout.njk
---

# stories.getStoryViewsList

Obtain the list of users that have viewed a specific [story we posted](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyViewsList/">stories.storyViewsList</a>#59d78fc5 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> views_count:<a href="/type/int/">int</a> forwards_count:<a href="/type/int/">int</a> reactions_count:<a href="/type/int/">int</a> views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryView/">StoryView</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.StoryViewsList/">stories.StoryViewsList</a>;
---functions---
<a href="/method/stories.getStoryViewsList/" class="current_page_link">stories.getStoryViewsList</a>#7ed23c57 flags:<a href="/type/%23/">#</a> just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> q:flags.1?<a href="/type/string/">string</a> id:<a href="/type/int/">int</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.StoryViewsList/">stories.StoryViewsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>just_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to only fetch view reaction/views made by our <a href="/api/contacts/">contacts</a></td></tr><tr><td><strong>reactions_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether to return <a href="/constructor/storyView/">storyView</a> info about users that reacted to the story (i.e. if set, the server will first sort results by view date as usual, and then also additionally sort the list by putting <a href="/constructor/storyView/">storyView</a>s with an associated reaction first in the list). Ignored if <code>forwards_first</code> is set.</td></tr><tr><td><strong>forwards_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the story was posted</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Search for specific peers</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Story ID</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for pagination, obtained from <a href="/constructor/stories.storyViewsList/">stories.storyViewsList</a>.<code>next_offset</code></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[stories.StoryViewsList](/type/stories.StoryViewsList/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STORY_ID_INVALID</td><td>The specified story ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Contact list](/api/contacts/)

Working with contacts.

#### [storyView](/constructor/storyView/)

[Story](/api/stories/) view date and reaction information

#### [stories.storyViewsList](/constructor/stories.storyViewsList/)

Reaction and view counters for a [story](/api/stories/)

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
