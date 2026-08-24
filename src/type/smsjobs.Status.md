---
title: "smsjobs.Status"
original: "https://core.telegram.org/type/smsjobs.Status"
section: ref
kind: type
description: "Статус"
layout: layout.njk
---

# smsjobs.Status

Статус

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;

---functions---

smsjobs.getStatus#10a698e8 = smsjobs.Status;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/smsjobs.status">smsjobs.status</a></td><td>Статус</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/smsjobs.getStatus">smsjobs.getStatus</a></td><td>Получить статус заданий на отправку SMS (только для официальных клиентов).</td></tr></tbody></table>
