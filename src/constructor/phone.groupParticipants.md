---
title: "phone.groupParticipants (конструктор)"
original: "https://core.telegram.org/constructor/phone.groupParticipants"
section: ref
kind: constructor
layout: layout.njk
---

# phone.groupParticipants

*Конструктор из схемы TL.*

> Contains a page of group call participants, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call).

## Определение TL

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Number of participants |
| participants | [Vector](https://core.telegram.org/type/Vector%20t)<[GroupCallParticipant](/type/GroupCallParticipant/)> | List of participants |
| next_offset | [string](/type/string/) | If not empty, the specified list of participants is partial, and more participants can be fetched specifying this parameter as offset in [phone.getGroupParticipants](/method/phone.getGroupParticipants/). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| version | [int](/type/int/) | Current participant-list version, used to apply and detect gaps in versioned [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) updates |

## Тип

[phone.GroupParticipants](/type/phone.GroupParticipants/)

## Related pages

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) participants.

#### [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/)

The participant list of a [group call](https://core.telegram.org/api/group-calls#applying-group-call-updates) has changed.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
