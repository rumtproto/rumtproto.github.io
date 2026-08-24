---
title: "payments.UniqueStarGift"
original: "https://core.telegram.org/type/payments.UniqueStarGift"
section: ref
description: "Represents a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.UniqueStarGift","url":"/type/payments.UniqueStarGift/"}]
layout: layout.njk
---

# payments.UniqueStarGift

Represents a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.uniqueStarGift/">payments.uniqueStarGift</a>#416c56e8 gift:<a href="/type/StarGift/">StarGift</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.UniqueStarGift/" class="current_page_link">payments.UniqueStarGift</a>;

---functions---

<a href="/method/payments.getUniqueStarGift/">payments.getUniqueStarGift</a>#a1974d72 slug:<a href="/type/string/">string</a> = <a href="/type/payments.UniqueStarGift/" class="current_page_link">payments.UniqueStarGift</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.uniqueStarGift/">payments.uniqueStarGift</a></td><td>Represents a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getUniqueStarGift/">payments.getUniqueStarGift</a></td><td>Obtain info about a <a href="/api/gifts/#collectible-gifts">collectible gift »</a> using a slug obtained from a <a href="/api/links/#collectible-gift-link">collectible gift link »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
