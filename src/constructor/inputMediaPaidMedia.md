---
title: "inputMediaPaidMedia (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaPaidMedia"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaPaidMedia

*Конструктор из схемы TL.*

> [Paid media, see here »](https://core.telegram.org/api/paid-media) for more info.

## Определение TL

```
inputMediaPaidMedia#c4103386 flags:# stars_amount:long extended_media:Vector<InputMedia> payload:flags.0?string = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| stars_amount | [long](/type/long/) | The price of the media in [Telegram Stars](https://core.telegram.org/api/stars). |
| extended_media | [Vector](https://core.telegram.org/type/Vector%20t)<[InputMedia](/type/InputMedia/)> | Photos or videos. |
| payload | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Bots only, specifies a custom payload that will then be passed in [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/) when a payment is made (this field will not be visible to the user) |

## Тип

[InputMedia](/type/InputMedia/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/)

Bots only: a user has purchased a [paid media](https://core.telegram.org/api/paid-media).

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
