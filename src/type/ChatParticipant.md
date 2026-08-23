---
title: "ChatParticipant (тип)"
original: "https://core.telegram.org/type/ChatParticipant"
section: ref
kind: type
layout: layout.njk
---

# ChatParticipant

*Тип из схемы TL.*

> Details of a group member.

## Определение TL

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatParticipant](/constructor/chatParticipant/) | [Basic group](https://core.telegram.org/api/channel#basic-groups) member (not usable by supergroups). |
| [chatParticipantCreator](/constructor/chatParticipantCreator/) | Represents the creator of the [basic group »](https://core.telegram.org/api/channel#basic-groups) |
| [chatParticipantAdmin](/constructor/chatParticipantAdmin/) | [Basic group](https://core.telegram.org/api/channel#basic-groups) admin (not usable by supergroups). |
