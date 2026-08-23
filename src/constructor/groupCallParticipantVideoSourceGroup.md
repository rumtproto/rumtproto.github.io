---
title: "groupCallParticipantVideoSourceGroup (конструктор)"
original: "https://core.telegram.org/constructor/groupCallParticipantVideoSourceGroup"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallParticipantVideoSourceGroup

*Конструктор из схемы TL.*

> Describes a group of video synchronization source identifiers

## Определение TL

```
groupCallParticipantVideoSourceGroup#dcb118b7 semantics:string sources:Vector<int> = GroupCallParticipantVideoSourceGroup;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| semantics | [string](/type/string/) | SDP semantics |
| sources | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Source IDs |

## Тип

[GroupCallParticipantVideoSourceGroup](/type/GroupCallParticipantVideoSourceGroup/)
