---
title: "premium.getBoostsList"
original: "https://core.telegram.org/method/premium.getBoostsList"
section: ref
description: "Obtains info about the boosts that were applied to a certain channel or supergroup (admins only)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.getBoostsList","url":"/method/premium.getBoostsList/"}]
layout: layout.njk
---

# premium.getBoostsList

Obtains info about the boosts that were applied to a certain channel or supergroup (admins only)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsList/">premium.boostsList</a>#86f8613c flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> boosts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Boost/">Boost</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/premium.BoostsList/">premium.BoostsList</a>;
---functions---
<a href="/method/premium.getBoostsList/" class="current_page_link">premium.getBoostsList</a>#60f67660 flags:<a href="/type/%23/">#</a> gifts:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/premium.BoostsList/">premium.BoostsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to return only info about boosts received from <a href="/api/giveaways/">gift codes and giveaways created by the channel/supergroup »</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The channel/supergroup</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for pagination, obtained from <a href="/constructor/premium.boostsList/">premium.boostsList</a>.<code>next_offset</code></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[premium.BoostsList](/type/premium.BoostsList/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [premium.boostsList](/constructor/premium.boostsList/)

List of [boosts](/api/boost/) that were applied to a peer by multiple users.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
