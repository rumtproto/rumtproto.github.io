---
title: "starsTransaction"
original: "https://core.telegram.org/constructor/starsTransaction"
section: ref
description: "Represents a Telegram Stars or TON transaction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsTransaction","url":"/constructor/starsTransaction/"}]
layout: layout.njk
---

# starsTransaction

Represents a [Telegram Stars or TON transaction »](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsTransaction/" class="current_page_link">starsTransaction</a>#13659eb0 flags:<a href="/type/%23/">#</a> refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:<a href="/type/string/">string</a> amount:<a href="/type/StarsAmount/">StarsAmount</a> date:<a href="/type/int/">int</a> peer:<a href="/type/StarsTransactionPeer/">StarsTransactionPeer</a> title:flags.0?<a href="/type/string/">string</a> description:flags.1?<a href="/type/string/">string</a> photo:flags.2?<a href="/type/WebDocument/">WebDocument</a> transaction_date:flags.5?<a href="/type/int/">int</a> transaction_url:flags.5?<a href="/type/string/">string</a> bot_payload:flags.7?<a href="/type/bytes/">bytes</a> msg_id:flags.8?<a href="/type/int/">int</a> extended_media:flags.9?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageMedia/">MessageMedia</a>&gt; subscription_period:flags.12?<a href="/type/int/">int</a> giveaway_post_id:flags.13?<a href="/type/int/">int</a> stargift:flags.14?<a href="/type/StarGift/">StarGift</a> floodskip_number:flags.15?<a href="/type/int/">int</a> starref_commission_permille:flags.16?<a href="/type/int/">int</a> starref_peer:flags.17?<a href="/type/Peer/">Peer</a> starref_amount:flags.17?<a href="/type/StarsAmount/">StarsAmount</a> paid_messages:flags.19?<a href="/type/int/">int</a> premium_gift_months:flags.20?<a href="/type/int/">int</a> ads_proceeds_from_date:flags.23?<a href="/type/int/">int</a> ads_proceeds_to_date:flags.23?<a href="/type/int/">int</a> = <a href="/type/StarsTransaction/">StarsTransaction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>refund</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this transaction is a refund.</td></tr><tr><td><strong>pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>The transaction is currently pending.</td></tr><tr><td><strong>failed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>This transaction has failed.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>This transaction was a gift from the user in <code>peer.peer</code>.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>This transaction is a <a href="/api/reactions/#paid-reactions">paid reaction »</a>.</td></tr><tr><td><strong>stargift_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/constructor/true/">true</a></td><td>This transaction pays for the upgrade of a gift to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><strong>business_transfer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/constructor/true/">true</a></td><td>This transaction transfers stars from the balance of a user account <a href="/api/bots/connected-business-bots/">connected to a business bot</a>, to the balance of the business bot, see <a href="/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot">here »</a> for more info.</td></tr><tr><td><strong>stargift_resale</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.22?<a href="/constructor/true/">true</a></td><td>This transaction is related to the <a href="/api/gifts/#reselling-collectible-gifts">resale of a collectible gift »</a>.</td></tr><tr><td><strong>posts_search</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.24?<a href="/constructor/true/">true</a></td><td>Represents payment for a <a href="/api/search/#posts-tab">paid global post search »</a>.</td></tr><tr><td><strong>stargift_prepaid_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/constructor/true/">true</a></td><td>Represents payment for a <a href="/api/gifts/#prepaying-for-someone-else-s-upgrade">separate prepaid upgrade of a gift</a>.</td></tr><tr><td><strong>stargift_drop_original_details</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.26?<a href="/constructor/true/">true</a></td><td>Represents payment for the removal of the <a href="/constructor/starGiftAttributeOriginalDetails/">starGiftAttributeOriginalDetails</a> attribute from a gift, see <a href="/api/gifts/#dropping-the-original-details-of-an-upgraded-gift">here »</a> for the full flow.</td></tr><tr><td><strong>phonegroup_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.27?<a href="/constructor/true/">true</a></td><td>Represents payment for a paid text message sent during a <a href="/api/group-calls/">group call or live video stream »</a>.</td></tr><tr><td><strong>stargift_auction_bid</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/constructor/true/">true</a></td><td>Represents payment for placing a <a href="/api/auctions/">collectible gift auction bid »</a>.</td></tr><tr><td><strong>offer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.29?<a href="/constructor/true/">true</a></td><td>Represents payment for a <a href="/api/gifts/#collectible-gift-purchase-offers">collectible gift purchase offer »</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Transaction ID.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Amount of Telegram Stars or TON.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of the transaction (unixtime).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/StarsTransactionPeer/">StarsTransactionPeer</a></td><td>Source of the incoming transaction, or its recipient for outgoing transactions.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>For transactions with bots, title of the bought product.</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>For transactions with bots, description of the bought product.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/WebDocument/">WebDocument</a></td><td>For transactions with bots, photo of the bought product.</td></tr><tr><td><strong>transaction_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>If neither <code>pending</code> nor <code>failed</code> are set, the transaction was completed successfully, and this field will contain the point in time (Unix timestamp) when the withdrawal was completed successfully.</td></tr><tr><td><strong>transaction_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>If neither <code>pending</code> nor <code>failed</code> are set, the transaction was completed successfully, and this field will contain a URL where the withdrawal transaction can be viewed.</td></tr><tr><td><strong>bot_payload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/bytes/">bytes</a></td><td>Bot specified invoice payload (i.e. the <code>payload</code> passed to <a href="/constructor/inputMediaInvoice/">inputMediaInvoice</a> when <a href="/api/payments/">creating the invoice</a>).</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/int/">int</a></td><td>For <a href="/api/paid-media/">paid media transactions »</a>, message ID of the paid media posted to <code>peer.peer</code> (can point to a deleted message; either way, <code>extended_media</code> will always contain the bought media).</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageMedia/">MessageMedia</a>&gt;</td><td>The purchased <a href="/api/paid-media/">paid media »</a>.</td></tr><tr><td><strong>subscription_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/int/">int</a></td><td>The number of seconds between consecutive Telegram Star debiting for <a href="/api/stars/#star-subscriptions">Telegram Star subscriptions »</a>.</td></tr><tr><td><strong>giveaway_post_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/int/">int</a></td><td>ID of the message containing the <a href="/constructor/messageMediaGiveaway/">messageMediaGiveaway</a>, for incoming <a href="/api/giveaways/#star-giveaways">star giveaway prizes</a>.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/StarGift/">StarGift</a></td><td>This transaction indicates a purchase or a sale (conversion back to Stars) of a <a href="/api/stars/">gift »</a>.</td></tr><tr><td><strong>floodskip_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/int/">int</a></td><td>This transaction is payment for <a href="https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">paid bot broadcasts</a>.<br>Paid broadcasts are only allowed if the <code>allow_paid_floodskip</code> parameter of <a href="/method/messages.sendMessage/">messages.sendMessage</a> and other message sending methods is set while trying to broadcast more than 30 messages per second to bot users.<br>The integer value returned by this flag indicates the number of billed API calls.</td></tr><tr><td><strong>starref_commission_permille</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/int/">int</a></td><td>This transaction is the receival (or refund) of an <a href="/api/bots/referrals/">affiliate commission</a> (i.e. this is the transaction received by the peer that created the <a href="/api/links/#referral-links">referral link</a>, flag 17 is for transactions made by users that imported the referral link).</td></tr><tr><td><strong>starref_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/Peer/">Peer</a></td><td>For transactions made by <a href="/api/bots/referrals/">referred users</a>, the peer that received the affiliate commission.</td></tr><tr><td><strong>starref_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/StarsAmount/">StarsAmount</a></td><td>For transactions made by <a href="/api/bots/referrals/">referred users</a>, the amount of Telegram Stars received by the affiliate, can be negative for refunds.</td></tr><tr><td><strong>paid_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/type/int/">int</a></td><td>This transaction is related to the reception or transmission of a <a href="/api/paid-messages/">paid message »</a>.</td></tr><tr><td><strong>premium_gift_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/type/int/">int</a></td><td>This transaction indicates the payment for a <a href="/api/premium/#gifting-telegram-premium">gifted Telegram Premium subscription »</a>.</td></tr><tr><td><strong>ads_proceeds_from_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/type/int/">int</a></td><td>Indicates that this is payment for ad revenue from the specified unixtime (always set together with <strong>ads_proceeds_to_date</strong>).</td></tr><tr><td><strong>ads_proceeds_to_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/type/int/">int</a></td><td>Indicates that this is payment for ad revenue to the specified unixtime.</td></tr></tbody></table>

### Type

[StarsTransaction](/type/StarsTransaction/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](/api/gifts/), before it was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [inputMediaInvoice](/constructor/inputMediaInvoice/)

Generated invoice of a [bot payment](https://core.telegram.org/bots/payments)

#### [Payments API](/api/payments/)

You can accept payments from Telegram users via Telegram Bots.

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Contains info about a [giveaway, see here »](/api/giveaways/) for more info.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Bots FAQ](https://core.telegram.org/bots/faq)

#### [messages.sendMessage](/method/messages.sendMessage/)

Sends a message to a chat

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
