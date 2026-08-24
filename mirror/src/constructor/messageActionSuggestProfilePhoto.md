---
title: "messageActionSuggestProfilePhoto"
original: "https://core.telegram.org/constructor/messageActionSuggestProfilePhoto"
section: ref
description: "A new profile picture was suggested using photos.uploadContactProfilePhoto."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSuggestProfilePhoto","url":"/constructor/messageActionSuggestProfilePhoto/"}]
layout: layout.njk
---

# messageActionSuggestProfilePhoto

A new profile picture was suggested using [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionSuggestProfilePhoto/" class="current_page_link">messageActionSuggestProfilePhoto</a>#57de635e photo:<a href="/type/Photo/">Photo</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo/">Photo</a></td><td>The photo that the user suggested we set as profile picture.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)

Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.
