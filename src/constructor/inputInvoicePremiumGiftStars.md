---
title: "inputInvoicePremiumGiftStars (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoicePremiumGiftStars"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoicePremiumGiftStars

*Конструктор из схемы TL.*

> Used to gift a [Telegram Premium](https://core.telegram.org/api/premium) subscription to another user, paying with [Telegram Stars](https://core.telegram.org/api/stars).

## Определение TL

```
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [InputUser](/type/InputUser/) | Who will receive the gifted subscription. |
| months | [int](/type/int/) | Duration of the subscription in months, must be one of the options with currency == "XTR" returned by [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/). |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[TextWithEntities](/type/TextWithEntities/) | Message attached with the gift. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/)

Obtain a list of Telegram Premium [giveaway/gift code »](https://core.telegram.org/api/giveaways) options.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
