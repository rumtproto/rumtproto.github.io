---
title: "stickers.setStickerSetThumb"
original: "https://core.telegram.org/method/stickers.setStickerSetThumb"
section: ref
kind: method
description: "Задать миниатюру набора стикеров"
layout: layout.njk
---

# stickers.setStickerSetThumb

Задать миниатюру набора стикеров

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.setStickerSetThumb#a76a5392 flags:# stickerset:InputStickerSet thumb:flags.0?InputDocument thumb_document_id:flags.1?long = messages.StickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор стикеров</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputDocument">InputDocument</a></td><td>Миниатюра (только для обычных наборов стикеров, но не для наборов пользовательских эмодзи).</td></tr><tr><td><strong>thumb_document_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Только для <a href="/api/custom-emoji">наборов стикеров с пользовательскими эмодзи</a> — идентификатор пользовательского эмодзи из набора, который следует использовать как миниатюру; передайте 0, чтобы использовать первый пользовательский эмодзи набора.</td></tr></tbody></table>

### Результат

[messages.StickerSet](/type/messages.StickerSet/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKERSET_INVALID</td><td>Указанный набор стикеров недействителен.</td></tr><tr><td>400</td><td>STICKER_THUMB_PNG_NOPNG</td><td>Передан некорректный файл миниатюры для набора стикеров, ожидается PNG / WEBP.</td></tr><tr><td>400</td><td>STICKER_THUMB_TGS_NOTGS</td><td>Передан некорректный файл миниатюры TGS для набора стикеров.</td></tr></tbody></table>

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.
