---
title: "account.updateBirthday"
original: "https://core.telegram.org/method/account.updateBirthday"
section: ref
kind: method
description: "Обновить нашу дату рождения, подробнее см. здесь »."
layout: layout.njk
---

# account.updateBirthday

Обновить нашу дату рождения, [подробнее см. здесь »](/api/profile/#birthday).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBirthday#cc6e0c11 flags:# birthday:flags.0?Birthday = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>birthday</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Birthday">Birthday</a></td><td>День рождения.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BIRTHDAY_INVALID</td><td>Указан недопустимый возраст, он должен быть в диапазоне от 0 до 150 лет.</td></tr></tbody></table>

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
