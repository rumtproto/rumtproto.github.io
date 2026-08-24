---
title: "smsjobs.updateSettings"
original: "https://core.telegram.org/method/smsjobs.updateSettings"
section: ref
kind: method
description: "Обновить настройки заданий SMS (только для официальных клиентов)."
layout: layout.njk
---

# smsjobs.updateSettings

Обновить настройки заданий SMS (только для официальных клиентов).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.updateSettings#93fa0bf flags:# allow_international:flags.0?true = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>allow_international</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешить международные номера?</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>NOT_JOINED</td><td>Текущий пользователь не присоединился к Peer-to-Peer Login Program.</td></tr></tbody></table>
