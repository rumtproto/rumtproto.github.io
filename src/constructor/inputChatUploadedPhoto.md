---
title: "inputChatUploadedPhoto (конструктор)"
original: "https://core.telegram.org/constructor/inputChatUploadedPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# inputChatUploadedPhoto

*Конструктор из схемы TL.*

> New photo to be set as group profile photo.
> The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.

## Определение TL

```
inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| file | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputFile](/type/InputFile/) | File saved in parts using the method [upload.saveFilePart](/method/upload.saveFilePart/) |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputFile](/type/InputFile/) | Square video for animated profile picture |
| video_start_ts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[double](/type/double/) | Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if video or video_emoji_markup is set. |
| video_emoji_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[VideoSize](/type/VideoSize/) | Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/) or a [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) constructor. |

## Тип

[InputChatPhoto](/type/InputChatPhoto/)

## Related pages

#### [upload.saveFilePart](/method/upload.saveFilePart/)

Saves a part of file for further sending to one of the methods.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [custom emoji sticker](https://core.telegram.org/api/custom-emoji).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [sticker](https://core.telegram.org/api/stickers).
