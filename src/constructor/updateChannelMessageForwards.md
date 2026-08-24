---
title: "updateChannelMessageForwards"
original: "https://core.telegram.org/constructor/updateChannelMessageForwards"
section: ref
kind: constructor
description: "Изменился счётчик пересылок сообщения в канале"
layout: layout.njk
---

# updateChannelMessageForwards

Изменился счётчик пересылок сообщения в канале

```
updateChannelMessageForwards#d29a27f4 channel_id:long id:int forwards:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор канала</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новый счётчик пересылок</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
