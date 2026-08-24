---
title: "StarGiftCollection"
original: "https://core.telegram.org/type/StarGiftCollection"
section: ref
description: "Represents a star gift collection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftCollection","url":"/type/StarGiftCollection/"}]
layout: layout.njk
---

# StarGiftCollection

Represents a [star gift collection »](/api/gifts/#gift-collections).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftCollection/">starGiftCollection</a>#9d6b13b0 flags:<a href="/type/%23/">#</a> collection_id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> icon:flags.0?<a href="/type/Document/">Document</a> gifts_count:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/StarGiftCollection/" class="current_page_link">StarGiftCollection</a>;

---functions---

<a href="/method/payments.createStarGiftCollection/">payments.createStarGiftCollection</a>#1f4a0e87 peer:<a href="/type/InputPeer/">InputPeer</a> title:<a href="/type/string/">string</a> stargift:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; = <a href="/type/StarGiftCollection/" class="current_page_link">StarGiftCollection</a>;
<a href="/method/payments.updateStarGiftCollection/">payments.updateStarGiftCollection</a>#4fddbee7 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> collection_id:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> delete_stargift:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; add_stargift:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; order:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; = <a href="/type/StarGiftCollection/" class="current_page_link">StarGiftCollection</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftCollection/">starGiftCollection</a></td><td>Represents a <a href="/api/gifts/#gift-collections">star gift collection »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.createStarGiftCollection/">payments.createStarGiftCollection</a></td><td>Create a <a href="/api/gifts/#gift-collections">star gift collection »</a>.</td></tr><tr><td><a href="/method/payments.updateStarGiftCollection/">payments.updateStarGiftCollection</a></td><td>Add or remove gifts from a <a href="/api/gifts/#gift-collections">star gift collection »</a>, or rename the collection.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
