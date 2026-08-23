---
title: "documentAttributeVideo (конструктор)"
original: "https://core.telegram.org/constructor/documentAttributeVideo"
section: ref
kind: constructor
layout: layout.njk
---

# documentAttributeVideo

*Конструктор из схемы TL.*

> Defines a video
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===23===
> documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute;
> ===66===
> documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute;
> ```
> #### API schema

## Определение TL

```
documentAttributeVideo#43c57c48 flags:# round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:double w:int h:int preload_prefix_size:flags.2?int video_start_ts:flags.4?double video_codec:flags.5?string = DocumentAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| round_message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a round video |
| supports_streaming | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the video supports streaming |
| nosound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the specified document is a video file with no audio tracks |
| duration | [double](/type/double/) | Duration in seconds |
| w | [int](/type/int/) | Video width |
| h | [int](/type/int/) | Video height |
| preload_prefix_size | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Number of bytes to preload when preloading videos (particularly [video stories](https://core.telegram.org/api/stories)). |
| video_start_ts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[double](/type/double/) | Floating point UNIX timestamp in seconds, indicating the frame of the video that should be used as static preview and thumbnail. |
| video_codec | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | Codec used for the video, i.e. "h264", "h265", or "av1" |

## Тип

[DocumentAttribute](/type/DocumentAttribute/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
