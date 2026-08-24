---
title: "inputMediaDocumentExternal"
original: "https://core.telegram.org/constructor/inputMediaDocumentExternal"
section: ref
description: "Document that will be downloaded by the telegram servers"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaDocumentExternal","url":"/constructor/inputMediaDocumentExternal/"}]
layout: layout.njk
---

# inputMediaDocumentExternal

Document that will be downloaded by the telegram servers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaDocumentExternal/" class="current_page_link">inputMediaDocumentExternal</a>#779600f9 flags:<a href="/type/%23/">#</a> spoiler:flags.1?true url:<a href="/type/string/">string</a> ttl_seconds:flags.0?<a href="/type/int/">int</a> video_cover:flags.2?<a href="/type/InputPhoto/">InputPhoto</a> video_timestamp:flags.3?<a href="/type/int/">int</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>URL of the document</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Time to live of self-destructing document, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the document immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr><tr><td><strong>video_cover</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputPhoto/">InputPhoto</a></td><td>Custom video cover.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Start playing the video at the specified timestamp (seconds).</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)
