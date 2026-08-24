---
title: "stories.getAlbums"
original: "https://core.telegram.org/method/stories.getAlbums"
section: ref
description: "Get story albums created by a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getAlbums","url":"/method/stories.getAlbums/"}]
layout: layout.njk
---

# stories.getAlbums

Get [story albums](/api/stories/#story-albums) created by a peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.albumsNotModified/">stories.albumsNotModified</a>#564edaeb = <a href="/type/stories.Albums/">stories.Albums</a>;
<a href="/constructor/stories.albums/">stories.albums</a>#c3987a3a hash:<a href="/type/long/">long</a> albums:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryAlbum/">StoryAlbum</a>&gt; = <a href="/type/stories.Albums/">stories.Albums</a>;
---functions---
<a href="/method/stories.getAlbums/" class="current_page_link">stories.getAlbums</a>#25b3eac7 peer:<a href="/type/InputPeer/">InputPeer</a> hash:<a href="/type/long/">long</a> = <a href="/type/stories.Albums/">stories.Albums</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The <code>hash</code> from a previously returned <a href="/constructor/stories.albums/">stories.albums</a>, to avoid returning any results if they haven't changed.</td></tr></tbody></table>

### Result

[stories.Albums](/type/stories.Albums/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [stories.albums](/constructor/stories.albums/)

[Story albums »](/api/stories/#story-albums).

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
