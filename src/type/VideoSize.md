---
title: "VideoSize"
original: "https://core.telegram.org/type/VideoSize"
section: ref
kind: type
description: "Представляет анимированную миниатюру видео"
layout: layout.njk
---

# VideoSize

Представляет анимированную миниатюру видео

```
videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;
videoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;
videoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/videoSize">videoSize</a></td><td><a href="/api/files#animated-profile-pictures">Анимированный аватар</a> в формате MPEG4</td></tr><tr><td><a href="/constructor/videoSizeEmojiMarkup">videoSizeEmojiMarkup</a></td><td><a href="/api/files#animated-profile-pictures">Анимированный аватар</a> на основе <a href="/api/custom-emoji">стикера пользовательского эмодзи</a>.</td></tr><tr><td><a href="/constructor/videoSizeStickerMarkup">videoSizeStickerMarkup</a></td><td><a href="/api/files#animated-profile-pictures">Анимированный аватар</a> на основе <a href="/api/stickers">стикера</a>.</td></tr></tbody></table>
