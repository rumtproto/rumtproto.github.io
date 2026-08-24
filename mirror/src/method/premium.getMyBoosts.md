---
title: "premium.getMyBoosts"
original: "https://core.telegram.org/method/premium.getMyBoosts"
section: ref
description: "Obtain which peers are we currently boosting, and how many boost slots we have left."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.getMyBoosts","url":"/method/premium.getMyBoosts/"}]
layout: layout.njk
---

# premium.getMyBoosts

Obtain which peers are we currently [boosting](/api/boost/), and how many [boost slots](/api/boost/) we have left.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.myBoosts/">premium.myBoosts</a>#9ae228e2 my_boosts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MyBoost/">MyBoost</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/premium.MyBoosts/">premium.MyBoosts</a>;
---functions---
<a href="/method/premium.getMyBoosts/" class="current_page_link">premium.getMyBoosts</a>#be77b4a = <a href="/type/premium.MyBoosts/">premium.MyBoosts</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[premium.MyBoosts](/type/premium.MyBoosts/)

### Only users can use this method

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
