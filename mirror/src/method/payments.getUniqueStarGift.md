---
title: "payments.getUniqueStarGift"
original: "https://core.telegram.org/method/payments.getUniqueStarGift"
section: ref
description: "Obtain info about a collectible gift » using a slug obtained from a collectible gift link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getUniqueStarGift","url":"/method/payments.getUniqueStarGift/"}]
layout: layout.njk
---

# payments.getUniqueStarGift

Obtain info about a [collectible gift »](/api/gifts/#collectible-gifts) using a slug obtained from a [collectible gift link »](/api/links/#collectible-gift-link).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.uniqueStarGift/">payments.uniqueStarGift</a>#416c56e8 gift:<a href="/type/StarGift/">StarGift</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.UniqueStarGift/">payments.UniqueStarGift</a>;
---functions---
<a href="/method/payments.getUniqueStarGift/" class="current_page_link">payments.getUniqueStarGift</a>#a1974d72 slug:<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGift/">payments.UniqueStarGift</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The slug.</td></tr></tbody></table>

### Result

[payments.UniqueStarGift](/type/payments.UniqueStarGift/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>The specified gift slug is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
