---
title: "messages.installStickerSet"
original: "https://core.telegram.org/method/messages.installStickerSet"
section: ref
kind: method
description: "Установить набор стикеров"
layout: layout.njk
---

# messages.installStickerSet

Установить набор стикеров

```
messages.stickerSetInstallResultSuccess#38641628 = messages.StickerSetInstallResult;
messages.stickerSetInstallResultArchive#35e410a8 sets:Vector<StickerSetCovered> = messages.StickerSetInstallResult;
---functions---
messages.installStickerSet#c78fe460 stickerset:InputStickerSet archived:Bool = messages.StickerSetInstallResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор стикеров, который нужно установить</td></tr><tr><td><strong>archived</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Архивировать ли набор стикеров</td></tr></tbody></table>

### Результат

[messages.StickerSetInstallResult](/type/messages.StickerSetInstallResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>STICKERSET_INVALID</td><td>Указанный набор стикеров недействителен.</td></tr></tbody></table>
