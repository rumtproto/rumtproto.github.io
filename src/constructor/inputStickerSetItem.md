---
title: "inputStickerSetItem"
original: "https://core.telegram.org/constructor/inputStickerSetItem"
section: ref
kind: constructor
description: "Стикер в наборе стикеров"
layout: layout.njk
---

# inputStickerSetItem

Стикер в наборе стикеров

```
inputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Стикер</td></tr><tr><td><strong>emoji</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Связанный эмодзи</td></tr><tr><td><strong>mask_coords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/MaskCoords">MaskCoords</a></td><td>Координаты для стикера-маски</td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Набор ключевых слов, разделённых запятыми (нельзя указывать для стикеров-масок)</td></tr></tbody></table>

### Тип

[InputStickerSetItem](/type/InputStickerSetItem/)
