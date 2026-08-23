---
title: "contacts.blockedSlice (конструктор)"
original: "https://core.telegram.org/constructor/contacts.blockedSlice"
section: ref
kind: constructor
layout: layout.njk
---

# contacts.blockedSlice

*Конструктор из схемы TL.*

> Incomplete list of blocked users.

## Определение TL

```
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of elements in the list |
| blocked | [Vector](https://core.telegram.org/type/Vector%20t)<[PeerBlocked](/type/PeerBlocked/)> | List of blocked users |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Blocked chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users |

## Тип

[contacts.Blocked](/type/contacts.Blocked/)
