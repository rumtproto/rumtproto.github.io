---
title: "messages.reorderPinnedSavedDialogs (метод)"
original: "https://core.telegram.org/method/messages.reorderPinnedSavedDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.reorderPinnedSavedDialogs

*Метод из схемы TL.*

> Reorder pinned [saved message dialogs »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderPinnedSavedDialogs#8b716587 flags:# force:flags.0?true order:Vector<InputDialogPeer> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| force | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, dialogs pinned server-side but not present in the order field will be unpinned. |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[InputDialogPeer](/type/InputDialogPeer/)> | New dialog order |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
