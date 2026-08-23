---
title: "messages.uninstallStickerSet (метод)"
original: "https://core.telegram.org/method/messages.uninstallStickerSet"
section: ref
kind: method
layout: layout.njk
---

# messages.uninstallStickerSet

*Метод из схемы TL.*

> Uninstall a stickerset

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.uninstallStickerSet#f96e55de stickerset:InputStickerSet = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | The stickerset to uninstall |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | STICKERSET_INVALID | The provided sticker set is invalid. |
