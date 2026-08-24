---
title: "StatsGraph"
original: "https://core.telegram.org/type/StatsGraph"
section: ref
kind: type
description: "График статистики канала"
layout: layout.njk
---

# StatsGraph

График статистики канала

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;

---functions---

stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/statsGraphAsync">statsGraphAsync</a></td><td>Этот <a href="/api/stats">график статистики канала</a> должен формироваться асинхронно с помощью <a href="/method/stats.loadAsyncGraph">stats.loadAsyncGraph</a>, чтобы снизить нагрузку на сервер</td></tr><tr><td><a href="/constructor/statsGraphError">statsGraphError</a></td><td>При построении <a href="/api/stats">графика статистики</a> произошла ошибка</td></tr><tr><td><a href="/constructor/statsGraph">statsGraph</a></td><td><a href="/api/stats">График статистики канала</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stats.loadAsyncGraph">stats.loadAsyncGraph</a></td><td>Загрузить <a href="/api/stats">график статистики канала</a> асинхронно</td></tr></tbody></table>
