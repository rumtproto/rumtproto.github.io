---
title: "account.updateBusinessIntro (метод)"
original: "https://core.telegram.org/method/account.updateBusinessIntro"
section: ref
kind: method
layout: layout.njk
---

# account.updateBusinessIntro

*Метод из схемы TL.*

> Set or remove the [Telegram Business introduction »](https://core.telegram.org/api/business#business-introduction).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessIntro#a614d034 flags:# intro:flags.0?InputBusinessIntro = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| intro | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputBusinessIntro](/type/InputBusinessIntro/) | Telegram Business introduction, to remove it call the method without setting this flag. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
