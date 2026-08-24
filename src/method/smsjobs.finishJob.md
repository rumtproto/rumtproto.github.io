---
title: "smsjobs.finishJob"
original: "https://core.telegram.org/method/smsjobs.finishJob"
section: ref
kind: method
description: "Завершить задание на отправку SMS (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.finishJob

Завершить задание на отправку SMS (только для официальных клиентов).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.finishJob#4f1ebf24 flags:# job_id:string error:flags.0?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>job_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор задания.</td></tr><tr><td><strong>error</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Ошибка, если операция завершилась неудачей.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SMSJOB_ID_INVALID</td><td>Указанный идентификатор задания недействителен.</td></tr></tbody></table>
