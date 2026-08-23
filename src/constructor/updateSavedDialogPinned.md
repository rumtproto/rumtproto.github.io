---
title: "updateSavedDialogPinned (конструктор)"
original: "https://core.telegram.org/constructor/updateSavedDialogPinned"
section: ref
kind: constructor
layout: layout.njk
---

# updateSavedDialogPinned

*Конструктор из схемы TL.*

> A [saved message dialog](https://core.telegram.org/api/saved-messages) was pinned/unpinned

## Определение TL

```
updateSavedDialogPinned#aeaf9e74 flags:# pinned:flags.0?true peer:DialogPeer = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the dialog was pinned |
| peer | [DialogPeer](/type/DialogPeer/) | The dialog |

## Тип

[Update](/type/Update/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
