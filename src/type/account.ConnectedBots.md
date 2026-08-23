---
title: "account.ConnectedBots (тип)"
original: "https://core.telegram.org/type/account.ConnectedBots"
section: ref
kind: type
layout: layout.njk
---

# account.ConnectedBots

*Тип из схемы TL.*

> Info about currently connected [business bots](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;

---functions---

account.getConnectedBots#4ea4c80f = account.ConnectedBots;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.connectedBots](/constructor/account.connectedBots/) | Info about currently connected [business bots](https://core.telegram.org/api/bots/connected-business-bots). |

## Методы

| Method | Описание |
|---|---|
| [account.getConnectedBots](/method/account.getConnectedBots/) | List all currently connected [business bots »](https://core.telegram.org/api/bots/connected-business-bots) |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
