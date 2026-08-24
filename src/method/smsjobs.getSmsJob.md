---
title: "smsjobs.getSmsJob"
original: "https://core.telegram.org/method/smsjobs.getSmsJob"
section: ref
kind: method
description: "Получить информацию о задании на отправку SMS (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.getSmsJob

Получить информацию о задании на отправку SMS (только для официальных клиентов).

```
smsJob#e6a1eeb8 job_id:string phone_number:string text:string = SmsJob;
---functions---
smsjobs.getSmsJob#778d902f job_id:string = SmsJob;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>job_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор задания</td></tr></tbody></table>

### Результат

[SmsJob](/type/SmsJob/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SMSJOB_ID_INVALID</td><td>Указанный идентификатор задания недействителен.</td></tr></tbody></table>
