---
title: "Contacts.ResolvedPeer (тип)"
original: "https://core.telegram.org/type/contacts.ResolvedPeer"
section: ref
kind: type
layout: layout.njk
---

# Contacts.ResolvedPeer

*Тип из схемы TL.*

> Peer returned after resolving a `@username`

## Определение TL

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;

---functions---

contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.resolvedPeer](/constructor/contacts.resolvedPeer/) | Resolved peer |

## Методы

| Method | Описание |
|---|---|
| [contacts.resolveUsername](/method/contacts.resolveUsername/) | Resolve a @username to get peer info |
| [contacts.resolvePhone](/method/contacts.resolvePhone/) | Resolve a phone number to get user info, if their privacy settings allow it. Make sure to implement client-side ratelimiting/debounce for this method, allowing at most 1 call every 3 seconds. |
