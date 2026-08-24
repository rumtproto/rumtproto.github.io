---
title: "statsGroupTopAdmin"
original: "https://core.telegram.org/constructor/statsGroupTopAdmin"
section: ref
kind: constructor
description: "Информация об активном администраторе супергруппы"
layout: layout.njk
---

# statsGroupTopAdmin

Информация об активном администраторе супергруппы

```
statsGroupTopAdmin#d7584c87 user_id:long deleted:int kicked:int banned:int = StatsGroupTopAdmin;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>deleted</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество удалённых сообщений за рассматриваемый период <a href="/api/stats">статистики</a></td></tr><tr><td><strong>kicked</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество исключённых пользователей за рассматриваемый период <a href="/api/stats">статистики</a></td></tr><tr><td><strong>banned</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество заблокированных пользователей за рассматриваемый период <a href="/api/stats">статистики</a></td></tr></tbody></table>

### Тип

[StatsGroupTopAdmin](/type/StatsGroupTopAdmin/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.
