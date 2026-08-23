---
title: "updateDialogUnreadMark (конструктор)"
original: "https://core.telegram.org/constructor/updateDialogUnreadMark"
section: ref
kind: constructor
layout: layout.njk
---

# updateDialogUnreadMark

*Конструктор из схемы TL.*

> The manual unread mark of a chat was changed

## Определение TL

```
updateDialogUnreadMark#b658f23e flags:# unread:flags.0?true peer:DialogPeer saved_peer_id:flags.1?Peer = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Was the chat marked or unmarked as read |
| peer | [DialogPeer](/type/DialogPeer/) | The dialog |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | If set, the mark is related to the specified [monoforum topic ID »](https://core.telegram.org/api/monoforum). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
