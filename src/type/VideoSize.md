---
title: "VideoSize (тип)"
original: "https://core.telegram.org/type/VideoSize"
section: ref
kind: type
layout: layout.njk
---

# VideoSize

*Тип из схемы TL.*

> Represents an animated video thumbnail

## Определение TL

```
videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;
videoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;
videoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [videoSize](/constructor/videoSize/) | An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) in MPEG4 format |
| [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/) | An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [custom emoji sticker](https://core.telegram.org/api/custom-emoji). |
| [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) | An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [sticker](https://core.telegram.org/api/stickers). |
