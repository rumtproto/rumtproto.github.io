---
title: "connectedBot (конструктор)"
original: "https://core.telegram.org/constructor/connectedBot"
section: ref
kind: constructor
layout: layout.njk
---

# connectedBot

*Конструктор из схемы TL.*

> Contains info about a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bot_id | [long](/type/long/) | ID of the connected bot |
| recipients | [BusinessBotRecipients](/type/BusinessBotRecipients/) | Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may receive messages and interact with. |
| rights | [BusinessBotRights](/type/BusinessBotRights/) | Business bot rights. |

## Тип

[ConnectedBot](/type/ConnectedBot/)

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
