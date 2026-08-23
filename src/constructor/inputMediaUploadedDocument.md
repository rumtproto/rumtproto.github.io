---
title: "inputMediaUploadedDocument (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaUploadedDocument"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaUploadedDocument

*Конструктор из схемы TL.*

> New document

## Определение TL

```
inputMediaUploadedDocument#37c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| nosound_video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether to send the file as a video even if it doesn't have an audio track (i.e. if set, the [documentAttributeAnimated](/constructor/documentAttributeAnimated/) attribute will not be set even for videos without audio) |
| force_file | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Force the media file to be uploaded as document |
| spoiler | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this media should be hidden behind a spoiler warning |
| file | [InputFile](/type/InputFile/) | The [uploaded file](/api/files/) |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputFile](/type/InputFile/) | Thumbnail of the document, uploaded as for the file |
| mime_type | [string](/type/string/) | MIME type of document |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Attributes that specify the type of the document (video, audio, voice, sticker, etc.) |
| stickers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[InputDocument](/type/InputDocument/)> | Attached stickers |
| video_cover | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[InputPhoto](/type/InputPhoto/) | Start playing the video at the specified timestamp (seconds). |
| video_timestamp | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[int](/type/int/) | Start playing the video at the specified timestamp (seconds). |
| ttl_seconds | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Time to live of self-destructing document, can be 0 to disable self-destruction, 0x7FFFFFFF to self-destruct the document immediately after it's played; otherwise self-destructs ttl_seconds after it's played. |

## Тип

[InputMedia](/type/InputMedia/)

## Related pages

#### [documentAttributeAnimated](/constructor/documentAttributeAnimated/)

Defines an animated GIF

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
