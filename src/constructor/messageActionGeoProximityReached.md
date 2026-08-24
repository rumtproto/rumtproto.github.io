---
title: "messageActionGeoProximityReached"
original: "https://core.telegram.org/constructor/messageActionGeoProximityReached"
section: ref
kind: constructor
description: "Участник чата оказался рядом с другим пользователем"
layout: layout.njk
---

# messageActionGeoProximityReached

Участник чата оказался рядом с другим пользователем

```
messageActionGeoProximityReached#98e0d697 from_id:Peer to_id:Peer distance:int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Пользователь или чат, который оказался рядом с <code>to_id</code></td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Пользователь или чат, подписавшийся на <a href="/api/live-location#proximity-alert">оповещения о приближении по геопозиции в реальном времени</a></td></tr><tr><td><strong>distance</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Расстояние в метрах (0–100000)</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Трансляция геопозиции](/api/live-location/)

Telegram позволяет отправлять в чат геопозицию пользователя в реальном времени, при желании задавая оповещение о приближении.
