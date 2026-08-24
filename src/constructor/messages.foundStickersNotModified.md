---
title: "messages.foundStickersNotModified"
original: "https://core.telegram.org/constructor/messages.foundStickersNotModified"
section: ref
kind: constructor
description: "По указанному запросу новых стикеров не найдено"
layout: layout.njk
---

# messages.foundStickersNotModified

По указанному запросу новых стикеров не найдено

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>[@term:next_offset] Смещение для <a href="/api/offsets">постраничной выборки</a></td></tr></tbody></table>

### Тип

[messages.FoundStickers](/type/messages.FoundStickers/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
