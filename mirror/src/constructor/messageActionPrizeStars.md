---
title: "messageActionPrizeStars"
original: "https://core.telegram.org/constructor/messageActionPrizeStars"
section: ref
description: "You won some Telegram Stars in a Telegram Star giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPrizeStars","url":"/constructor/messageActionPrizeStars/"}]
layout: layout.njk
---

# messageActionPrizeStars

You won some [Telegram Stars](/api/stars/) in a [Telegram Star giveaway »](/api/giveaways/#star-giveaways).

This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](/api/stickers/#stickersets):

-   If `stars <= 1000`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   If `stars < 2500`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"
-   Otherwise, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/34E283A3.png" width="20" height="20" alt="4️⃣">"

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPrizeStars/" class="current_page_link">messageActionPrizeStars</a>#b00c47a2 flags:<a href="/type/%23/">#</a> unclaimed:flags.0?true stars:<a href="/type/long/">long</a> transaction_id:<a href="/type/string/">string</a> boost_peer:<a href="/type/Peer/">Peer</a> giveaway_msg_id:<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unclaimed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, this indicates the reverse transaction that refunds the remaining stars to the creator of a giveaway if, when the giveaway ends, the number of members in the channel is smaller than the number of winners in the giveaway.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of Telegram Stars you won</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>ID of the telegram star transaction.</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Identifier of the peer that was automatically boosted by the winners of the giveaway.</td></tr><tr><td><strong>giveaway_msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message containing the <a href="/constructor/messageMediaGiveaway/">messageMediaGiveaway</a></td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Contains info about a [giveaway, see here »](/api/giveaways/) for more info.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Stickers to show when receiving a gifted Telegram Premium subscription

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
