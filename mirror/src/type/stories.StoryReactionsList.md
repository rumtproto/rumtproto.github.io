---
title: "stories.StoryReactionsList"
original: "https://core.telegram.org/type/stories.StoryReactionsList"
section: ref
description: "List of peers that reacted to a specific story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.StoryReactionsList","url":"/type/stories.StoryReactionsList/"}]
layout: layout.njk
---

# stories.StoryReactionsList

List of peers that reacted to a specific [story](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyReactionsList/">stories.storyReactionsList</a>#aa5f789c flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryReaction/">StoryReaction</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.StoryReactionsList/" class="current_page_link">stories.StoryReactionsList</a>;

---functions---

<a href="/method/stories.getStoryReactionsList/">stories.getStoryReactionsList</a>#b9b2881f flags:<a href="/type/%23/">#</a> forwards_first:flags.2?true peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> reaction:flags.0?<a href="/type/Reaction/">Reaction</a> offset:flags.1?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.StoryReactionsList/" class="current_page_link">stories.StoryReactionsList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyReactionsList/">stories.storyReactionsList</a></td><td>List of peers that reacted to or intercated with a specific <a href="/api/stories/">story</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoryReactionsList/">stories.getStoryReactionsList</a></td><td>Get the <a href="/api/reactions/">reaction</a> and interaction list of a <a href="/api/stories/">story</a> posted to a channel, along with the sender of each reaction.<br><br>Can only be used by channel admins.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
