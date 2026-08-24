---
title: "messages.allStickers"
original: "https://core.telegram.org/constructor/messages.allStickers"
section: ref
kind: constructor
description: "Информация обо всех установленных стикерах"
layout: layout.njk
---

# messages.allStickers

Информация обо всех установленных стикерах

```
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>sets</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerSet">StickerSet</a>&gt;</td><td>Все наборы стикеров</td></tr></tbody></table>

### Тип

[messages.AllStickers](/type/messages.AllStickers/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
