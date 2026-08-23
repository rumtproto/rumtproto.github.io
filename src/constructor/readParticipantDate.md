---
title: "readParticipantDate (конструктор)"
original: "https://core.telegram.org/constructor/readParticipantDate"
section: ref
kind: constructor
layout: layout.njk
---

# readParticipantDate

*Конструктор из схемы TL.*

> Contains info about when a certain participant has read a message

## Определение TL

```
readParticipantDate#4a4ff172 user_id:long date:int = ReadParticipantDate;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User ID |
| date | [int](/type/int/) | When the user read the message |

## Тип

[ReadParticipantDate](/type/ReadParticipantDate/)
