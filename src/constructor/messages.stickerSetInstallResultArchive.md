---
title: "messages.stickerSetInstallResultArchive (конструктор)"
original: "https://core.telegram.org/constructor/messages.stickerSetInstallResultArchive"
section: ref
kind: constructor
layout: layout.njk
---

# messages.stickerSetInstallResultArchive

*Конструктор из схемы TL.*

> The stickerset was installed, but since there are too many stickersets some were archived

## Определение TL

```
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| sets | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](/type/StickerSetCovered/)> | Archived stickersets |

## Тип

[messages.StickerSetInstallResult](/type/messages.StickerSetInstallResult/)
