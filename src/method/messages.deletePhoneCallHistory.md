---
title: "messages.deletePhoneCallHistory (метод)"
original: "https://core.telegram.org/method/messages.deletePhoneCallHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.deletePhoneCallHistory

*Метод из схемы TL.*

> Delete the entire phone call history.

## Определение TL

```
messages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;
---functions---
messages.deletePhoneCallHistory#f9cbe409 flags:# revoke:flags.0?true = messages.AffectedFoundMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoke | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to remove phone call history for participants as well |

## Результат

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

## Only users can use this method
