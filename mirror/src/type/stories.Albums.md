---
title: "Stories.Albums"
original: "https://core.telegram.org/type/stories.Albums"
section: ref
description: "Represents a list of story albums »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Stories.Albums","url":"/type/stories.Albums/"}]
layout: layout.njk
---

# Stories.Albums

Represents a list of [story albums »](/api/stories/#story-albums).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.albumsNotModified/">stories.albumsNotModified</a>#564edaeb = <a href="/type/stories.Albums/" class="current_page_link">stories.Albums</a>;
<a href="/constructor/stories.albums/">stories.albums</a>#c3987a3a hash:<a href="/type/long/">long</a> albums:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryAlbum/">StoryAlbum</a>&gt; = <a href="/type/stories.Albums/" class="current_page_link">stories.Albums</a>;

---functions---

<a href="/method/stories.getAlbums/">stories.getAlbums</a>#25b3eac7 peer:<a href="/type/InputPeer/">InputPeer</a> hash:<a href="/type/long/">long</a> = <a href="/type/stories.Albums/" class="current_page_link">stories.Albums</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.albumsNotModified/">stories.albumsNotModified</a></td><td>The <a href="/api/stories/#story-albums">story album list »</a> hasn't changed.</td></tr><tr><td><a href="/constructor/stories.albums/">stories.albums</a></td><td><a href="/api/stories/#story-albums">Story albums »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getAlbums/">stories.getAlbums</a></td><td>Get <a href="/api/stories/#story-albums">story albums</a> created by a peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
