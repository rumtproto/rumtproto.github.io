---
title: "messages.AffectedFoundMessages (тип)"
original: "https://core.telegram.org/type/messages.AffectedFoundMessages"
section: ref
kind: type
layout: layout.njk
---

# messages.AffectedFoundMessages

*Тип из схемы TL.*

> Messages found and affected by changes

## Определение TL

```
messages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;

---functions---

messages.deletePhoneCallHistory#f9cbe409 flags:# revoke:flags.0?true = messages.AffectedFoundMessages;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.affectedFoundMessages](/constructor/messages.affectedFoundMessages/) | Messages found and affected by changes |

## Методы

| Method | Описание |
|---|---|
| [messages.deletePhoneCallHistory](/method/messages.deletePhoneCallHistory/) | Delete the entire phone call history. |
