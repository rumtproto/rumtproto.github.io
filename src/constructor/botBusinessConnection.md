---
title: "botBusinessConnection (конструктор)"
original: "https://core.telegram.org/constructor/botBusinessConnection"
section: ref
kind: constructor
layout: layout.njk
---

# botBusinessConnection

*Конструктор из схемы TL.*

> Contains info about a [bot business connection](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this business connection is currently disabled |
| connection_id | [string](/type/string/) | Business connection ID, used to identify messages coming from the connection and to reply to them as specified [here »](https://core.telegram.org/api/bots/connected-business-bots). |
| user_id | [long](/type/long/) | ID of the user that the bot is connected to via this connection. |
| dc_id | [int](/type/int/) | ID of the datacenter where to send queries wrapped in a [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/) as specified [here »](https://core.telegram.org/api/bots/connected-business-bots). |
| date | [int](/type/int/) | When was the connection created. |
| rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[BusinessBotRights](/type/BusinessBotRights/) | Business bot rights. |

## Тип

[BotBusinessConnection](/type/BotBusinessConnection/)

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](https://core.telegram.org/api/bots/connected-business-bots).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.
