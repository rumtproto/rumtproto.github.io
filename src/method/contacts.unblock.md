---
title: "contacts.unblock (метод)"
original: "https://core.telegram.org/method/contacts.unblock"
section: ref
kind: method
layout: layout.njk
---

# contacts.unblock

*Метод из схемы TL.*

> Deletes a peer from a blocklist, see [here »](https://core.telegram.org/api/block) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.unblock#b550d328 flags:# my_stories_from:flags.0?true id:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the peer should be removed from the story blocklist; if not set, the peer will be removed from the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. |
| id | [InputPeer](/type/InputPeer/) | Peer |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CONTACT_ID_INVALID | The provided contact ID is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.
