---
title: "StarsTransaction"
original: "https://core.telegram.org/type/StarsTransaction"
section: ref
description: "Represents a Telegram Stars transaction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsTransaction","url":"/type/StarsTransaction/"}]
layout: layout.njk
---

# StarsTransaction

Represents a [Telegram Stars transaction »](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsTransaction/">starsTransaction</a>#13659eb0 flags:<a href="/type/%23/">#</a> refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:<a href="/type/string/">string</a> amount:<a href="/type/StarsAmount/">StarsAmount</a> date:<a href="/type/int/">int</a> peer:<a href="/type/StarsTransactionPeer/">StarsTransactionPeer</a> title:flags.0?<a href="/type/string/">string</a> description:flags.1?<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> transaction_date:flags.5?<a href="/type/int/">int</a> transaction_url:flags.5?<a href="/type/string/">string</a> bot_payload:flags.7?<a href="/type/bytes/">bytes</a> msg_id:flags.8?<a href="/type/int/">int</a> extended_media:flags.9?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageMedia/">MessageMedia</a>&gt; subscription_period:flags.12?<a href="/type/int/">int</a> giveaway_post_id:flags.13?<a href="/type/int/">int</a> stargift:flags.14?<a href="/type/StarGift/">StarGift</a> floodskip_number:flags.15?<a href="/type/int/">int</a> starref_commission_permille:flags.16?<a href="/type/int/">int</a> starref_peer:flags.17?<a href="/type/Peer/">Peer</a> starref_amount:flags.17?<a href="/type/StarsAmount/">StarsAmount</a> paid_messages:flags.19?<a href="/type/int/">int</a> premium_gift_months:flags.20?<a href="/type/int/">int</a> ads_proceeds_from_date:flags.23?<a href="/type/int/">int</a> ads_proceeds_to_date:flags.23?<a href="/type/int/">int</a> = <a href="/type/StarsTransaction/" class="current_page_link">StarsTransaction</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsTransaction/">starsTransaction</a></td><td>Represents a <a href="/api/stars/">Telegram Stars or TON transaction »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
