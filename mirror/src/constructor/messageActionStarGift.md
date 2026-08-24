---
title: "messageActionStarGift"
original: "https://core.telegram.org/constructor/messageActionStarGift"
section: ref
description: "You received a gift, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionStarGift","url":"/constructor/messageActionStarGift/"}]
layout: layout.njk
---

# messageActionStarGift

You received a [gift, see here »](/api/gifts/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionStarGift/" class="current_page_link">messageActionStarGift</a>#ea2c31d3 flags:<a href="/type/%23/">#</a> name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:<a href="/type/StarGift/">StarGift</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> convert_stars:flags.4?<a href="/type/long/">long</a> upgrade_msg_id:flags.5?<a href="/type/int/">int</a> upgrade_stars:flags.8?<a href="/type/long/">long</a> from_id:flags.11?<a href="/type/Peer/">Peer</a> peer:flags.12?<a href="/type/Peer/">Peer</a> saved_id:flags.12?<a href="/type/long/">long</a> prepaid_upgrade_hash:flags.14?<a href="/type/string/">string</a> gift_msg_id:flags.15?<a href="/type/int/">int</a> to_id:flags.18?<a href="/type/Peer/">Peer</a> gift_num:flags.19?<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>name_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the name of the sender of the gift will be hidden if the destination user decides to display the gift on their profile</td></tr><tr><td><strong>saved</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this gift was added to the destination user's profile (may be toggled using <a href="/method/payments.saveStarGift/">payments.saveStarGift</a> and fetched using <a href="/method/payments.getSavedStarGifts/">payments.getSavedStarGifts</a>)</td></tr><tr><td><strong>converted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this gift was converted to <a href="/api/stars/">Telegram Stars</a> and cannot be displayed on the profile anymore.</td></tr><tr><td><strong>upgraded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>This gift was upgraded to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><strong>refunded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>This gift is not available anymore because a request to refund the payment related to this gift was made, and the money was returned.</td></tr><tr><td><strong>can_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>If set, this gift can be <a href="/api/gifts/#upgrade-a-gift-to-a-collectible-gift">upgraded to a collectible gift</a>; can only be set for the receiver of a gift.</td></tr><tr><td><strong>prepaid_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>The sender has already pre-paid for the upgrade of this gift to a collectible gift.</td></tr><tr><td><strong>upgrade_separate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>This service message is the notification of a <a href="/api/gifts/#prepaying-for-someone-else-s-upgrade">separate pre-payment for the upgrade of a gift we own</a>.</td></tr><tr><td><strong>auction_acquired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/constructor/true/">true</a></td><td>If set, this gift was acquired in a <a href="/api/auctions/">collectible gifts auction »</a>.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift/">StarGift</a></td><td>Info about the gift</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Additional message from the sender of the gift</td></tr><tr><td><strong>convert_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/long/">long</a></td><td>The receiver of this gift may convert it to this many Telegram Stars, instead of displaying it on their profile page.<br><code>convert_stars</code> will be equal to <code>stars</code> only if the gift was bought using recently bought Telegram Stars, otherwise it will be less than <code>stars</code>.</td></tr><tr><td><strong>upgrade_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>If set, this gift was <a href="/api/gifts/#upgrade-a-gift-to-a-collectible-gift">upgraded to a collectible gift</a>, and the corresponding <a href="/constructor/messageActionStarGiftUnique/">messageActionStarGiftUnique</a> is available at the specified message ID.</td></tr><tr><td><strong>upgrade_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/long/">long</a></td><td>The number of Telegram Stars the user can pay to <a href="/api/gifts/#collectible-gifts">convert the gift into a collectible gift »</a>.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/Peer/">Peer</a></td><td>Sender of the gift (unset for anonymous gifts).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/Peer/">Peer</a></td><td>Receiver of the gift.</td></tr><tr><td><strong>saved_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/long/">long</a></td><td>For channel gifts, ID to use in <a href="/constructor/inputSavedStarGiftChat/">inputSavedStarGiftChat</a> constructors.</td></tr><tr><td><strong>prepaid_upgrade_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/string/">string</a></td><td><a href="/api/gifts/#prepaying-for-someone-else-s-upgrade">Hash to prepay for a gift upgrade separately »</a>.</td></tr><tr><td><strong>gift_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/int/">int</a></td><td>For <a href="/api/gifts/#prepaying-for-someone-else-s-upgrade">separate upgrades</a>, the identifier of the message with the gift whose upgrade was prepaid (only valid for the receiver of the service message).</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/Peer/">Peer</a></td><td>For gifts acquired in an <a href="/api/auctions/">auction »</a> (i.e. when <code>auction_acquired</code> is set), the peer the gift was assigned to; only present if the target peer is different from the bidder, in which case it will only be present to the messageActionStarGift sent to the bidder, not to the messageActionStarGift sent to the target peer.</td></tr><tr><td><strong>gift_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/type/int/">int</a></td><td>For gifts acquired in an <a href="/api/auctions/">auction »</a>, the collectible number of the won <a href="/api/gifts/#collectible-gifts">collectible gift »</a>; this field is disjoint from <code>auction_acquired</code> because <strong>only</strong> auction collectibles won before this field was introduced in the API will not have this flag set.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [payments.saveStarGift](/method/payments.saveStarGift/)

Display or remove a [received or hosted gift »](/api/gifts/#hosted-collectible-gifts) from our profile.

#### [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

Fetch the full list of [gifts »](/api/gifts/#list-all-received-gifts) owned, received or [hosted »](/api/gifts/#hosted-collectible-gifts) by a peer.

Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

A [gift »](/api/gifts/) was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/)

A gift received by a channel we own.
