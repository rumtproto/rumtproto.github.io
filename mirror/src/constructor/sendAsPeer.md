---
title: "sendAsPeer"
original: "https://core.telegram.org/constructor/sendAsPeer"
section: ref
description: "Indicates a peer that can be used to send messages"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"sendAsPeer","url":"/constructor/sendAsPeer/"}]
layout: layout.njk
---

# sendAsPeer

Indicates a peer that can be used to send messages

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sendAsPeer/" class="current_page_link">sendAsPeer</a>#b81c7034 flags:<a href="/type/%23/">#</a> premium_required:flags.0?true peer:<a href="/type/Peer/">Peer</a> = <a href="/type/SendAsPeer/">SendAsPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>premium_required</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether a Telegram Premium account is required to send messages as this peer</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer</td></tr></tbody></table>

### Type

[SendAsPeer](/type/SendAsPeer/)
