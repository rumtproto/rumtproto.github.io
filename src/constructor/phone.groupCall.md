---
title: "phone.groupCall (конструктор)"
original: "https://core.telegram.org/constructor/phone.groupCall"
section: ref
kind: constructor
layout: layout.njk
---

# phone.groupCall

*Конструктор из схемы TL.*

> Contains group call information and an initial participant page, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call).

## Определение TL

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [GroupCall](/type/GroupCall/) | Info about the group call |
| participants | [Vector](https://core.telegram.org/type/Vector%20t)<[GroupCallParticipant](/type/GroupCallParticipant/)> | A partial list of participants. |
| participants_next_offset | [string](/type/string/) | Next offset to use when fetching the remaining participants using [phone.getGroupParticipants](/method/phone.getGroupParticipants/) |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the participants vector |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the participants vector |

## Тип

[phone.GroupCall](/type/phone.GroupCall/)

## Related pages

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) participants.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
