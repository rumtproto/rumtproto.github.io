---
title: "messageMediaPhoto"
original: "https://core.telegram.org/constructor/messageMediaPhoto"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaPhoto","url":"/constructor/messageMediaPhoto/"}]
layout: layout.njk
---

# messageMediaPhoto

Attached photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaPhoto/" class="current_page_link">messageMediaPhoto</a>#695150d7 flags:<a href="/type/%23/">#</a> spoiler:flags.3?true photo:flags.0?<a href="/type/Photo/">Photo</a> ttl_seconds:flags.2?<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>live_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether this is a live photo, i.e. a still photo paired with the short <code>video</code> clip captured alongside it</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Photo/">Photo</a></td><td>Photo</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Time to live of self-destructing photo, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the photo immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Document/">Document</a></td><td>The short video clip of the live photo</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)
