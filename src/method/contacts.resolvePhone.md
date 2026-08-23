---
title: "contacts.resolvePhone (метод)"
original: "https://core.telegram.org/method/contacts.resolvePhone"
section: ref
kind: method
layout: layout.njk
---

# contacts.resolvePhone

*Метод из схемы TL.*

> Resolve a phone number to get user info, if their privacy settings allow it.
> Make sure to implement client-side ratelimiting/debounce for this method, allowing at most 1 call every 3 seconds.

## Определение TL

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone | [string](/type/string/) | Phone number in international format, possibly obtained from a [phone number deep link](https://core.telegram.org/api/links#phone-number-links). |

## Результат

[contacts.ResolvedPeer](/type/contacts.ResolvedPeer/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_NOT_OCCUPIED | No user is associated to the specified phone number. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
