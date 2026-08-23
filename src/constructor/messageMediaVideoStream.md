---
title: "messageMediaVideoStream (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaVideoStream"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaVideoStream

*Конструктор из схемы TL.*

> Identifies the active group call associated with a [live story »](https://core.telegram.org/api/group-calls#live-stories).

## Определение TL

```
messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| rtmp_stream | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the live story uses [RTMP livestream mode »](https://core.telegram.org/api/group-calls#stream-mode) |
| call | [InputGroupCall](/type/InputGroupCall/) | Active live story group call |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
