---
title: "payments.StarGifts"
original: "https://core.telegram.org/type/payments.StarGifts"
section: ref
description: "Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarGifts","url":"/type/payments.StarGifts/"}]
layout: layout.njk
---

# payments.StarGifts

Available [gifts »](/api/gifts/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftsNotModified/">payments.starGiftsNotModified</a>#a388a368 = <a href="/type/payments.StarGifts/" class="current_page_link">payments.StarGifts</a>;
<a href="/constructor/payments.starGifts/">payments.starGifts</a>#2ed82995 hash:<a href="/type/int/">int</a> gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGift/">StarGift</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarGifts/" class="current_page_link">payments.StarGifts</a>;

---functions---

<a href="/method/payments.getStarGifts/">payments.getStarGifts</a>#c4563590 hash:<a href="/type/int/">int</a> = <a href="/type/payments.StarGifts/" class="current_page_link">payments.StarGifts</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftsNotModified/">payments.starGiftsNotModified</a></td><td>The list of available <a href="/api/gifts/">gifts »</a> hasn't changed.</td></tr><tr><td><a href="/constructor/payments.starGifts/">payments.starGifts</a></td><td>Available <a href="/api/gifts/">gifts »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGifts/">payments.getStarGifts</a></td><td>Get a list of available <a href="/api/gifts/">gifts, see here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
