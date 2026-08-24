---
title: "stickerPack"
original: "https://core.telegram.org/constructor/stickerPack"
section: ref
kind: constructor
description: "Стикерпак — это группа стикеров, связанных с одним и тем же эмодзи."
layout: layout.njk
---

# stickerPack

Стикерпак — это группа стикеров, связанных с одним и тем же эмодзи.  
Это **не** набор стикеров в привычном смысле слова; возможно, вам нужен [StickerSet](/type/StickerSet/).

```
stickerPack#12b299d4 emoticon:string documents:Vector<long> = StickerPack;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Стикеры</td></tr></tbody></table>

### Тип

[StickerPack](/type/StickerPack/)

### Связанные страницы

#### [StickerSet](/type/StickerSet/)

Представляет набор стикеров (стикерпак)
