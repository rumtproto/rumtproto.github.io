---
title: "stickers.changeStickerPosition"
original: "https://core.telegram.org/method/stickers.changeStickerPosition"
section: ref
kind: method
description: "Изменяет абсолютную позицию стикера в наборе, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом."
layout: layout.njk
---

# stickers.changeStickerPosition

Изменяет абсолютную позицию стикера в наборе, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.changeStickerPosition#ffb6d4ca sticker:InputDocument position:int = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Стикер</td></tr><tr><td><strong>position</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новая позиция стикера, отсчёт с нуля</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>Указанный стикер недействителен.</td></tr></tbody></table>
