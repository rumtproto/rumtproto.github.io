---
title: "payments.sendStarGiftOffer"
original: "https://core.telegram.org/method/payments.sendStarGiftOffer"
section: ref
description: "Send an offer to purchase a collectible gift », see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.sendStarGiftOffer","url":"/method/payments.sendStarGiftOffer/"}]
layout: layout.njk
---

# payments.sendStarGiftOffer

Send an offer to purchase a [collectible gift »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/payments.sendStarGiftOffer/" class="current_page_link">payments.sendStarGiftOffer</a>#8fb86b41 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> slug:<a href="/type/string/">string</a> price:<a href="/type/StarsAmount/">StarsAmount</a> duration:<a href="/type/int/">int</a> random_id:<a href="/type/long/">long</a> allow_paid_stars:flags.0?<a href="/type/long/">long</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Owner of the collectible gift: equal to <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>owner_id</code>.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Identifier of the collectible gift: equal to <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>slug</code>.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Offer price, in stars or TON.</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of the offer, in seconds: must be one of <code>21600</code>, <code>43200</code>, <code>86400</code>, <code>129600</code>, <code>172800</code>, or <code>259200</code>; can also be <code>120</code> in test mode.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random 64-bit identifier used to avoid sending the same offer twice in case of network issues. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>If the destination peer has <a href="/api/paid-messages/">paid messages »</a> enabled, specifies the amount of <a href="/api/stars/">Telegram Stars</a> the sending user has agreed to pay in order to send the offer (in addition to the amount for the offer itself, contained in <code>price</code>).</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>INPUT_STARS_AMOUNT_INVALID</td><td>The specified offer amount in stars is invalid, see <a href="/api/gifts/#collectible-gift-purchase-offers">here&nbsp;»</a> for the allowed range.</td></tr><tr><td>400</td><td>INPUT_STARS_NANOS_INVALID</td><td>The specified offer amount in nanotons is invalid, see <a href="/api/gifts/#collectible-gift-purchase-offers">here&nbsp;»</a> for the allowed range.</td></tr><tr><td>400</td><td>INVOICE_INVALID</td><td>The specified invoice is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>RESELL_STARS_TOO_FEW</td><td>The offered price is too low.</td></tr><tr><td>400</td><td>RESELL_STARS_TOO_MUCH</td><td>The offered price is too high.</td></tr><tr><td>400</td><td>STARGIFT_OFFER_INVALID</td><td>The specified offer amount is invalid.</td></tr><tr><td>400</td><td>STARGIFT_OFFER_NOT_ALLOWED</td><td>You can't send a purchase offer for this gift.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>The specified gift slug is invalid.</td></tr></tbody></table>

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
