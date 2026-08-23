---
title: "messages.markDialogUnread (метод)"
original: "https://core.telegram.org/method/messages.markDialogUnread"
section: ref
kind: method
layout: layout.njk
---

# messages.markDialogUnread

*Метод из схемы TL.*

> Manually mark dialog as unread

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.markDialogUnread#8c5006f8 flags:# unread:flags.0?true parent_peer:flags.1?InputPeer peer:InputDialogPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Mark as unread/read |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | If set, must be equal to the ID of a [monoforum](https://core.telegram.org/api/monoforum), and will affect the monoforum topic passed in peer. |
| peer | [InputDialogPeer](/type/InputDialogPeer/) | Dialog |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
