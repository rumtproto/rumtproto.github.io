---
title: "messages.toggleSavedDialogPin (метод)"
original: "https://core.telegram.org/method/messages.toggleSavedDialogPin"
section: ref
kind: method
layout: layout.njk
---

# messages.toggleSavedDialogPin

*Метод из схемы TL.*

> Pin or unpin a [saved message dialog »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleSavedDialogPin#ac81bbde flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to pin or unpin the dialog |
| peer | [InputDialogPeer](/type/InputDialogPeer/) | The dialog to pin |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
