---
title: "inputMediaDocumentExternal (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaDocumentExternal"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaDocumentExternal

*Конструктор из схемы TL.*

> Document that will be downloaded by the telegram servers

## Определение TL

```
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| url | [string](/type/string/) | URL of the document |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Time to live of self-destructing document, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the document immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |
| video_cover | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputPhoto](/type/InputPhoto/) | Custom video cover. |
| video_timestamp | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Start playing the video at the specified timestamp (seconds). |

## Тип

[InputMedia](/type/InputMedia/)
