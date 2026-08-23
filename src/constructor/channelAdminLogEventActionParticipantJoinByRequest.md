---
title: "channelAdminLogEventActionParticipantJoinByRequest (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoinByRequest"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantJoinByRequest

*Конструктор из схемы TL.*

> A new member was accepted to the chat by an admin

## Определение TL

```
channelAdminLogEventActionParticipantJoinByRequest#afb6144a invite:ExportedChatInvite approved_by:long = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| invite | [ExportedChatInvite](/type/ExportedChatInvite/) | The invite link that was used to join the chat |
| approved_by | [long](/type/long/) | ID of the admin that approved the invite |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)
