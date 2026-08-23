---
title: "videoSize (конструктор)"
original: "https://core.telegram.org/constructor/videoSize"
section: ref
kind: constructor
layout: layout.njk
---

# videoSize

*Конструктор из схемы TL.*

> An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) in MPEG4 format

## Определение TL

```
videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| type | [string](/type/string/) | [videoSize.type value »](https://core.telegram.org/api/files/#videosizetype-values) |
| w | [int](/type/int/) | Video width |
| h | [int](/type/int/) | Video height |
| size | [int](/type/int/) | File size |
| video_start_ts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[double](/type/double/) | Timestamp that should be shown as static preview to the user (seconds) |

## Тип

[VideoSize](/type/VideoSize/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
