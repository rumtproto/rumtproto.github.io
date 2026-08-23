---
title: "messageActionGiftPremium (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGiftPremium"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGiftPremium

*Конструктор из схемы TL.*

> Info about a gifted Telegram Premium subscription
> This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets):
> -   If `months == 1`, choose the sticker with emoji equal to "![1️⃣](https://core.telegram.org//telegram.org/img/emoji/40/31E283A3.png)"
> -   If `months == 3`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)"
> -   If `months == 6`, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)"
> -   If `months == 12`, choose the sticker with emoji equal to "![4️⃣](https://core.telegram.org//telegram.org/img/emoji/40/34E283A3.png)"
> -   If `months == 24`, choose the sticker with emoji equal to "![5️⃣](https://core.telegram.org//telegram.org/img/emoji/40/35E283A3.png)"
> -   Otherwise, fallback to the sticker with emoji equal to "![1️⃣](https://core.telegram.org//telegram.org/img/emoji/40/31E283A3.png)"

## Определение TL

```
messageActionGiftPremium#48e91302 flags:# currency:string amount:long days:int crypto_currency:flags.0?string crypto_amount:flags.0?long message:flags.1?TextWithEntities = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Price of the gift in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| days | [int](/type/int/) | Duration of the gifted Telegram Premium subscription, in days. |
| crypto_currency | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If the gift was bought using a cryptocurrency, the cryptocurrency name. |
| crypto_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | If the gift was bought using a cryptocurrency, price of the gift in the smallest units of a cryptocurrency. |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Message attached with the gift |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Stickers to show when receiving a gifted Telegram Premium subscription

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
