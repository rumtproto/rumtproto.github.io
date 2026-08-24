---
title: "smsjobs.leave"
original: "https://core.telegram.org/method/smsjobs.leave"
section: ref
kind: method
description: "Отключить SMS-задания (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.leave

Отключить SMS-задания (только для официальных клиентов).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.leave#9898ad73 = Bool;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>Текущий пользователь не присоединился к Peer-to-Peer Login Program.</td></tr></tbody></table>
