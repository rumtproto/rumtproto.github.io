---
title: "updateDeleteGroupCallMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateDeleteGroupCallMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateDeleteGroupCallMessages

*Конструктор из схемы TL.*

> Indicates that messages were deleted from the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) of a video chat/livestream or live story, including in RTMP mode.

## Определение TL

```
updateDeleteGroupCallMessages#3e85e92c call:InputGroupCall messages:Vector<int> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Video chat/livestream or live story from which the messages were deleted |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the deleted in-call messages |

## Тип

[Update](/type/Update/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
