---
title: "messageActionStarGiftPurchaseOffer (конструктор)"
original: "https://core.telegram.org/constructor/messageActionStarGiftPurchaseOffer"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionStarGiftPurchaseOffer

*Конструктор из схемы TL.*

> Contains an offer to purchase a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers), see [here »](https://core.telegram.org/api/gifts#collectible-gift-purchase-offers) for the full flow.

## Определение TL

```
messageActionStarGiftPurchaseOffer#774278d4 flags:# accepted:flags.0?true declined:flags.1?true gift:StarGift price:StarsAmount expires_at:int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| accepted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the gift owner accepted this offer. |
| declined | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the gift owner declined this offer. |
| gift | [StarGift](/type/StarGift/) | The collectible gift the offer is about. |
| price | [StarsAmount](/type/StarsAmount/) | Offered price. |
| expires_at | [int](/type/int/) | Offer expiration date (UNIX timestamp): if the owner doesn't act before this date, the offer will expire and the buyer will be refunded automatically. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
