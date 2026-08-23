---
title: "phone.GroupCall (тип)"
original: "https://core.telegram.org/type/phone.GroupCall"
section: ref
kind: type
layout: layout.njk
---

# phone.GroupCall

*Тип из схемы TL.*

> Contains info about a group call, and partial info about its participants.

## Определение TL

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;

---functions---

phone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.groupCall](/constructor/phone.groupCall/) | Contains group call information and an initial participant page, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call). |

## Методы

| Method | Описание |
|---|---|
| [phone.getGroupCall](/method/phone.getGroupCall/) | Get info about a [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) and its participants. |
