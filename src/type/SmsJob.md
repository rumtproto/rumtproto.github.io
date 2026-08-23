---
title: "SmsJob (тип)"
original: "https://core.telegram.org/type/SmsJob"
section: ref
kind: type
layout: layout.njk
---

# SmsJob

*Тип из схемы TL.*

> Info about an SMS job.

## Определение TL

```
smsJob#e6a1eeb8 job_id:string phone_number:string text:string = SmsJob;

---functions---

smsjobs.getSmsJob#778d902f job_id:string = SmsJob;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [smsJob](/constructor/smsJob/) | Info about an SMS job. |

## Методы

| Method | Описание |
|---|---|
| [smsjobs.getSmsJob](/method/smsjobs.getSmsJob/) | Get info about an SMS job (official clients only). |
