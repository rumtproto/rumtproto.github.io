---
title: "inputMediaDocument"
original: "https://core.telegram.org/constructor/inputMediaDocument"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaDocument","url":"/constructor/inputMediaDocument/"}]
layout: layout.njk
---

# inputMediaDocument

Forwarded document

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaDocument/" class="current_page_link">inputMediaDocument</a>#a8763ab5 flags:<a href="/type/%23/">#</a> spoiler:flags.2?true id:<a href="/type/InputDocument/">InputDocument</a> video_cover:flags.3?<a href="/type/InputPhoto/">InputPhoto</a> video_timestamp:flags.4?<a href="/type/int/">int</a> ttl_seconds:flags.0?<a href="/type/int/">int</a> query:flags.1?<a href="/type/string/">string</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The document to be forwarded.</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InputPhoto/">InputPhoto</a></td><td>Custom video cover.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Start playing the video at the specified timestamp (seconds).</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Time to live of self-destructing document, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the document immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Text query or emoji that was used by the user to find this sticker or GIF: used to improve search result relevance.</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)
