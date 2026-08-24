---
title: "BusinessAwayMessageSchedule"
original: "https://core.telegram.org/type/BusinessAwayMessageSchedule"
section: ref
kind: type
description: "Указывает, когда следует отправлять сообщения об отсутствии Telegram Business."
layout: layout.njk
---

# BusinessAwayMessageSchedule

Указывает, когда следует отправлять [сообщения об отсутствии Telegram Business](/api/business/#away-messages).

```
businessAwayMessageScheduleAlways#c9b9e2b9 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleOutsideWorkHours#c3f2f501 = BusinessAwayMessageSchedule;
businessAwayMessageScheduleCustom#cc4d9ecc start_date:int end_date:int = BusinessAwayMessageSchedule;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/businessAwayMessageScheduleAlways">businessAwayMessageScheduleAlways</a></td><td>Всегда отправлять <a href="/api/business#away-messages">сообщения об отсутствии Telegram Business</a> пользователям, которые пишут нам в личные сообщения.</td></tr><tr><td><a href="/constructor/businessAwayMessageScheduleOutsideWorkHours">businessAwayMessageScheduleOutsideWorkHours</a></td><td>Отправлять <a href="/api/business#away-messages">сообщения об отсутствии Telegram Business</a> пользователям, которые пишут нам в личные сообщения вне заданных <a href="/api/business#opening-hours">рабочих часов Telegram Business</a>.</td></tr><tr><td><a href="/constructor/businessAwayMessageScheduleCustom">businessAwayMessageScheduleCustom</a></td><td>Отправлять <a href="/api/business#away-messages">сообщения об отсутствии Telegram Business</a> пользователям, которые пишут нам в личные сообщения в указанный промежуток времени.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
