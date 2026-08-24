---
title: "messageMediaWebPage"
original: "https://core.telegram.org/constructor/messageMediaWebPage"
section: ref
description: "Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaWebPage","url":"/constructor/messageMediaWebPage/"}]
layout: layout.njk
---

# messageMediaWebPage

Preview of webpage

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaWebPage/" class="current_page_link">messageMediaWebPage</a>#ddf10c3b flags:<a href="/type/%23/">#</a> force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:<a href="/type/WebPage/">WebPage</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>force_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, specifies that a large media preview should be used.</td></tr><tr><td><strong>force_small_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, specifies that a small media preview should be used.</td></tr><tr><td><strong>manual</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, indicates that the URL used for the webpage preview was specified manually using <a href="/constructor/inputMediaWebPage/">inputMediaWebPage</a>, and may not be related to any of the URLs specified in the message.</td></tr><tr><td><strong>safe</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, the webpage can be opened directly without user confirmation; otherwise, user confirmation is required, showing the exact URL that will be opened.</td></tr><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage/">WebPage</a></td><td>Webpage preview</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [inputMediaWebPage](/constructor/inputMediaWebPage/)

Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message.
