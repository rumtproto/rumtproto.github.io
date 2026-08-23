---
title: "contacts.blocked (конструктор)"
original: "https://core.telegram.org/constructor/contacts.blocked"
section: ref
kind: constructor
layout: layout.njk
---

# contacts.blocked

*Конструктор из схемы TL.*

> Full list of blocked users.

## Определение TL

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| blocked | [Vector](https://core.telegram.org/type/Vector%20t)<[PeerBlocked](/type/PeerBlocked/)> | List of blocked users |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Blocked chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users |

## Тип

[contacts.Blocked](/type/contacts.Blocked/)
