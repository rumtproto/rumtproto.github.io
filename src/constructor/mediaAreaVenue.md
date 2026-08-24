---
title: "mediaAreaVenue"
original: "https://core.telegram.org/constructor/mediaAreaVenue"
section: ref
kind: constructor
description: "Представляет метку места, прикреплённую к истории, с дополнительными сведениями о заведении."
layout: layout.njk
---

# mediaAreaVenue

Представляет метку места, прикреплённую к [истории](/api/stories/), с дополнительными сведениями о заведении.

```
mediaAreaVenue#be82db9c coordinates:MediaAreaCoordinates geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MediaArea;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>Размер и расположение области медиа, соответствующей стикеру с местоположением поверх медиа истории.</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Координаты заведения</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название заведения</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Поставщик данных о заведениях: в настоящее время требуется поддержка только "foursquare".</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор заведения в базе данных поставщика</td></tr><tr><td><strong>venue_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип заведения в базе данных поставщика</td></tr></tbody></table>

### Тип

[MediaArea](/type/MediaArea/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
