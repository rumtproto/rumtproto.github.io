---
title: "StoryAlbum"
original: "https://core.telegram.org/type/StoryAlbum"
section: ref
description: "Represents a story album »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StoryAlbum","url":"/type/StoryAlbum/"}]
layout: layout.njk
---

# StoryAlbum

Represents a [story album »](/api/stories/#story-albums).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/storyAlbum/">storyAlbum</a>#9325705a flags:<a href="/type/%23/">#</a> album_id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> icon_photo:flags.0?<a href="/type/Photo/">Photo</a> icon_video:flags.1?<a href="/type/Document/">Document</a> = <a href="/type/StoryAlbum/" class="current_page_link">StoryAlbum</a>;

---functions---

<a href="/method/stories.createAlbum/">stories.createAlbum</a>#a36396e5 peer:<a href="/type/InputPeer/">InputPeer</a> title:<a href="/type/string/">string</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/StoryAlbum/" class="current_page_link">StoryAlbum</a>;
<a href="/method/stories.updateAlbum/">stories.updateAlbum</a>#5e5259b6 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> album_id:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> delete_stories:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; add_stories:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; order:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/StoryAlbum/" class="current_page_link">StoryAlbum</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/storyAlbum/">storyAlbum</a></td><td>Represents a <a href="/api/stories/#story-albums">story album »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.createAlbum/">stories.createAlbum</a></td><td>Creates a <a href="/api/stories/#story-albums">story album</a>.</td></tr><tr><td><a href="/method/stories.updateAlbum/">stories.updateAlbum</a></td><td>Rename a <a href="/api/stories/#story-albums">story albums »</a>, or add, delete or reorder stories in it.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
