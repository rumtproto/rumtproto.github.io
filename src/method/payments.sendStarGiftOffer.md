---
title: "payments.sendStarGiftOffer (метод)"
original: "https://core.telegram.org/method/payments.sendStarGiftOffer"
section: ref
kind: method
layout: layout.njk
---

# payments.sendStarGiftOffer

*Метод из схемы TL.*

> Send an offer to purchase a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers), see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow.

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Owner of the collectible gift: equal to [starGiftUnique](/constructor/starGiftUnique/).owner_id. |
| slug | [string](/type/string/) | Identifier of the collectible gift: equal to [starGiftUnique](/constructor/starGiftUnique/).slug. |
| price | [StarsAmount](/type/StarsAmount/) | Offer price, in stars or TON. |
| duration | [int](/type/int/) | Duration of the offer, in seconds: must be one of 21600, 43200, 86400, 129600, 172800, or 259200; can also be 120 in test mode. |
| random_id | [long](/type/long/) | Random 64-bit identifier used to avoid sending the same offer twice in case of network issues. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| allow_paid_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | If the destination peer has [paid messages »](https://core.telegram.org/api/paid-messages) enabled, specifies the amount of [Telegram Stars](https://core.telegram.org/api/stars) the sending user has agreed to pay in order to send the offer (in addition to the amount for the offer itself, contained in price). |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | INPUT_STARS_AMOUNT_INVALID | The specified offer amount in stars is invalid, see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the allowed range. |
| 400 | INPUT_STARS_NANOS_INVALID | The specified offer amount in nanotons is invalid, see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the allowed range. |
| 400 | INVOICE_INVALID | The specified invoice is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | RESELL_STARS_TOO_FEW | The offered price is too low. |
| 400 | RESELL_STARS_TOO_MUCH | The offered price is too high. |
| 400 | STARGIFT_OFFER_INVALID | The specified offer amount is invalid. |
| 400 | STARGIFT_OFFER_NOT_ALLOWED | You can't send a purchase offer for this gift. |
| 400 | STARGIFT_SLUG_INVALID | The specified gift slug is invalid. |

## Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
