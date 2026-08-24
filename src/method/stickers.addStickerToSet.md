---
title: "stickers.addStickerToSet"
original: "https://core.telegram.org/method/stickers.addStickerToSet"
section: ref
kind: method
description: "Добавить стикер в набор стикеров. Набор стикеров должен быть создан текущим пользователем или ботом."
layout: layout.njk
---

# stickers.addStickerToSet

Добавить стикер в набор стикеров. Набор стикеров должен быть создан текущим пользователем или ботом.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор стикеров</td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputStickerSetItem">InputStickerSetItem</a></td><td>Стикер</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKERPACK_STICKERS_TOO_MUCH</td><td>В этом наборе стикеров слишком много стикеров, добавить ещё нельзя.</td></tr><tr><td>406</td><td>STICKERSET_INVALID</td><td>Указанный набор стикеров недействителен.</td></tr><tr><td>400</td><td>STICKERS_TOO_MUCH</td><td>В этом наборе стикеров слишком много стикеров, добавить ещё нельзя.</td></tr><tr><td>400</td><td>STICKER_PNG_NOPNG</td><td>Один из указанных стикеров не является корректным файлом PNG.</td></tr><tr><td>400</td><td>STICKER_TGS_NOTGS</td><td>Указан недопустимый стикер TGS.</td></tr></tbody></table>
