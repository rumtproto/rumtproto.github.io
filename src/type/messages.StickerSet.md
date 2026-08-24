---
title: "messages.StickerSet"
original: "https://core.telegram.org/type/messages.StickerSet"
section: ref
kind: type
description: "Набор стикеров"
layout: layout.njk
---

# Messages.StickerSet

Набор стикеров

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;

---functions---

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;

stickers.createStickerSet#9021ab67 flags:# masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:InputUser title:string short_name:string thumb:flags.2?InputDocument stickers:Vector<InputStickerSetItem> software:flags.3?string = messages.StickerSet;
stickers.removeStickerFromSet#f7760f51 sticker:InputDocument = messages.StickerSet;
stickers.changeStickerPosition#ffb6d4ca sticker:InputDocument position:int = messages.StickerSet;
stickers.addStickerToSet#8653febe stickerset:InputStickerSet sticker:InputStickerSetItem = messages.StickerSet;
stickers.setStickerSetThumb#a76a5392 flags:# stickerset:InputStickerSet thumb:flags.0?InputDocument thumb_document_id:flags.1?long = messages.StickerSet;
stickers.changeSticker#f5537ebc flags:# sticker:InputDocument emoji:flags.0?string mask_coords:flags.1?MaskCoords keywords:flags.2?string = messages.StickerSet;
stickers.renameStickerSet#124b1c00 stickerset:InputStickerSet title:string = messages.StickerSet;
stickers.replaceSticker#4696459a sticker:InputDocument new_sticker:InputStickerSetItem = messages.StickerSet;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickerSet">messages.stickerSet</a></td><td>Набор стикеров и стикеры внутри него</td></tr><tr><td><a href="/constructor/messages.stickerSetNotModified">messages.stickerSetNotModified</a></td><td>Набор стикеров не изменился</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getStickerSet">messages.getStickerSet</a></td><td>Получить информацию о наборе стикеров</td></tr><tr><td><a href="/method/stickers.createStickerSet">stickers.createStickerSet</a></td><td>Создать набор стикеров.</td></tr><tr><td><a href="/method/stickers.removeStickerFromSet">stickers.removeStickerFromSet</a></td><td>Удалить стикер из набора, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом.</td></tr><tr><td><a href="/method/stickers.changeStickerPosition">stickers.changeStickerPosition</a></td><td>Изменяет абсолютную позицию стикера в наборе, которому он принадлежит. Набор стикеров должен быть создан текущим пользователем или ботом.</td></tr><tr><td><a href="/method/stickers.addStickerToSet">stickers.addStickerToSet</a></td><td>Добавить стикер в набор стикеров. Набор стикеров должен быть создан текущим пользователем или ботом.</td></tr><tr><td><a href="/method/stickers.setStickerSetThumb">stickers.setStickerSetThumb</a></td><td>Задать миниатюру набора стикеров</td></tr><tr><td><a href="/method/stickers.changeSticker">stickers.changeSticker</a></td><td>Обновить ключевые слова, эмодзи или <a href="/api/stickers#mask-stickers">координаты маски</a> стикера.</td></tr><tr><td><a href="/method/stickers.renameStickerSet">stickers.renameStickerSet</a></td><td>Переименовывает набор стикеров.</td></tr><tr><td><a href="/method/stickers.replaceSticker">stickers.replaceSticker</a></td><td>Заменить стикер в <a href="/api/stickers">наборе стикеров »</a>.</td></tr></tbody></table>
