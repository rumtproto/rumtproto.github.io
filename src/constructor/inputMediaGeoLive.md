---
title: "inputMediaGeoLive"
original: "https://core.telegram.org/constructor/inputMediaGeoLive"
section: ref
kind: constructor
description: "Геолокация в реальном времени"
layout: layout.njk
---

# inputMediaGeoLive

[Геолокация в реальном времени](/api/live-location/)

```
inputMediaGeoLive#971fa843 flags:# stopped:flags.0?true geo_point:InputGeoPoint heading:flags.2?int period:flags.1?int proximity_notification_radius:flags.3?int = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>stopped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Была ли остановлена передача геопозиции</td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Текущая геопозиция</td></tr><tr><td><strong>heading</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Для <a href="/api/live-location">геопозиций в реальном времени</a> — направление, в котором перемещается геопозиция, в градусах; 1–360.</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Срок действия текущего местоположения</td></tr><tr><td><strong>proximity_notification_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Для <a href="/api/live-location">геопозиций в реальном времени</a> — максимальное расстояние до другого участника чата для оповещений о приближении, в метрах (0–100000)</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)

### Связанные страницы

#### [Трансляция геопозиции](/api/live-location/)

Telegram позволяет отправлять в чат геопозицию пользователя в реальном времени, при желании задавая оповещение о приближении.
