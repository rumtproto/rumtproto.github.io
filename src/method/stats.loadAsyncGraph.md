---
title: "stats.loadAsyncGraph"
original: "https://core.telegram.org/method/stats.loadAsyncGraph"
section: ref
kind: method
description: "Асинхронно загрузить график статистики канала"
layout: layout.njk
---

# stats.loadAsyncGraph

Асинхронно загрузить [график статистики канала](/api/stats/)

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;
---functions---
stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен графика из конструктора <a href="/constructor/statsGraphAsync">statsGraphAsync</a></td></tr><tr><td><strong>x</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Значение масштабирования, если требуется</td></tr></tbody></table>

### Результат

[StatsGraph](/type/StatsGraph/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GRAPH_EXPIRED_RELOAD</td><td>Срок действия этого графика истёк, получите новый токен графика.</td></tr><tr><td>400</td><td>GRAPH_INVALID_RELOAD</td><td>Указан недействительный токен графика; перезагрузите статистику и передайте обновлённый токен.</td></tr><tr><td>400</td><td>GRAPH_OUTDATED_RELOAD</td><td>График устарел, получите новый асинхронный токен с помощью stats.getBroadcastStats.</td></tr></tbody></table>

### Связанные страницы

#### [statsGraphAsync](/constructor/statsGraphAsync/)

Этот [график статистики канала](/api/stats/) должен формироваться асинхронно с помощью [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/), чтобы снизить нагрузку на сервер

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.
