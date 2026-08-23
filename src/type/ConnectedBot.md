---
title: "ConnectedBot (тип)"
original: "https://core.telegram.org/type/ConnectedBot"
section: ref
kind: type
layout: layout.njk
---

# ConnectedBot

*Тип из схемы TL.*

> Contains info about a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [connectedBot](/constructor/connectedBot/) | Contains info about a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots). |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
