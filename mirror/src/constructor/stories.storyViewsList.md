---
title: "stories.storyViewsList"
original: "https://core.telegram.org/constructor/stories.storyViewsList"
section: ref
description: "Reaction and view counters for a story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.storyViewsList","url":"/constructor/stories.storyViewsList/"}]
layout: layout.njk
---

# stories.storyViewsList

Reaction and view counters for a [story](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyViewsList/" class="current_page_link">stories.storyViewsList</a>#59d78fc5 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> views_count:<a href="/type/int/">int</a> forwards_count:<a href="/type/int/">int</a> reactions_count:<a href="/type/int/">int</a> views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryView/">StoryView</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.StoryViewsList/">stories.StoryViewsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results that can be fetched</td></tr><tr><td><strong>views_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of story views</td></tr><tr><td><strong>forwards_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of story forwards/reposts</td></tr><tr><td><strong>reactions_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of reactions that were added to the story</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryView/">StoryView</a>&gt;</td><td>Story view date and reaction information</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset for pagination</td></tr></tbody></table>

### Type

[stories.StoryViewsList](/type/stories.StoryViewsList/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
