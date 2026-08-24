---
title: "inputMediaWebPage"
original: "https://core.telegram.org/constructor/inputMediaWebPage"
section: ref
description: "Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaWebPage","url":"/constructor/inputMediaWebPage/"}]
layout: layout.njk
---

# inputMediaWebPage

Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaWebPage/" class="current_page_link">inputMediaWebPage</a>#c21b8849 flags:<a href="/type/%23/">#</a> force_large_media:flags.0?true force_small_media:flags.1?true optional:flags.2?true url:<a href="/type/string/">string</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>force_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, specifies that a large media preview should be used.</td></tr><tr><td><strong>force_small_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, specifies that a small media preview should be used.</td></tr><tr><td><strong>optional</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If <strong>not</strong> set, a <code>WEBPAGE_NOT_FOUND</code> RPC error will be emitted if a webpage preview cannot be generated for the specified <code>url</code>; otherwise, no error will be emitted (unless the provided message is also empty, in which case a <code>MESSAGE_EMPTY</code> will be emitted, instead).</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The URL to use for the link preview.</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)
