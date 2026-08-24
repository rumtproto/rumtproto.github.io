---
title: "StarGiftAttribute"
original: "https://core.telegram.org/type/StarGiftAttribute"
section: ref
description: "An attribute of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftAttribute","url":"/type/StarGiftAttribute/"}]
layout: layout.njk
---

# StarGiftAttribute

An attribute of a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAttributeModel/">starGiftAttributeModel</a>#565251e2 flags:<a href="/type/%23/">#</a> crafted:flags.0?true name:<a href="/type/string/">string</a> document:<a href="/type/Document/">Document</a> rarity:<a href="/type/StarGiftAttributeRarity/">StarGiftAttributeRarity</a> = <a href="/type/StarGiftAttribute/" class="current_page_link">StarGiftAttribute</a>;
<a href="/constructor/starGiftAttributePattern/">starGiftAttributePattern</a>#4e7085ea name:<a href="/type/string/">string</a> document:<a href="/type/Document/">Document</a> rarity:<a href="/type/StarGiftAttributeRarity/">StarGiftAttributeRarity</a> = <a href="/type/StarGiftAttribute/" class="current_page_link">StarGiftAttribute</a>;
<a href="/constructor/starGiftAttributeBackdrop/">starGiftAttributeBackdrop</a>#9f2504e4 name:<a href="/type/string/">string</a> backdrop_id:<a href="/type/int/">int</a> center_color:<a href="/type/int/">int</a> edge_color:<a href="/type/int/">int</a> pattern_color:<a href="/type/int/">int</a> text_color:<a href="/type/int/">int</a> rarity:<a href="/type/StarGiftAttributeRarity/">StarGiftAttributeRarity</a> = <a href="/type/StarGiftAttribute/" class="current_page_link">StarGiftAttribute</a>;
<a href="/constructor/starGiftAttributeOriginalDetails/">starGiftAttributeOriginalDetails</a>#e0bff26c flags:<a href="/type/%23/">#</a> sender_id:flags.0?<a href="/type/Peer/">Peer</a> recipient_id:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/StarGiftAttribute/" class="current_page_link">StarGiftAttribute</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAttributeModel/">starGiftAttributeModel</a></td><td>The model of a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributePattern/">starGiftAttributePattern</a></td><td>A <a href="/api/stickers/">sticker</a> applied on the backdrop of a <a href="/api/gifts/">collectible gift »</a> using a repeating pattern.</td></tr><tr><td><a href="/constructor/starGiftAttributeBackdrop/">starGiftAttributeBackdrop</a></td><td>The backdrop of a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributeOriginalDetails/">starGiftAttributeOriginalDetails</a></td><td>Info about the sender, receiver and message attached to the original <a href="/api/gifts/">gift »</a>, before it was upgraded to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
