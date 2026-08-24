---
title: "inputMediaPhoto"
original: "https://core.telegram.org/constructor/inputMediaPhoto"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaPhoto","url":"/constructor/inputMediaPhoto/"}]
layout: layout.njk
---

# inputMediaPhoto

Forwarded photo

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaPhoto/" class="current_page_link">inputMediaPhoto</a>#b3ba0635 flags:<a href="/type/%23/">#</a> spoiler:flags.1?true id:<a href="/type/InputPhoto/">InputPhoto</a> ttl_seconds:flags.0?<a href="/type/int/">int</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>live_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this is a live photo, i.e. a still photo paired with the short <code>video</code> clip captured alongside it</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputPhoto/">InputPhoto</a></td><td>Photo to be forwarded</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Time to live of self-destructing photo, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the document immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputDocument/">InputDocument</a></td><td>The short video clip of the live photo</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)
