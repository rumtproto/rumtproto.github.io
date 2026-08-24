---
title: "stories.albums"
original: "https://core.telegram.org/constructor/stories.albums"
section: ref
description: "Get story albums created by a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.albums","url":"/constructor/stories.albums/"}]
layout: layout.njk
---

# stories.albums

[Story albums »](/api/stories/#story-albums).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.albums/" class="current_page_link">stories.albums</a>#c3987a3a hash:<a href="/type/long/">long</a> albums:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryAlbum/">StoryAlbum</a>&gt; = <a href="/type/stories.Albums/">stories.Albums</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash to pass to <a href="/method/stories.getAlbums/">stories.getAlbums</a> to avoid returning any results if they haven't changed.</td></tr><tr><td><strong>albums</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryAlbum/">StoryAlbum</a>&gt;</td><td>The albums.</td></tr></tbody></table>

### Type

[stories.Albums](/type/stories.Albums/)

### Related pages

#### [stories.getAlbums](/method/stories.getAlbums/)

Get [story albums](/api/stories/#story-albums) created by a peer.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
