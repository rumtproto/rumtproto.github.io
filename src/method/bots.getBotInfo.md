---
title: "bots.getBotInfo (метод)"
original: "https://core.telegram.org/method/bots.getBotInfo"
section: ref
kind: method
layout: layout.njk
---

# bots.getBotInfo

*Метод из схемы TL.*

> Get localized name, about text and description of a bot (or of the current account, if called by a bot).

## Определение TL

```
bots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;
---functions---
bots.getBotInfo#dcd914fd flags:# bot:flags.0?InputUser lang_code:string = bots.BotInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bot | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputUser](/type/InputUser/) | If called by a user, must contain the peer of a bot we own. |
| lang_code | [string](/type/string/) | Language code, if left empty this method will return the fallback about text and description. |

## Результат

[bots.BotInfo](/type/bots.BotInfo/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | LANG_CODE_INVALID | The specified language code is invalid. |
| 400 | USER_BOT_INVALID | User accounts must provide the bot method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts. |
