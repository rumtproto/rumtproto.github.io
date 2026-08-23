---
title: "messageMediaPhoto (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaPhoto

*Конструктор из схемы TL.*

> Attached photo.

## Определение TL

```
messageMediaPhoto#695150d7 flags:# spoiler:flags.3?true photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| live_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this is a live photo, i.e. a still photo paired with the short video clip captured alongside it |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Photo](/type/Photo/) | Photo |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Time to live of self-destructing photo, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the photo immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Document](/type/Document/) | The short video clip of the live photo |

## Тип

[MessageMedia](/type/MessageMedia/)
