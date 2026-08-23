---
title: "messages.installStickerSet (метод)"
original: "https://core.telegram.org/method/messages.installStickerSet"
section: ref
kind: method
layout: layout.njk
---

# messages.installStickerSet

*Метод из схемы TL.*

> Install a stickerset

## Определение TL

```
messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;
---functions---
messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Stickerset to install |
| archived | [Bool](/type/Bool/) | Whether to archive stickerset |

## Результат

[messages.StickerSetInstallResult](/type/messages.StickerSetInstallResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | STICKERSET_INVALID | The provided sticker set is invalid. |
