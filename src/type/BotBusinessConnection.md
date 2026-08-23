---
title: "BotBusinessConnection (тип)"
original: "https://core.telegram.org/type/BotBusinessConnection"
section: ref
kind: type
layout: layout.njk
---

# BotBusinessConnection

*Тип из схемы TL.*

> Contains info about a [bot business connection](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botBusinessConnection](/constructor/botBusinessConnection/) | Contains info about a [bot business connection](https://core.telegram.org/api/bots/connected-business-bots). |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
