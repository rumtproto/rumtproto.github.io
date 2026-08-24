---
title: "StarGift"
original: "https://core.telegram.org/type/StarGift"
section: ref
description: "Represents a star gift, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGift","url":"/type/StarGift/"}]
layout: layout.njk
---

# StarGift

Represents a [star gift, see here »](/api/gifts/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGift/">starGift</a>#313a9547 flags:<a href="/type/%23/">#</a> limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:<a href="/type/long/">long</a> sticker:<a href="/type/Document/">Document</a> stars:<a href="/type/long/">long</a> availability_remains:flags.0?<a href="/type/int/">int</a> availability_total:flags.0?<a href="/type/int/">int</a> availability_resale:flags.4?<a href="/type/long/">long</a> convert_stars:<a href="/type/long/">long</a> first_sale_date:flags.1?<a href="/type/int/">int</a> last_sale_date:flags.1?<a href="/type/int/">int</a> upgrade_stars:flags.3?<a href="/type/long/">long</a> resell_min_stars:flags.4?<a href="/type/long/">long</a> title:flags.5?<a href="/type/string/">string</a> released_by:flags.6?<a href="/type/Peer/">Peer</a> per_user_total:flags.8?<a href="/type/int/">int</a> per_user_remains:flags.8?<a href="/type/int/">int</a> locked_until_date:flags.9?<a href="/type/int/">int</a> auction_slug:flags.11?<a href="/type/string/">string</a> gifts_per_round:flags.11?<a href="/type/int/">int</a> auction_start_date:flags.11?<a href="/type/int/">int</a> upgrade_variants:flags.12?<a href="/type/int/">int</a> background:flags.13?<a href="/type/StarGiftBackground/">StarGiftBackground</a> = <a href="/type/StarGift/" class="current_page_link">StarGift</a>;
<a href="/constructor/starGiftUnique/">starGiftUnique</a>#85f0a9cd flags:<a href="/type/%23/">#</a> require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:<a href="/type/long/">long</a> gift_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> slug:<a href="/type/string/">string</a> num:<a href="/type/int/">int</a> owner_id:flags.0?<a href="/type/Peer/">Peer</a> owner_name:flags.1?<a href="/type/string/">string</a> owner_address:flags.2?<a href="/type/string/">string</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; availability_issued:<a href="/type/int/">int</a> availability_total:<a href="/type/int/">int</a> gift_address:flags.3?<a href="/type/string/">string</a> resell_amount:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsAmount/">StarsAmount</a>&gt; released_by:flags.5?<a href="/type/Peer/">Peer</a> value_amount:flags.8?<a href="/type/long/">long</a> value_currency:flags.8?<a href="/type/string/">string</a> value_usd_amount:flags.8?<a href="/type/long/">long</a> theme_peer:flags.10?<a href="/type/Peer/">Peer</a> peer_color:flags.11?<a href="/type/PeerColor/">PeerColor</a> host_id:flags.12?<a href="/type/Peer/">Peer</a> offer_min_stars:flags.13?<a href="/type/int/">int</a> craft_chance_permille:flags.16?<a href="/type/int/">int</a> = <a href="/type/StarGift/" class="current_page_link">StarGift</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGift/">starGift</a></td><td>Represents a <a href="/api/gifts/">star gift, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/starGiftUnique/">starGiftUnique</a></td><td>Represents a <a href="/api/gifts/#collectible-gifts">collectible star gift, see here »</a> for more info.<br><br>The sticker that represents the gift is contained in a <a href="/constructor/starGiftAttributeModel/">starGiftAttributeModel</a> object in <code>attributes</code>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
