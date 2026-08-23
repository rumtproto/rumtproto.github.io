---
title: "channels.setStickers (метод)"
original: "https://core.telegram.org/method/channels.setStickers"
section: ref
kind: method
layout: layout.njk
---

# channels.setStickers

*Метод из схемы TL.*

> Associate a stickerset to the supergroup

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setStickers#ea8ca4f9 channel:InputChannel stickerset:InputStickerSet = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Supergroup |
| stickerset | [InputStickerSet](/type/InputStickerSet/) | The stickerset to associate |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PARTICIPANTS_TOO_FEW | Not enough participants. |
| 406 | STICKERSET_OWNER_ANONYMOUS | Provided stickerset can't be installed as group stickerset to prevent admin deanonymization. |
