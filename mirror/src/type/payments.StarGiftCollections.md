---
title: "payments.StarGiftCollections"
original: "https://core.telegram.org/type/payments.StarGiftCollections"
section: ref
description: "Represents a list of star gift collections »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarGiftCollections","url":"/type/payments.StarGiftCollections/"}]
layout: layout.njk
---

# payments.StarGiftCollections

Represents a list of [star gift collections »](/api/gifts/#gift-collections).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftCollectionsNotModified/">payments.starGiftCollectionsNotModified</a>#a0ba4f17 = <a href="/type/payments.StarGiftCollections/" class="current_page_link">payments.StarGiftCollections</a>;
<a href="/constructor/payments.starGiftCollections/">payments.starGiftCollections</a>#8a2932f3 collections:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftCollection/">StarGiftCollection</a>&gt; = <a href="/type/payments.StarGiftCollections/" class="current_page_link">payments.StarGiftCollections</a>;

---functions---

<a href="/method/payments.getStarGiftCollections/">payments.getStarGiftCollections</a>#981b91dd peer:<a href="/type/InputPeer/">InputPeer</a> hash:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftCollections/" class="current_page_link">payments.StarGiftCollections</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftCollectionsNotModified/">payments.starGiftCollectionsNotModified</a></td><td>The list of <a href="/api/gifts/#gift-collections">star gift collections »</a> hasn't changed.</td></tr><tr><td><a href="/constructor/payments.starGiftCollections/">payments.starGiftCollections</a></td><td>Represents a list of <a href="/api/gifts/#gift-collections">star gift collections »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftCollections/">payments.getStarGiftCollections</a></td><td>Fetches all <a href="/api/gifts/#gift-collections">star gift collections »</a> of a peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
