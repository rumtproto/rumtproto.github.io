---
title: "messages.preparedInlineMessage (конструктор)"
original: "https://core.telegram.org/constructor/messages.preparedInlineMessage"
section: ref
kind: constructor
layout: layout.njk
---

# messages.preparedInlineMessage

*Конструктор из схемы TL.*

> Represents a [prepared inline message received via a bot's mini app, that can be sent to some chats »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

## Определение TL

```
messages.preparedInlineMessage#ff57708d query_id:long result:BotInlineResult peer_types:Vector<InlineQueryPeerType> cache_time:int users:Vector<User> = messages.PreparedInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| query_id | [long](/type/long/) | The query_id to pass to [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/) |
| result | [BotInlineResult](/type/BotInlineResult/) | The contents of the message, to be shown in a preview |
| peer_types | [Vector](https://core.telegram.org/type/Vector%20t)<[InlineQueryPeerType](/type/InlineQueryPeerType/)> | Types of chats where this message can be sent |
| cache_time | [int](/type/int/) | Caching validity of the results |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the results |

## Тип

[messages.PreparedInlineMessage](/type/messages.PreparedInlineMessage/)

## Related pages

#### [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/)

Send a result obtained using [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

#### [Inline queries](https://core.telegram.org/api/bots/inline)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
