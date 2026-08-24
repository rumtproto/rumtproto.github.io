---
title: "smsjobs.join"
original: "https://core.telegram.org/method/smsjobs.join"
section: ref
kind: method
description: "Включить задания на отправку SMS (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.join

Включить задания на отправку SMS (только для официальных клиентов).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.join#a74ece2d = Bool;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>NOT_ELIGIBLE</td><td>Текущий пользователь не может присоединиться к Peer-to-Peer Login Program.</td></tr></tbody></table>
