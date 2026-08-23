---
title: "starsTransaction (конструктор)"
original: "https://core.telegram.org/constructor/starsTransaction"
section: ref
kind: constructor
layout: layout.njk
---

# starsTransaction

*Конструктор из схемы TL.*

> Represents a [Telegram Stars or TON transaction »](https://core.telegram.org/api/stars).

## Определение TL

```
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| refund | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this transaction is a refund. |
| pending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | The transaction is currently pending. |
| failed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | This transaction has failed. |
| gift | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | This transaction was a gift from the user in peer.peer. |
| reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | This transaction is a [paid reaction »](https://core.telegram.org/api/reactions#paid-reactions). |
| stargift_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[true](/constructor/true/) | This transaction pays for the upgrade of a gift to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |
| business_transfer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[true](/constructor/true/) | This transaction transfers stars from the balance of a user account [connected to a business bot](https://core.telegram.org/api/bots/connected-business-bots), to the balance of the business bot, see [here »](https://core.telegram.org/api/stars#transferring-stars-from-a-business-account-to-the-business-bot) for more info. |
| stargift_resale | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[true](/constructor/true/) | This transaction is related to the [resale of a collectible gift »](https://core.telegram.org/api/gifts#reselling-collectible-gifts). |
| posts_search | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[true](/constructor/true/) | Represents payment for a [paid global post search »](https://core.telegram.org/api/search#posts-tab). |
| stargift_prepaid_upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[true](/constructor/true/) | Represents payment for a [separate prepaid upgrade of a gift](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade). |
| stargift_drop_original_details | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[true](/constructor/true/) | Represents payment for the removal of the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute from a gift, see [here »](https://core.telegram.org/api/gifts#dropping-the-original-details-of-an-upgraded-gift) for the full flow. |
| phonegroup_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[true](/constructor/true/) | Represents payment for a paid text message sent during a [group call or live video stream »](https://core.telegram.org/api/group-calls). |
| stargift_auction_bid | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[true](/constructor/true/) | Represents payment for placing a [collectible gift auction bid »](https://core.telegram.org/api/auctions). |
| offer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).29?[true](/constructor/true/) | Represents payment for a [collectible gift purchase offer »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers). |
| id | [string](/type/string/) | Transaction ID. |
| amount | [StarsAmount](/type/StarsAmount/) | Amount of Telegram Stars or TON. |
| date | [int](/type/int/) | Date of the transaction (unixtime). |
| peer | [StarsTransactionPeer](/type/StarsTransactionPeer/) | Source of the incoming transaction, or its recipient for outgoing transactions. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | For transactions with bots, title of the bought product. |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | For transactions with bots, description of the bought product. |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[WebDocument](/type/WebDocument/) | For transactions with bots, photo of the bought product. |
| transaction_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | If neither pending nor failed are set, the transaction was completed successfully, and this field will contain the point in time (Unix timestamp) when the withdrawal was completed successfully. |
| transaction_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | If neither pending nor failed are set, the transaction was completed successfully, and this field will contain a URL where the withdrawal transaction can be viewed. |
| bot_payload | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[bytes](/type/bytes/) | Bot specified invoice payload (i.e. the payload passed to [inputMediaInvoice](/constructor/inputMediaInvoice/) when [creating the invoice](https://core.telegram.org/api/payments)). |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[int](/type/int/) | For [paid media transactions »](https://core.telegram.org/api/paid-media), message ID of the paid media posted to peer.peer (can point to a deleted message; either way, extended_media will always contain the bought media). |
| extended_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageMedia](/type/MessageMedia/)> | The purchased [paid media »](https://core.telegram.org/api/paid-media). |
| subscription_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[int](/type/int/) | The number of seconds between consecutive Telegram Star debiting for [Telegram Star subscriptions »](https://core.telegram.org/api/stars#star-subscriptions). |
| giveaway_post_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[int](/type/int/) | ID of the message containing the [messageMediaGiveaway](/constructor/messageMediaGiveaway/), for incoming [star giveaway prizes](https://core.telegram.org/api/giveaways#star-giveaways). |
| stargift | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[StarGift](/type/StarGift/) | This transaction indicates a purchase or a sale (conversion back to Stars) of a [gift »](https://core.telegram.org/api/stars). |
| floodskip_number | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | This transaction is payment for [paid bot broadcasts](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once). Paid broadcasts are only allowed if the allow_paid_floodskip parameter of [messages.sendMessage](/method/messages.sendMessage/) and other message sending methods is set while trying to broadcast more than 30 messages per second to bot users. The integer value returned by this flag indicates the number of billed API calls. |
| starref_commission_permille | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[int](/type/int/) | This transaction is the receival (or refund) of an [affiliate commission](https://core.telegram.org/api/bots/referrals) (i.e. this is the transaction received by the peer that created the [referral link](https://core.telegram.org/api/links#referral-links), flag 17 is for transactions made by users that imported the referral link). |
| starref_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[Peer](/type/Peer/) | For transactions made by [referred users](https://core.telegram.org/api/bots/referrals), the peer that received the affiliate commission. |
| starref_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[StarsAmount](/type/StarsAmount/) | For transactions made by [referred users](https://core.telegram.org/api/bots/referrals), the amount of Telegram Stars received by the affiliate, can be negative for refunds. |
| paid_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[int](/type/int/) | This transaction is related to the reception or transmission of a [paid message »](https://core.telegram.org/api/paid-messages). |
| premium_gift_months | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[int](/type/int/) | This transaction indicates the payment for a [gifted Telegram Premium subscription »](https://core.telegram.org/api/premium#gifting-telegram-premium). |
| ads_proceeds_from_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[int](/type/int/) | Indicates that this is payment for ad revenue from the specified unixtime (always set together with ads_proceeds_to_date). |
| ads_proceeds_to_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[int](/type/int/) | Indicates that this is payment for ad revenue to the specified unixtime. |

## Тип

[StarsTransaction](/type/StarsTransaction/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [inputMediaInvoice](/constructor/inputMediaInvoice/)

Generated invoice of a [bot payment](https://core.telegram.org/bots/payments)

#### [Payments API](https://core.telegram.org/api/payments)

You can accept payments from Telegram users via Telegram Bots.

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Contains info about a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Bots FAQ](https://core.telegram.org/bots/faq)

#### [messages.sendMessage](/method/messages.sendMessage/)

Sends a message to a chat

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
