---
title: "stickers.deleteStickerSet"
original: "https://core.telegram.org/method/stickers.deleteStickerSet"
section: ref
kind: method
description: "Удаляет созданный нами набор стикеров."
layout: layout.njk
---

# stickers.deleteStickerSet

Удаляет созданный нами набор стикеров.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stickers.deleteStickerSet#87704394 stickerset:InputStickerSet = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор стикеров, который нужно удалить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKERSET_INVALID</td><td>Указанный набор стикеров недействителен.</td></tr></tbody></table>
