---
title: "premium.boostsList"
original: "https://core.telegram.org/constructor/premium.boostsList"
section: ref
description: "List of boosts that were applied to a peer by multiple users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"premium.boostsList","url":"/constructor/premium.boostsList/"}]
layout: layout.njk
---

# premium.boostsList

List of [boosts](/api/boost/) that were applied to a peer by multiple users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsList/" class="current_page_link">premium.boostsList</a>#86f8613c flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> boosts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Boost/">Boost</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/premium.BoostsList/">premium.BoostsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Boost/">Boost</a>&gt;</td><td><a href="/api/boost/">Boosts</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset that can be used for <a href="/api/offsets/">pagination</a>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[premium.BoostsList](/type/premium.BoostsList/)

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
