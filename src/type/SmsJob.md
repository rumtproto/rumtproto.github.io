---
title: "SmsJob"
original: "https://core.telegram.org/type/SmsJob"
section: ref
kind: type
description: "Информация о задании на отправку SMS."
layout: layout.njk
---

# SmsJob

Информация о задании на отправку SMS.

```
smsJob#e6a1eeb8 job_id:string phone_number:string text:string = SmsJob;

---functions---

smsjobs.getSmsJob#778d902f job_id:string = SmsJob;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/smsJob">smsJob</a></td><td>Информация о задании на отправку SMS.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/smsjobs.getSmsJob">smsjobs.getSmsJob</a></td><td>Получить информацию о задании на отправку SMS (только для официальных клиентов).</td></tr></tbody></table>
