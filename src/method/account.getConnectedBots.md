---
title: "account.getConnectedBots (метод)"
original: "https://core.telegram.org/method/account.getConnectedBots"
section: ref
kind: method
layout: layout.njk
---

# account.getConnectedBots

*Метод из схемы TL.*

> List all currently connected [business bots »](https://core.telegram.org/api/bots/connected-business-bots)

## Определение TL

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;
---functions---
account.getConnectedBots#4ea4c80f = account.ConnectedBots;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.ConnectedBots](/type/account.ConnectedBots/)

## Only users can use this method

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
