---
title: "updatePhoneCallSignalingData (конструктор)"
original: "https://core.telegram.org/constructor/updatePhoneCallSignalingData"
section: ref
kind: constructor
layout: layout.njk
---

# updatePhoneCallSignalingData

*Конструктор из схемы TL.*

> Incoming phone call signaling payload

## Определение TL

```
updatePhoneCallSignalingData#2661bf09 phone_call_id:long data:bytes = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_call_id | [long](/type/long/) | Phone call ID |
| data | [bytes](/type/bytes/) | Signaling payload |

## Тип

[Update](/type/Update/)
