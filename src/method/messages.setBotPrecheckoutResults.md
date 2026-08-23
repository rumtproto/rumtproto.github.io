---
title: "messages.setBotPrecheckoutResults (метод)"
original: "https://core.telegram.org/method/messages.setBotPrecheckoutResults"
section: ref
kind: method
layout: layout.njk
---

# messages.setBotPrecheckoutResults

*Метод из схемы TL.*

> Once the user has confirmed their payment and shipping details, the bot receives an [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/) update.  
> Use this method to respond to such pre-checkout queries.  
> **Note**: Telegram must receive an answer within 10 seconds after the pre-checkout query was sent.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotPrecheckoutResults#9c2dd95 flags:# success:flags.1?true query_id:long error:flags.0?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| success | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Set this flag if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order, otherwise do not set it, and set the error field, instead |
| query_id | [long](/type/long/) | Unique identifier for the query to be answered |
| error | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Required if the success isn't set. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ERROR_TEXT_EMPTY | The provided error message is empty. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |

## Related pages

#### [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/)

This object contains information about an incoming pre-checkout query.
