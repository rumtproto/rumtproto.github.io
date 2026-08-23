---
title: "inputMediaPhotoExternal (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaPhotoExternal"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaPhotoExternal

*Конструктор из схемы TL.*

> New photo that will be uploaded by the server using the specified URL

## Определение TL

```
inputMediaPhotoExternal#e5bbfe1a flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| url | [string](/type/string/) | URL of the photo |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Time to live of self-destructing photo, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the photo immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |

## Тип

[InputMedia](/type/InputMedia/)
