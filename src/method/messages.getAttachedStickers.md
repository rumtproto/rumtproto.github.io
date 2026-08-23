---
title: "messages.getAttachedStickers (метод)"
original: "https://core.telegram.org/method/messages.getAttachedStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getAttachedStickers

*Метод из схемы TL.*

> Get stickers attached to a photo or video

## Определение TL

```
---functions---
messages.getAttachedStickers#cc5b67cc media:InputStickeredMedia = Vector<StickerSetCovered>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| media | [InputStickeredMedia](/type/InputStickeredMedia/) | Stickered media |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](/type/StickerSetCovered/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MEDIA_EMPTY | The provided media object is invalid. |
