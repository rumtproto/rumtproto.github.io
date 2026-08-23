---
title: "inputMediaDocument (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaDocument"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaDocument

*Конструктор из схемы TL.*

> Forwarded document

## Определение TL

```
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| id | [InputDocument](/type/InputDocument/) | The document to be forwarded. |
| video_cover | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputPhoto](/type/InputPhoto/) | Custom video cover. |
| video_timestamp | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Start playing the video at the specified timestamp (seconds). |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Time to live of self-destructing document, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the document immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |
| query | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Text query or emoji that was used by the user to find this sticker or GIF: used to improve search result relevance. |

## Тип

[InputMedia](/type/InputMedia/)
