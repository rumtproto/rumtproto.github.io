---
title: "account.updateBusinessGreetingMessage (метод)"
original: "https://core.telegram.org/method/account.updateBusinessGreetingMessage"
section: ref
kind: method
layout: layout.njk
---

# account.updateBusinessGreetingMessage

*Метод из схемы TL.*

> Set a list of [Telegram Business greeting messages](https://core.telegram.org/api/business#greeting-messages).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessGreetingMessage#66cdafc4 flags:# message:flags.0?InputBusinessGreetingMessage = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputBusinessGreetingMessage](/type/InputBusinessGreetingMessage/) | Greeting message configuration and contents. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
