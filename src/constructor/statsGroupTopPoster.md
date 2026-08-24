---
title: "statsGroupTopPoster"
original: "https://core.telegram.org/constructor/statsGroupTopPoster"
section: ref
kind: constructor
description: "Информация об активном пользователе супергруппы"
layout: layout.njk
---

# statsGroupTopPoster

Информация об активном пользователе супергруппы

```
statsGroupTopPoster#9d04af9b user_id:long messages:int avg_chars:int = StatsGroupTopPoster;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сообщений за рассматриваемый период <a href="/api/stats">статистики</a></td></tr><tr><td><strong>avg_chars</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Среднее количество символов в сообщении</td></tr></tbody></table>

### Тип

[StatsGroupTopPoster](/type/StatsGroupTopPoster/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.
