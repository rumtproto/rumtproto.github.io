---
title: "stickers.replaceSticker"
original: "https://core.telegram.org/method/stickers.replaceSticker"
section: ref
kind: method
description: "Заменить стикер в наборе стикеров »."
layout: layout.njk
---

# stickers.replaceSticker

Заменить стикер в [наборе стикеров »](/api/stickers/).

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Прежний документ стикера.</td></tr><tr><td><strong>new_sticker</strong></td><td style="text-align: center;"><a href="/type/InputStickerSetItem">InputStickerSetItem</a></td><td>Новый стикер.</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>Указанный стикер недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
