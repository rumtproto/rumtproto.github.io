---
title: "Premium.BoostsList"
original: "https://core.telegram.org/type/premium.BoostsList"
section: ref
description: "List of boosts that were applied to a peer by multiple users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Premium.BoostsList","url":"/type/premium.BoostsList/"}]
layout: layout.njk
---

# Premium.BoostsList

List of [boosts](/api/boost/) that were applied to a peer by multiple users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsList/">premium.boostsList</a>#86f8613c flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> boosts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Boost/">Boost</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/premium.BoostsList/" class="current_page_link">premium.BoostsList</a>;

---functions---

<a href="/method/premium.getBoostsList/">premium.getBoostsList</a>#60f67660 flags:<a href="/type/%23/">#</a> gifts:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/premium.BoostsList/" class="current_page_link">premium.BoostsList</a>;
<a href="/method/premium.getUserBoosts/">premium.getUserBoosts</a>#39854d1f peer:<a href="/type/InputPeer/">InputPeer</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/premium.BoostsList/" class="current_page_link">premium.BoostsList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premium.boostsList/">premium.boostsList</a></td><td>List of <a href="/api/boost/">boosts</a> that were applied to a peer by multiple users.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/premium.getBoostsList/">premium.getBoostsList</a></td><td>Obtains info about the boosts that were applied to a certain channel or supergroup (admins only)</td></tr><tr><td><a href="/method/premium.getUserBoosts/">premium.getUserBoosts</a></td><td>Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
