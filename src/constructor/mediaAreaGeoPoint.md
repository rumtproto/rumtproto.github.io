---
title: "mediaAreaGeoPoint"
original: "https://core.telegram.org/constructor/mediaAreaGeoPoint"
section: ref
kind: constructor
description: "Представляет геометку, прикреплённую к истории."
layout: layout.njk
---

# mediaAreaGeoPoint

Представляет геометку, прикреплённую к [истории](/api/stories/).

```
mediaAreaGeoPoint#cad5452d flags:# coordinates:MediaAreaCoordinates geo:GeoPoint address:flags.0?GeoPointAddress = MediaArea;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>Размер и расположение области медиа, соответствующей стикеру с местоположением поверх медиа истории.</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Координаты геометки.</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/GeoPointAddress">GeoPointAddress</a></td><td>Необязательное текстовое представление адреса.</td></tr></tbody></table>

### Тип

[MediaArea](/type/MediaArea/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
