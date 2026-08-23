---
title: "inputMediaUploadedPhoto (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaUploadedPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaUploadedPhoto

*Конструктор из схемы TL.*

> Photo

## Определение TL

```
inputMediaUploadedPhoto#1e287d04 flags:# spoiler:flags.2?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| live_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is a live photo, i.e. a still photo paired with the short video clip captured alongside it |
| file | [InputFile](/type/InputFile/) | The [uploaded file](/api/files/) |
| stickers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[InputDocument](/type/InputDocument/)> | Attached mask stickers |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Time to live of self-destructing photo, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the photo immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputDocument](/type/InputDocument/) | The short video clip of the live photo |

## Тип

[InputMedia](/type/InputMedia/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
