---
title: "messageActionGiftStars (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGiftStars"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGiftStars

*Конструктор из схемы TL.*

> You gifted or were gifted some [Telegram Stars](https://core.telegram.org/api/stars).
> This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets):
> -   If `stars <= 1000`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)"
> -   If `stars < 2500`, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)"
> -   Otherwise, choose the sticker with emoji equal to "![4️⃣](https://core.telegram.org//telegram.org/img/emoji/40/34E283A3.png)"

## Определение TL

```
messageActionGiftStars#45d5b021 flags:# currency:string amount:long stars:long crypto_currency:flags.0?string crypto_amount:flags.0?long transaction_id:flags.1?string = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Price of the gift in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| stars | [long](/type/long/) | Amount of gifted stars |
| crypto_currency | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If the gift was bought using a cryptocurrency, the cryptocurrency name. |
| crypto_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | If the gift was bought using a cryptocurrency, price of the gift in the smallest units of a cryptocurrency. |
| transaction_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Identifier of the transaction, only visible to the receiver of the gift. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Stickers to show when receiving a gifted Telegram Premium subscription

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
