---
title: "Premium.MyBoosts"
original: "https://core.telegram.org/type/premium.MyBoosts"
section: ref
description: "A list of peers we are currently boosting, and how many boost slots we have left."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Premium.MyBoosts","url":"/type/premium.MyBoosts/"}]
layout: layout.njk
---

# Premium.MyBoosts

A list of peers we are currently [boosting](/api/boost/), and how many [boost slots](/api/boost/) we have left.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.myBoosts/">premium.myBoosts</a>#9ae228e2 my_boosts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MyBoost/">MyBoost</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/premium.MyBoosts/" class="current_page_link">premium.MyBoosts</a>;

---functions---

<a href="/method/premium.getMyBoosts/">premium.getMyBoosts</a>#be77b4a = <a href="/type/premium.MyBoosts/" class="current_page_link">premium.MyBoosts</a>;
<a href="/method/premium.applyBoost/">premium.applyBoost</a>#6b7da746 flags:<a href="/type/%23/">#</a> slots:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/premium.MyBoosts/" class="current_page_link">premium.MyBoosts</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premium.myBoosts/">premium.myBoosts</a></td><td>A list of peers we are currently <a href="/api/boost/">boosting</a>, and how many <a href="/api/boost/">boost slots</a> we have left.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/premium.getMyBoosts/">premium.getMyBoosts</a></td><td>Obtain which peers are we currently <a href="/api/boost/">boosting</a>, and how many <a href="/api/boost/">boost slots</a> we have left.</td></tr><tr><td><a href="/method/premium.applyBoost/">premium.applyBoost</a></td><td>Apply one or more <a href="/api/boost/">boosts »</a> to a peer.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
