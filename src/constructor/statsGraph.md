---
title: "statsGraph"
original: "https://core.telegram.org/constructor/statsGraph"
section: ref
kind: constructor
description: "График статистики канала"
layout: layout.njk
---

# statsGraph

[График статистики канала](/api/stats/)

```
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>json</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Статистические данные</td></tr><tr><td><strong>zoom_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Токен масштабирования</td></tr></tbody></table>

### Тип

[StatsGraph](/type/StatsGraph/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.
