---
title: "botInlineMessageMediaGeo"
original: "https://core.telegram.org/constructor/botInlineMessageMediaGeo"
section: ref
kind: constructor
description: "Отправить геопозицию"
layout: layout.njk
---

# botInlineMessageMediaGeo

Отправить геопозицию

```
botInlineMessageMediaGeo#51846fd flags:# geo:GeoPoint heading:flags.0?int period:flags.1?int proximity_notification_radius:flags.3?int reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Геопозиция</td></tr><tr><td><strong>heading</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Для <a href="/api/live-location">геопозиций в реальном времени</a> — направление, в котором перемещается геопозиция, в градусах; 1–360.</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Срок действия</td></tr><tr><td><strong>proximity_notification_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Для <a href="/api/live-location">геопозиций в реальном времени</a> — максимальное расстояние до другого участника чата для оповещений о приближении, в метрах (0–100000).</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Инлайн-клавиатура</td></tr></tbody></table>

### Тип

[BotInlineMessage](/type/BotInlineMessage/)

### Связанные страницы

#### [Трансляция геопозиции](/api/live-location/)

Telegram позволяет отправлять в чат геопозицию пользователя в реальном времени, при желании задавая оповещение о приближении.
