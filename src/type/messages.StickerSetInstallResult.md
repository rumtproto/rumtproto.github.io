---
title: "messages.StickerSetInstallResult"
original: "https://core.telegram.org/type/messages.StickerSetInstallResult"
section: ref
kind: type
description: "Результат процесса установки набора стикеров"
layout: layout.njk
---

# Messages.StickerSetInstallResult

Результат процесса установки набора стикеров

```
messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;

---functions---

messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickerSetInstallResultSuccess">messages.stickerSetInstallResultSuccess</a></td><td>Набор стикеров успешно установлен</td></tr><tr><td><a href="/constructor/messages.stickerSetInstallResultArchive">messages.stickerSetInstallResultArchive</a></td><td>Набор стикеров установлен, но, поскольку наборов слишком много, часть из них была архивирована</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.installStickerSet">messages.installStickerSet</a></td><td>Установить набор стикеров</td></tr></tbody></table>
