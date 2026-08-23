---
title: "smsjobs.getSmsJob (метод)"
original: "https://core.telegram.org/method/smsjobs.getSmsJob"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.getSmsJob

*Метод из схемы TL.*

> Get info about an SMS job (official clients only).

## Определение TL

```
smsJob#e6a1eeb8 job_id:string phone_number:string text:string = SmsJob;
---functions---
smsjobs.getSmsJob#778d902f job_id:string = SmsJob;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| job_id | [string](/type/string/) | Job ID |

## Результат

[SmsJob](/type/SmsJob/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SMSJOB_ID_INVALID | The specified job ID is invalid. |
