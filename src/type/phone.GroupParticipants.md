---
title: "phone.GroupParticipants (тип)"
original: "https://core.telegram.org/type/phone.GroupParticipants"
section: ref
kind: type
layout: layout.njk
---

# phone.GroupParticipants

*Тип из схемы TL.*

> Info about the participants of a group call or livestream

## Определение TL

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;

---functions---

phone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [phone.groupParticipants](/constructor/phone.groupParticipants/) | Contains a page of group call participants, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call). |

## Методы

| Method | Описание |
|---|---|
| [phone.getGroupParticipants](/method/phone.getGroupParticipants/) | Get [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) participants. |
