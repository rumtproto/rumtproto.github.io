---
title: "stickerSetFullCovered"
original: "https://core.telegram.org/constructor/stickerSetFullCovered"
section: ref
kind: constructor
description: "Предпросмотр набора стикеров со всеми входящими в него стикерами."
layout: layout.njk
---

# stickerSetFullCovered

Предпросмотр набора стикеров со всеми входящими в него стикерами.  
Сейчас используется только для [наборов стикеров с пользовательскими эмодзи](/api/custom-emoji/), чтобы избежать дополнительного вызова [messages.getStickerSet](/method/messages.getStickerSet/).

```
stickerSetFullCovered#40d13c0e set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = StickerSetCovered;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>set</strong></td><td style="text-align: center;"><a href="/type/StickerSet">StickerSet</a></td><td>Набор стикеров</td></tr><tr><td><strong>packs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerPack">StickerPack</a>&gt;</td><td>Сведения об эмодзи для каждого стикера в наборе</td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StickerKeyword">StickerKeyword</a>&gt;</td><td>Ключевые слова для некоторых или для всех стикеров набора.</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Стикеры</td></tr></tbody></table>

### Тип

[StickerSetCovered](/type/StickerSetCovered/)

### Связанные страницы

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [messages.getStickerSet](/method/messages.getStickerSet/)

Получить информацию о наборе стикеров
