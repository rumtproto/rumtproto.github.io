---
title: "premium.getUserBoosts"
original: "https://core.telegram.org/method/premium.getUserBoosts"
section: ref
description: "Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.getUserBoosts","url":"/method/premium.getUserBoosts/"}]
layout: layout.njk
---

# premium.getUserBoosts

Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsList/">premium.boostsList</a>#86f8613c flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> boosts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Boost/">Boost</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/premium.BoostsList/">premium.BoostsList</a>;
---functions---
<a href="/method/premium.getUserBoosts/" class="current_page_link">premium.getUserBoosts</a>#39854d1f peer:<a href="/type/InputPeer/">InputPeer</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/premium.BoostsList/">premium.BoostsList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The channel/supergroup</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user</td></tr></tbody></table>

### Result

[premium.BoostsList](/type/premium.BoostsList/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
