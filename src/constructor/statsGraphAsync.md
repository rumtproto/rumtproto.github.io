---
title: "statsGraphAsync"
original: "https://core.telegram.org/constructor/statsGraphAsync"
section: ref
kind: constructor
description: "Этот график статистики канала должен формироваться асинхронно с помощью stats.loadAsyncGraph, чтобы снизить нагрузку на сервер"
layout: layout.njk
---

# statsGraphAsync

Этот [график статистики канала](/api/stats/) должен формироваться асинхронно с помощью [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/), чтобы снизить нагрузку на сервер

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен для получения асинхронного графика</td></tr></tbody></table>

### Тип

[StatsGraph](/type/StatsGraph/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/)

Асинхронно загрузить [график статистики канала](/api/stats/)
