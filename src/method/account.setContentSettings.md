---
title: "account.setContentSettings"
original: "https://core.telegram.org/method/account.setContentSettings"
section: ref
kind: method
description: "Задать настройки материалов деликатного характера (для показа или скрытия контента NSFW)"
layout: layout.njk
---

# account.setContentSettings

Задать настройки материалов деликатного характера (для показа или скрытия контента NSFW)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setContentSettings#b574b16b flags:# sensitive_enabled:flags.0?true = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>sensitive_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Включить содержимое NSFW</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>SENSITIVE_CHANGE_FORBIDDEN</td><td>Вы не можете изменить свои настройки материалов деликатного характера.</td></tr></tbody></table>
