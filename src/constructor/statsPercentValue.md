---
title: "statsPercentValue"
original: "https://core.telegram.org/constructor/statsPercentValue"
section: ref
kind: constructor
description: "Процентное значение в статистике канала."
layout: layout.njk
---

# statsPercentValue

[Процентное значение в статистике канала](/api/stats/).  
Процент вычисляется просто как `part * total / 100`

```
statsPercentValue#cbce2fe0 part:double total:double = StatsPercentValue;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>part</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Частичное значение</td></tr><tr><td><strong>total</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Итоговое значение</td></tr></tbody></table>

### Тип

[StatsPercentValue](/type/StatsPercentValue/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.
