---
title: "messageActionGiftTon (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGiftTon"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGiftTon

*Конструктор из схемы TL.*

> You were gifted some Grams.
> This service message should be displayed below the appropriate sticker from the [inputStickerSetTonGifts »](/constructor/inputStickerSetTonGifts/) [stickerset »](https://core.telegram.org/api/stickers#stickersets):
> -   If `crypto_amount <= 10_000_000_000`, choose the sticker with emoji equal to "![2️⃣](https://core.telegram.org//telegram.org/img/emoji/40/32E283A3.png)"
> -   If `crypto_amount <= 50_000_000_000`, choose the sticker with emoji equal to "![1️⃣](https://core.telegram.org//telegram.org/img/emoji/40/31E283A3.png)"
> -   Otherwise, choose the sticker with emoji equal to "![3️⃣](https://core.telegram.org//telegram.org/img/emoji/40/33E283A3.png)"

## Определение TL

```
messageActionGiftTon#a8a3c699 flags:# currency:string amount:long crypto_currency:string crypto_amount:long transaction_id:flags.0?string = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| currency | [string](/type/string/) | Name of a localized FIAT currency. |
| amount | [long](/type/long/) | FIAT currency equivalent (in the currency specified in currency) of the amount specified in crypto_amount. |
| crypto_currency | [string](/type/string/) | Name of the cryptocurrency. |
| crypto_amount | [long](/type/long/) | Amount in the smallest unit of the cryptocurrency (for TONs, one billionth of a ton, AKA a nanogram). |
| transaction_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Transaction ID. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/)

TON gifts stickerset.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
