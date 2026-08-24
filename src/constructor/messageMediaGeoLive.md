---
title: "messageMediaGeoLive"
original: "https://core.telegram.org/constructor/messageMediaGeoLive"
section: ref
kind: constructor
description: "Обозначает геопозицию в реальном времени"
layout: layout.njk
---

# messageMediaGeoLive

Обозначает [геопозицию в реальном времени](/api/live-location/)

```
messageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Геопозиция</td></tr><tr><td><strong>heading</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Для <a href="/api/live-location">геопозиций в реальном времени</a> — направление, в котором перемещается геопозиция, в градусах; 1–360</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия переданной геопозиции</td></tr><tr><td><strong>proximity_notification_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Для <a href="/api/live-location">геопозиций в реальном времени</a> — максимальное расстояние до другого участника чата для оповещений о приближении, в метрах (0–100000).</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [Трансляция геопозиции](/api/live-location/)

Telegram позволяет отправлять в чат геопозицию пользователя в реальном времени, при желании задавая оповещение о приближении.
