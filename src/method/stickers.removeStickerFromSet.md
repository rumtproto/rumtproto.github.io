---
title: "stickers.removeStickerFromSet"
original: "https://core.telegram.org/method/stickers.removeStickerFromSet"
section: ref
kind: method
description: "Удалить стикер из набора, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом."
layout: layout.njk
---

# stickers.removeStickerFromSet

Удалить стикер из набора, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Стикер, который нужно удалить</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>Указанный стикер недействителен.</td></tr></tbody></table>
