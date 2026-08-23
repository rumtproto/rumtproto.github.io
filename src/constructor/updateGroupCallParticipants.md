---
title: "updateGroupCallParticipants (конструктор)"
original: "https://core.telegram.org/constructor/updateGroupCallParticipants"
section: ref
kind: constructor
layout: layout.njk
---

# updateGroupCallParticipants

*Конструктор из схемы TL.*

> The participant list of a [group call](https://core.telegram.org/api/group-calls#applying-group-call-updates) has changed.

## Определение TL

```
updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Group call whose participants changed |
| participants | [Vector](https://core.telegram.org/type/Vector%20t)<[GroupCallParticipant](/type/GroupCallParticipant/)> | Participants whose state changed |
| version | [int](/type/int/) | Group call revision used by the [update application rules »](https://core.telegram.org/api/group-calls#applying-group-call-updates) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
