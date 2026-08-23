---
title: "updateBotCallbackQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateBotCallbackQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotCallbackQuery

*Конструктор из схемы TL.*

> A callback button was pressed, and the button data was sent to the bot that created the button

## Определение TL

```
updateBotCallbackQuery#b9cfc48d flags:# query_id:long user_id:long peer:Peer msg_id:int chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_id | [long](/type/long/) | Query ID |
| user_id | [long](/type/long/) | ID of the user that pressed the button |
| peer | [Peer](/type/Peer/) | Chat where the inline keyboard was sent |
| msg_id | [int](/type/int/) | Message ID |
| chat_instance | [long](/type/long/) | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. |
| data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | Callback data |
| game_short_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Short name of a Game to be returned, serves as the unique identifier for the game |

## Тип

[Update](/type/Update/)
