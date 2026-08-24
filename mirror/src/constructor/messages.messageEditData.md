---
title: "messages.messageEditData"
original: "https://core.telegram.org/constructor/messages.messageEditData"
section: ref
description: "Message edit data for media"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.messageEditData","url":"/constructor/messages.messageEditData/"}]
layout: layout.njk
---

# messages.messageEditData

Message edit data for media

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messageEditData/" class="current_page_link">messages.messageEditData</a>#26b5dde6 flags:<a href="/type/%23/">#</a> caption:flags.0?true = <a href="/type/messages.MessageEditData/">messages.MessageEditData</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Media caption, if the specified media's caption can be edited</td></tr></tbody></table>

### Type

[messages.MessageEditData](/type/messages.MessageEditData/)
