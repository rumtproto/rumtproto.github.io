---
title: "updateBotBusinessConnect (конструктор)"
original: "https://core.telegram.org/constructor/updateBotBusinessConnect"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotBusinessConnect

*Конструктор из схемы TL.*

> Connecting or disconnecting a [business bot](https://core.telegram.org/api/bots/connected-business-bots) or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a `connection_id` that will be used by the bot to handle updates from and send messages as the user.

## Определение TL

```
updateBotBusinessConnect#8ae5c97a connection:BotBusinessConnection qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| connection | [BotBusinessConnection](/type/BotBusinessConnection/) | Business connection settings |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/)

Connecting or disconnecting a [business bot](https://core.telegram.org/api/bots/connected-business-bots) or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a `connection_id` that will be used by the bot to handle updates from and send messages as the user.
