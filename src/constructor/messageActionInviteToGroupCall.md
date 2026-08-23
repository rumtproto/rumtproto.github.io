---
title: "messageActionInviteToGroupCall (конструктор)"
original: "https://core.telegram.org/constructor/messageActionInviteToGroupCall"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionInviteToGroupCall

*Конструктор из схемы TL.*

> A set of users was invited to a [video chat/livestream »](https://core.telegram.org/api/group-calls#video-chats-livestreams).

## Определение TL

```
messageActionInviteToGroupCall#502f92f7 call:InputGroupCall users:Vector<long> = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Video chat/livestream to which the users were invited |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | The invited users |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
