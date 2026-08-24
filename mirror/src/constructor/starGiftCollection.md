---
title: "starGiftCollection"
original: "https://core.telegram.org/constructor/starGiftCollection"
section: ref
description: "Represents a star gift collection »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftCollection","url":"/constructor/starGiftCollection/"}]
layout: layout.njk
---

# starGiftCollection

Represents a [star gift collection »](/api/gifts/#gift-collections).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftCollection/" class="current_page_link">starGiftCollection</a>#9d6b13b0 flags:<a href="/type/%23/">#</a> collection_id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> icon:flags.0?<a href="/type/Document/">Document</a> gifts_count:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/StarGiftCollection/">StarGiftCollection</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>collection_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The ID of the collection.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of the collection.</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Document/">Document</a></td><td>Optional icon for the collection, taken from the first gift in the collection.</td></tr><tr><td><strong>gifts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of gifts in the collection.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Field to use <strong>instead of <code>collection_id</code></strong> when generating the hash to pass to <a href="/method/payments.getStarGiftCollections/">payments.getStarGiftCollections</a>.</td></tr></tbody></table>

### Type

[StarGiftCollection](/type/StarGiftCollection/)

### Related pages

#### [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/)

Fetches all [star gift collections »](/api/gifts/#gift-collections) of a peer.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
