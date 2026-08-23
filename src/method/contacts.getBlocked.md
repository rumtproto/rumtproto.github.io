---
title: "contacts.getBlocked (метод)"
original: "https://core.telegram.org/method/contacts.getBlocked"
section: ref
kind: method
layout: layout.njk
---

# contacts.getBlocked

*Метод из схемы TL.*

> Returns the list of blocked users.

## Определение TL

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
---functions---
contacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to fetch the story blocklist; if not set, will fetch the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. |
| offset | [int](/type/int/) | The number of list elements to be skipped |
| limit | [int](/type/int/) | The number of list elements to be returned |

## Результат

[contacts.Blocked](/type/contacts.Blocked/)

## Only users can use this method

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.
