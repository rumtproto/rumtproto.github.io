---
title: "updateGroupCallMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateGroupCallMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateGroupCallMessage

*Конструктор из схемы TL.*

> A new message, reaction, paid comment or donation was received through the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages).

## Определение TL

```
updateGroupCallMessage#d8326f0d call:InputGroupCall message:GroupCallMessage = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Group call that received the message |
| message | [GroupCallMessage](/type/GroupCallMessage/) | Received in-call message |

## Тип

[Update](/type/Update/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
