---
title: "smsjobs.getStatus"
original: "https://core.telegram.org/method/smsjobs.getStatus"
section: ref
kind: method
description: "Получить статус заданий на отправку SMS (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.getStatus

Получить статус заданий на отправку SMS (только для официальных клиентов).

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;
---functions---
smsjobs.getStatus#10a698e8 = smsjobs.Status;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[smsjobs.Status](/type/smsjobs.Status/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>Текущий пользователь не присоединился к Peer-to-Peer Login Program.</td></tr></tbody></table>
