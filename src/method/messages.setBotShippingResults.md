---
title: "messages.setBotShippingResults (метод)"
original: "https://core.telegram.org/method/messages.setBotShippingResults"
section: ref
kind: method
layout: layout.njk
---

# messages.setBotShippingResults

*Метод из схемы TL.*

> If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the bot will receive an [updateBotShippingQuery](/constructor/updateBotShippingQuery/) update. Use this method to reply to shipping queries.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotShippingResults#e5f672fa flags:# query_id:long error:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_id | [long](/type/long/) | Unique identifier for the query to be answered |
| error | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user. |
| shipping_options | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[ShippingOption](/type/ShippingOption/)> | A vector of available shipping options. |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | QUERY_ID_INVALID | The query ID is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |

## Related pages

#### [updateBotShippingQuery](/constructor/updateBotShippingQuery/)

This object contains information about an incoming shipping query.
