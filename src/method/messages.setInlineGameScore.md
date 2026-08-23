---
title: "messages.setInlineGameScore (метод)"
original: "https://core.telegram.org/method/messages.setInlineGameScore"
section: ref
kind: method
layout: layout.njk
---

# messages.setInlineGameScore

*Метод из схемы TL.*

> Use this method to set the score of the specified user in a game sent as an inline message (bots only).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setInlineGameScore#15ad9f64 flags:# edit_message:flags.0?true force:flags.1?true id:InputBotInlineMessageID user_id:InputUser score:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| edit_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag if the game message should be automatically edited to include the current scoreboard |
| force | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
| id | [InputBotInlineMessageID](/type/InputBotInlineMessageID/) | ID of the inline message |
| user_id | [InputUser](/type/InputUser/) | User identifier |
| score | [int](/type/int/) | New score |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
