---
title: "stories.FoundStories"
original: "https://core.telegram.org/type/stories.FoundStories"
section: ref
description: "Stories found using global story search »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.FoundStories","url":"/type/stories.FoundStories/"}]
layout: layout.njk
---

# stories.FoundStories

Stories found using [global story search »](/api/stories/#searching-stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.foundStories/">stories.foundStories</a>#e2de7737 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FoundStory/">FoundStory</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.FoundStories/" class="current_page_link">stories.FoundStories</a>;

---functions---

<a href="/method/stories.searchPosts/">stories.searchPosts</a>#d1810907 flags:<a href="/type/%23/">#</a> hashtag:flags.0?<a href="/type/string/">string</a> area:flags.1?<a href="/type/MediaArea/">MediaArea</a> peer:flags.2?<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/stories.FoundStories/" class="current_page_link">stories.FoundStories</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.foundStories/">stories.foundStories</a></td><td>Stories found using <a href="/api/stories/#searching-stories">global story search »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.searchPosts/">stories.searchPosts</a></td><td>Globally search for <a href="/api/stories/">stories</a> using a hashtag or a <a href="/api/stories/#location-tags">location media area</a>, see <a href="/api/stories/#searching-stories">here »</a> for more info on the full flow.<br><br>Either <code>hashtag</code> <strong>or</strong> <code>area</code> <strong>must</strong> be set when invoking the method.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
