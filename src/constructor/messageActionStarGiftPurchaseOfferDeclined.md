---
title: "messageActionStarGiftPurchaseOfferDeclined (конструктор)"
original: "https://core.telegram.org/constructor/messageActionStarGiftPurchaseOfferDeclined"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionStarGiftPurchaseOfferDeclined

*Конструктор из схемы TL.*

> A [collectible gift purchase offer »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) was declined, or the offer expired, see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow.

## Определение TL

```
messageActionStarGiftPurchaseOfferDeclined#73ada76b flags:# expired:flags.0?true gift:StarGift price:StarsAmount = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| expired | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the owner didn't act before the [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/).expires_at deadline and the offer expired automatically; otherwise, the owner explicitly declined the offer. |
| gift | [StarGift](/type/StarGift/) | The collectible gift the declined or expired offer was about. |
| price | [StarsAmount](/type/StarsAmount/) | Offered price that is refunded automatically to the buyer. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/)

Contains an offer to purchase a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers), see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
