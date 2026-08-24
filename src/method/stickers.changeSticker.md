---
title: "stickers.changeSticker"
original: "https://core.telegram.org/method/stickers.changeSticker"
section: ref
kind: method
description: "Обновить ключевые слова, эмодзи или координаты маски стикера."
layout: layout.njk
---

# stickers.changeSticker

Обновить ключевые слова, эмодзи или [координаты маски](/api/stickers/#mask-stickers) стикера.

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.changeSticker#f5537ebc flags:# sticker:InputDocument emoji:flags.0?string mask_coords:flags.1?MaskCoords keywords:flags.2?string = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Стикер</td></tr><tr><td><strong>emoji</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если установлено, обновляет список эмодзи, связанных со стикером</td></tr><tr><td><strong>mask_coords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/MaskCoords">MaskCoords</a></td><td>Если установлено, обновляет <a href="/api/stickers#mask-stickers">координаты маски</a></td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Если установлено, обновляет ключевые слова стикера (через запятую). Нельзя указывать для стикеров-масок.</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>Указанный стикер недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
