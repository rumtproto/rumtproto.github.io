---
title: "account.connectedBots (конструктор)"
original: "https://core.telegram.org/constructor/account.connectedBots"
section: ref
kind: constructor
layout: layout.njk
---

# account.connectedBots

*Конструктор из схемы TL.*

> Info about currently connected [business bots](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| connected_bots | [Vector](https://core.telegram.org/type/Vector%20t)<[ConnectedBot](/type/ConnectedBot/)> | Info about the connected bots |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Bot information |

## Тип

[account.ConnectedBots](/type/account.ConnectedBots/)

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
