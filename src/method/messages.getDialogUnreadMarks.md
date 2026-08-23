---
title: "messages.getDialogUnreadMarks (метод)"
original: "https://core.telegram.org/method/messages.getDialogUnreadMarks"
section: ref
kind: method
layout: layout.njk
---

# messages.getDialogUnreadMarks

*Метод из схемы TL.*

> Get dialogs manually marked as unread

## Определение TL

```
---functions---
messages.getDialogUnreadMarks#21202222 flags:# parent_peer:flags.0?InputPeer = Vector<DialogPeer>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | Can be equal to the ID of a monoforum, to fetch monoforum topics manually marked as unread. |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[DialogPeer](/type/DialogPeer/)\>

## Only users can use this method
