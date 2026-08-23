---
title: "contacts.resolveUsername (метод)"
original: "https://core.telegram.org/method/contacts.resolveUsername"
section: ref
kind: method
layout: layout.njk
---

# contacts.resolveUsername

*Метод из схемы TL.*

> Resolve a @username to get peer info

## Определение TL

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| username | [string](/type/string/) | @username to resolve |
| referer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | [Referrer ID from referral links »](https://core.telegram.org/api/links#referral-links). |

## Результат

[contacts.ResolvedPeer](/type/contacts.ResolvedPeer/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CONNECTION_LAYER_INVALID | Layer invalid. |
| 400 | STARREF_EXPIRED | The specified referral link is invalid. |
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USERNAME_NOT_OCCUPIED | The provided username is not occupied. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
