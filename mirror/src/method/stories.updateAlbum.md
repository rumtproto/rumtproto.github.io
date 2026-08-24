---
title: "stories.updateAlbum"
original: "https://core.telegram.org/method/stories.updateAlbum"
section: ref
description: "Rename a story albums », or add, delete or reorder stories in it."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.updateAlbum","url":"/method/stories.updateAlbum/"}]
layout: layout.njk
---

# stories.updateAlbum

Rename a [story albums »](/api/stories/#story-albums), or add, delete or reorder stories in it.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyAlbum/">storyAlbum</a>#9325705a flags:<a href="/type/%23/">#</a> album_id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> icon_photo:flags.0?<a href="/type/Photo/">Photo</a> icon_video:flags.1?<a href="/type/Document/">Document</a> = <a href="/type/StoryAlbum/">StoryAlbum</a>;
---functions---
<a href="/method/stories.updateAlbum/" class="current_page_link">stories.updateAlbum</a>#5e5259b6 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> album_id:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> delete_stories:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; add_stories:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; order:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/StoryAlbum/">StoryAlbum</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the album is posted.</td></tr><tr><td><strong>album_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Album ID.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>New album title.</td></tr><tr><td><strong>delete_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>If set, deletes the specified stories from the album.</td></tr><tr><td><strong>add_stories</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>If set, adds the specified stories to the album.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>If set, reorders the stories in the album by their IDs.</td></tr></tbody></table>

### Result

[StoryAlbum](/type/StoryAlbum/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
