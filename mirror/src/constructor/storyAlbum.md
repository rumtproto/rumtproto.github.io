---
title: "storyAlbum"
original: "https://core.telegram.org/constructor/storyAlbum"
section: ref
description: "Represents a story album »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"storyAlbum","url":"/constructor/storyAlbum/"}]
layout: layout.njk
---

# storyAlbum

Represents a [story album »](/api/stories/#story-albums).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyAlbum/" class="current_page_link">storyAlbum</a>#9325705a flags:<a href="/type/%23/">#</a> album_id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> icon_photo:flags.0?<a href="/type/Photo/">Photo</a> icon_video:flags.1?<a href="/type/Document/">Document</a> = <a href="/type/StoryAlbum/">StoryAlbum</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>album_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the album.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the album.</td></tr><tr><td><strong>icon_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Photo/">Photo</a></td><td>Photo from the first story of the album, if it's a photo.</td></tr><tr><td><strong>icon_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Document/">Document</a></td><td>Video from the first story of the album, if it's a video.</td></tr></tbody></table>

### Type

[StoryAlbum](/type/StoryAlbum/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
