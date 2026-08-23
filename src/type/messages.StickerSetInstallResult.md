---
title: "Messages.StickerSetInstallResult (тип)"
original: "https://core.telegram.org/type/messages.StickerSetInstallResult"
section: ref
kind: type
layout: layout.njk
---

# Messages.StickerSetInstallResult

*Тип из схемы TL.*

> Result of stickerset installation process

## Определение TL

```
messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;

---functions---

messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.stickerSetInstallResultSuccess](/constructor/messages.stickerSetInstallResultSuccess/) | The stickerset was installed successfully |
| [messages.stickerSetInstallResultArchive](/constructor/messages.stickerSetInstallResultArchive/) | The stickerset was installed, but since there are too many stickersets some were archived |

## Методы

| Method | Описание |
|---|---|
| [messages.installStickerSet](/method/messages.installStickerSet/) | Install a stickerset |
