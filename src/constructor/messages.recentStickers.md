---
title: "messages.recentStickers"
original: "https://core.telegram.org/constructor/messages.recentStickers"
section: ref
kind: constructor
description: "Недавно использованные стикеры"
layout: layout.njk
---

# messages.recentStickers

Недавно использованные стикеры

```
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>packs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerPack">StickerPack</a>&gt;</td><td>Эмодзи, связанные со стикерами</td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Недавние стикеры</td></tr><tr><td><strong>dates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Когда каждый стикер использовался в последний раз</td></tr></tbody></table>

### Тип

[messages.RecentStickers](/type/messages.RecentStickers/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
