---
title: "messages.getFavedStickers"
original: "https://core.telegram.org/method/messages.getFavedStickers"
section: ref
kind: method
description: "Получить избранные стикеры"
layout: layout.njk
---

# messages.getFavedStickers

Получить избранные стикеры

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;
---functions---
messages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[messages.FavedStickers](/type/messages.FavedStickers/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
