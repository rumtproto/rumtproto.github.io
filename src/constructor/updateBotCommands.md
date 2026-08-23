---
title: "updateBotCommands (конструктор)"
original: "https://core.telegram.org/constructor/updateBotCommands"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotCommands

*Конструктор из схемы TL.*

> The [command set](https://core.telegram.org/api/bots/commands) of a certain bot in a certain chat has changed.

## Определение TL

```
updateBotCommands#4d712f2e peer:Peer bot_id:long commands:Vector<BotCommand> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The affected chat |
| bot_id | [long](/type/long/) | ID of the bot that changed its command set |
| commands | [Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](/type/BotCommand/)> | New bot commands |

## Тип

[Update](/type/Update/)

## Related pages

#### [Bot commands](https://core.telegram.org/api/bots/commands)

Bots offer a set of commands that can be used by users in private, or in a chat.
