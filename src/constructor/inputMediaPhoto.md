---
title: "inputMediaPhoto (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaPhoto

*Конструктор из схемы TL.*

> Forwarded photo

## Определение TL

```
inputMediaPhoto#b3ba0635 flags:# spoiler:flags.1?true id:InputPhoto ttl_seconds:flags.0?int = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| live_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this is a live photo, i.e. a still photo paired with the short video clip captured alongside it |
| id | [InputPhoto](/type/InputPhoto/) | Photo to be forwarded |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Time to live of self-destructing photo, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the document immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputDocument](/type/InputDocument/) | The short video clip of the live photo |

## Тип

[InputMedia](/type/InputMedia/)
