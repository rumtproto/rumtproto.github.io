---
title: "documentAttributeSticker"
original: "https://core.telegram.org/constructor/documentAttributeSticker"
section: ref
kind: constructor
description: "Определяет стикер"
layout: layout.njk
---

# documentAttributeSticker

Определяет стикер

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===23===
documentAttributeSticker#fb0a5727 = DocumentAttribute;

===45===
documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute;
```

#### Схема API

```
documentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>mask</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли это стикером-маской</td></tr><tr><td><strong>alt</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Альтернативное представление стикера в виде эмодзи</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Привязанный набор стикеров</td></tr><tr><td><strong>mask_coords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/MaskCoords">MaskCoords</a></td><td>Координаты маски (если это стикер-маска, наложенный на фотографию)</td></tr></tbody></table>

### Тип

[DocumentAttribute](/type/DocumentAttribute/)
