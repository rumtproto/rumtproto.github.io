---
title: "messageMediaDocument (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaDocument"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaDocument

*Конструктор из схемы TL.*

> Document (video, audio, voice, sticker, any media type except photo)

## Определение TL

```
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| nopremium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is a normal sticker, if not set this is a premium sticker and a premium sticker animation must be played. |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether this is a video. |
| round | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether this is a round video. |
| voice | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether this is a voice message. |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Document](/type/Document/) | Attached document |
| alt_documents | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Videos only, contains alternative qualities of the video. |
| video_cover | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[Photo](/type/Photo/) | Custom video cover. |
| video_timestamp | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Start playing the video at the specified timestamp (seconds). |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Time to live of self-destructing document, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the document immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |

## Тип

[MessageMedia](/type/MessageMedia/)
