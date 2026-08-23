---
title: "updateBusinessBotCallbackQuery (конструктор)"
original: "https://core.telegram.org/constructor/updateBusinessBotCallbackQuery"
section: ref
kind: constructor
layout: layout.njk
---

# updateBusinessBotCallbackQuery

*Конструктор из схемы TL.*

> A callback button sent via a [business connection](https://core.telegram.org/api/bots/connected-business-bots) was pressed, and the button data was sent to the bot that created the button.

## Определение TL

```
updateBusinessBotCallbackQuery#1ea2fda7 flags:# query_id:long user_id:long connection_id:string message:Message reply_to_message:flags.2?Message chat_instance:long data:flags.0?bytes = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| query_id | [long](/type/long/) | Query ID |
| user_id | [long](/type/long/) | ID of the user that pressed the button |
| connection_id | [string](/type/string/) | [Business connection ID](https://core.telegram.org/api/bots/connected-business-bots) |
| message | [Message](/type/Message/) | Message that contains the keyboard (also contains info about the chat where the message was sent). |
| reply_to_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Message](/type/Message/) | The message that message is replying to. |
| chat_instance | [long](/type/long/) | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. |
| data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | Callback data |

## Тип

[Update](/type/Update/)

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
