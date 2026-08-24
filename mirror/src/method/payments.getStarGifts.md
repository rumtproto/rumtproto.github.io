---
title: "payments.getStarGifts"
original: "https://core.telegram.org/method/payments.getStarGifts"
section: ref
description: "Get a list of available gifts, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGifts","url":"/method/payments.getStarGifts/"}]
layout: layout.njk
---

# payments.getStarGifts

Get a list of available [gifts, see here »](/api/gifts/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftsNotModified/">payments.starGiftsNotModified</a>#a388a368 = <a href="/type/payments.StarGifts/">payments.StarGifts</a>;
<a href="/constructor/payments.starGifts/">payments.starGifts</a>#2ed82995 hash:<a href="/type/int/">int</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGift/">StarGift</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarGifts/">payments.StarGifts</a>;
---functions---
<a href="/method/payments.getStarGifts/" class="current_page_link">payments.getStarGifts</a>#c4563590 hash:<a href="/type/int/">int</a> = <a href="/type/payments.StarGifts/">payments.StarGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.<br>The hash may be generated locally by using the <code>id</code>s of the returned or stored sticker <a href="/constructor/starGift/">starGift</a>s.</td></tr></tbody></table>

### Result

[payments.StarGifts](/type/payments.StarGifts/)

### Both users and bots can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
