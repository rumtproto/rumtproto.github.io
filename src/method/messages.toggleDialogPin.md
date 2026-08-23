---
title: "messages.toggleDialogPin (метод)"
original: "https://core.telegram.org/method/messages.toggleDialogPin"
section: ref
kind: method
layout: layout.njk
---

# messages.toggleDialogPin

*Метод из схемы TL.*

> Pin/unpin a dialog

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleDialogPin#a731e257 flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;
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
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | PEER_HISTORY_EMPTY | You can't pin an empty chat with a user. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PINNED_DIALOGS_TOO_MUCH | Too many pinned dialogs. |
