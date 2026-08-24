---
title: "SavedStarGift"
original: "https://core.telegram.org/type/SavedStarGift"
section: ref
description: "Represents a gift owned by a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SavedStarGift","url":"/type/SavedStarGift/"}]
layout: layout.njk
---

# SavedStarGift

Represents a [gift](/api/gifts/) owned by a peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/savedStarGift/">savedStarGift</a>#41df43fc flags:<a href="/type/%23/">#</a> name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> gift:<a href="/type/StarGift/">StarGift</a> message:flags.2?<a href="/type/TextWithEntities/">TextWithEntities</a> msg_id:flags.3?<a href="/type/int/">int</a> saved_id:flags.11?<a href="/type/long/">long</a> convert_stars:flags.4?<a href="/type/long/">long</a> upgrade_stars:flags.6?<a href="/type/long/">long</a> can_export_at:flags.7?<a href="/type/int/">int</a> transfer_stars:flags.8?<a href="/type/long/">long</a> can_transfer_at:flags.13?<a href="/type/int/">int</a> can_resell_at:flags.14?<a href="/type/int/">int</a> collection_id:flags.15?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; prepaid_upgrade_hash:flags.16?<a href="/type/string/">string</a> drop_original_details_stars:flags.18?<a href="/type/long/">long</a> gift_num:flags.19?<a href="/type/int/">int</a> can_craft_at:flags.20?<a href="/type/int/">int</a> = <a href="/type/SavedStarGift/" class="current_page_link">SavedStarGift</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/savedStarGift/">savedStarGift</a></td><td>Represents a <a href="/api/gifts/">gift</a> owned by a peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
