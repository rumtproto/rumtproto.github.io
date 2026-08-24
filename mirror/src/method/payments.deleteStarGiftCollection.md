---
title: "payments.deleteStarGiftCollection"
original: "https://core.telegram.org/method/payments.deleteStarGiftCollection"
section: ref
description: "Delete a star gift collection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.deleteStarGiftCollection","url":"/method/payments.deleteStarGiftCollection/"}]
layout: layout.njk
---

# payments.deleteStarGiftCollection

Delete a [star gift collection »](/api/gifts/#gift-collections).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/payments.deleteStarGiftCollection/" class="current_page_link">payments.deleteStarGiftCollection</a>#ad5648e8 peer:<a href="/type/InputPeer/">InputPeer</a> collection_id:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer that owns the collection.</td></tr><tr><td><strong>collection_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the collection.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
