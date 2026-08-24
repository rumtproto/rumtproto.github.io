---
title: "businessAwayMessageScheduleCustom"
original: "https://core.telegram.org/constructor/businessAwayMessageScheduleCustom"
section: ref
kind: constructor
description: "Отправлять сообщения об отсутствии Telegram Business пользователям, которые пишут нам в личные сообщения в указанный промежуток времени."
layout: layout.njk
---

# businessAwayMessageScheduleCustom

Отправлять [сообщения об отсутствии Telegram Business](/api/business/#away-messages) пользователям, которые пишут нам в личные сообщения в указанный промежуток времени.

```
businessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата начала (временная метка UNIX).</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата окончания (временная метка UNIX).</td></tr></tbody></table>

### Тип

[BusinessAwayMessageSchedule](/type/BusinessAwayMessageSchedule/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
