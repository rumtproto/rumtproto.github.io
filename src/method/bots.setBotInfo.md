---
title: "bots.setBotInfo (метод)"
original: "https://core.telegram.org/method/bots.setBotInfo"
section: ref
kind: method
layout: layout.njk
---

# bots.setBotInfo

*Метод из схемы TL.*

> Set localized name, about text and description of a bot (or of the current account, if called by a bot).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotInfo#10cf3123 flags:# bot:flags.2?InputUser lang_code:string name:flags.3?string about:flags.0?string description:flags.1?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bot | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputUser](/type/InputUser/) | If called by a user, must contain the peer of a bot we own. |
| lang_code | [string](/type/string/) | Language code, if left empty update the fallback about text and description |
| name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | New bot name |
| about | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | New about text |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | New description |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | USER_BOT_INVALID | User accounts must provide the bot method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts. |
