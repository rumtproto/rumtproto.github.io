---
title: "updatePinnedSavedDialogs (конструктор)"
original: "https://core.telegram.org/constructor/updatePinnedSavedDialogs"
section: ref
kind: constructor
layout: layout.njk
---

# updatePinnedSavedDialogs

*Конструктор из схемы TL.*

> [Pinned saved dialogs »](https://core.telegram.org/api/saved-messages) were updated

## Определение TL

```
updatePinnedSavedDialogs#686c85a6 flags:# order:flags.0?Vector<DialogPeer> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[DialogPeer](/type/DialogPeer/)> | New order of pinned saved dialogs |

## Тип

[Update](/type/Update/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
