---
title: "videoSizeEmojiMarkup (конструктор)"
original: "https://core.telegram.org/constructor/videoSizeEmojiMarkup"
section: ref
kind: constructor
layout: layout.njk
---

# videoSizeEmojiMarkup

*Конструктор из схемы TL.*

> An [animated profile picture](https://core.telegram.org/api/files/#animated-profile-pictures) based on a [custom emoji sticker](https://core.telegram.org/api/custom-emoji).

## Определение TL

```
videoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoji_id | [long](/type/long/) | [Custom emoji ID](https://core.telegram.org/api/custom-emoji): the custom emoji sticker is shown at the center of the profile picture and occupies at most 67% of it. |
| background_colors | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | 1, 2, 3 or 4 RBG-24 colors used to generate a solid (1), gradient (2) or freeform gradient (3, 4) background, similar to how [fill wallpapers](https://core.telegram.org/api/wallpapers#fill-types) are generated. The rotation angle for gradient backgrounds is 0. |

## Тип

[VideoSize](/type/VideoSize/)

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
