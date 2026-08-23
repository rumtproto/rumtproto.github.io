---
title: "contacts.Blocked (тип)"
original: "https://core.telegram.org/type/contacts.Blocked"
section: ref
kind: type
layout: layout.njk
---

# contacts.Blocked

*Тип из схемы TL.*

> Info on users from the current user's black list.

## Определение TL

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;

---functions---

contacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.blocked](/constructor/contacts.blocked/) | Full list of blocked users. |
| [contacts.blockedSlice](/constructor/contacts.blockedSlice/) | Incomplete list of blocked users. |

## Методы

| Method | Описание |
|---|---|
| [contacts.getBlocked](/method/contacts.getBlocked/) | Returns the list of blocked users. |
