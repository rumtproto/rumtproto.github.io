---
title: "stories.storyReactionsList"
original: "https://core.telegram.org/constructor/stories.storyReactionsList"
section: ref
description: "List of peers that reacted to or intercated with a specific story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.storyReactionsList","url":"/constructor/stories.storyReactionsList/"}]
layout: layout.njk
---

# stories.storyReactionsList

List of peers that reacted to or intercated with a specific [story](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyReactionsList/" class="current_page_link">stories.storyReactionsList</a>#aa5f789c flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryReaction/">StoryReaction</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.StoryReactionsList/">stories.StoryReactionsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of reactions matching query</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryReaction/">StoryReaction</a>&gt;</td><td>List of peers that reacted to or interacted with a specific story</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If set, indicates the next offset to use to load more results by invoking <a href="/method/stories.getStoryReactionsList/">stories.getStoryReactionsList</a>.</td></tr></tbody></table>

### Type

[stories.StoryReactionsList](/type/stories.StoryReactionsList/)

### Related pages

#### [stories.getStoryReactionsList](/method/stories.getStoryReactionsList/)

Get the [reaction](/api/reactions/) and interaction list of a [story](/api/stories/) posted to a channel, along with the sender of each reaction.

Can only be used by channel admins.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
