---
title: "messageActionGroupCall (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGroupCall"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGroupCall

*Конструктор из схемы TL.*

> A [video chat/livestream](https://core.telegram.org/api/group-calls#video-chats-livestreams) was started or terminated.

## Определение TL

```
messageActionGroupCall#7a0d7f42 flags:# call:InputGroupCall duration:flags.0?int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| call | [InputGroupCall](/type/InputGroupCall/) | Video chat/livestream that started or ended |
| duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Duration of the group call in seconds, for terminated calls. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
