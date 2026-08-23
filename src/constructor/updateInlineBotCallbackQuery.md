---
title: "updateInlineBotCallbackQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateInlineBotCallbackQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateInlineBotCallbackQuery

*Конструктор из схемы TL.*

> This notification is received by bots when a button is pressed

## Определение TL

```
updateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_id | [long](/type/long/) | Query ID |
| user_id | [long](/type/long/) | ID of the user that pressed the button |
| msg_id | [InputBotInlineMessageID](/type/InputBotInlineMessageID/) | ID of the inline message with the button |
| chat_instance | [long](/type/long/) | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. |
| data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field. |
| game_short_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Short name of a Game to be returned, serves as the unique identifier for the game |

## Тип

[Update](/type/Update/)
