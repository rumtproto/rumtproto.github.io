---
title: "stories.StoryViewsList"
original: "https://core.telegram.org/type/stories.StoryViewsList"
section: ref
description: "Reaction and view counters for a story"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.StoryViewsList","url":"/type/stories.StoryViewsList/"}]
layout: layout.njk
---

# stories.StoryViewsList

Reaction and view counters for a [story](/api/stories/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.storyViewsList/">stories.storyViewsList</a>#59d78fc5 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> views_count:<a href="/type/int/">int</a> forwards_count:<a href="/type/int/">int</a> reactions_count:<a href="/type/int/">int</a> views:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryView/">StoryView</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/stories.StoryViewsList/" class="current_page_link">stories.StoryViewsList</a>;

---functions---

<a href="/method/stories.getStoryViewsList/">stories.getStoryViewsList</a>#7ed23c57 flags:<a href="/type/%23/">#</a> just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:<a href="/type/InputPeer/">InputPeer</a> q:flags.1?<a href="/type/string/">string</a> id:<a href="/type/int/">int</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.StoryViewsList/" class="current_page_link">stories.StoryViewsList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyViewsList/">stories.storyViewsList</a></td><td>Reaction and view counters for a <a href="/api/stories/">story</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoryViewsList/">stories.getStoryViewsList</a></td><td>Obtain the list of users that have viewed a specific <a href="/api/stories/">story we posted</a></td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
