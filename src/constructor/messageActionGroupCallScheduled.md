---
title: "messageActionGroupCallScheduled (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGroupCallScheduled"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGroupCallScheduled

*Конструктор из схемы TL.*

> A [video chat/livestream](https://core.telegram.org/api/group-calls#video-chats-livestreams) was scheduled.

## Определение TL

```
messageActionGroupCallScheduled#b3a07661 call:InputGroupCall schedule_date:int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Scheduled video chat/livestream |
| schedule_date | [int](/type/int/) | When is the group call scheduled to start |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
