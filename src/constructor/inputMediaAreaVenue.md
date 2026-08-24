---
title: "inputMediaAreaVenue"
original: "https://core.telegram.org/constructor/inputMediaAreaVenue"
section: ref
kind: constructor
description: "Представляет метку места, прикреплённую к истории, с дополнительными сведениями о заведении."
layout: layout.njk
---

# inputMediaAreaVenue

Представляет [метку места](/api/stories/#media-areas), прикреплённую к [истории](/api/stories/), с дополнительными сведениями о заведении.

```
inputMediaAreaVenue#b282217f coordinates:MediaAreaCoordinates query_id:long result_id:string = MediaArea;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>Размер и расположение области медиа, соответствующей стикеру с местоположением поверх медиа истории.</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><code>query_id</code> из <a href="/constructor/messages.botResults">messages.botResults</a>; подробнее см. <a href="/api/stories#media-areas">здесь »</a>.</td></tr><tr><td><strong>result_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>id</code> выбранного результата; подробнее см. <a href="/api/stories#media-areas">здесь »</a>.</td></tr></tbody></table>

### Тип

[MediaArea](/type/MediaArea/)

### Связанные страницы

#### [messages.botResults](/constructor/messages.botResults/)

Результат запроса к инлайн-боту

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
