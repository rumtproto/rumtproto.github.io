---
title: "payments.updateStarGiftCollection"
original: "https://core.telegram.org/method/payments.updateStarGiftCollection"
section: ref
description: "Add or remove gifts from a star gift collection », or rename the collection."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.updateStarGiftCollection","url":"/method/payments.updateStarGiftCollection/"}]
layout: layout.njk
---

# payments.updateStarGiftCollection

Add or remove gifts from a [star gift collection »](/api/gifts/#gift-collections), or rename the collection.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftCollection/">starGiftCollection</a>#9d6b13b0 flags:<a href="/type/%23/">#</a> collection_id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> icon:flags.0?<a href="/type/Document/">Document</a> gifts_count:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/StarGiftCollection/">StarGiftCollection</a>;
---functions---
<a href="/method/payments.updateStarGiftCollection/" class="current_page_link">payments.updateStarGiftCollection</a>#4fddbee7 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> collection_id:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> delete_stargift:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; add_stargift:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; order:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt; = <a href="/type/StarGiftCollection/">StarGiftCollection</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer that owns the collection.</td></tr><tr><td><strong>collection_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Collection ID.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Title of the collection, to rename the collection.</td></tr><tr><td><strong>delete_stargift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt;</td><td>Can contain a list of gifts to remove from the collection.</td></tr><tr><td><strong>add_stargift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt;</td><td>Can contain a list of gifts to add to the collection.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSavedStarGift/">InputSavedStarGift</a>&gt;</td><td>Can contain the new gift order.</td></tr></tbody></table>

### Result

[StarGiftCollection](/type/StarGiftCollection/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
