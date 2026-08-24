---
title: "account.saveMusic"
original: "https://core.telegram.org/method/account.saveMusic"
section: ref
kind: method
description: "Добавляет или удаляет композицию из профиля текущего пользователя; подробнее о вкладке с музыкой на странице профиля см. здесь »."
layout: layout.njk
---

# account.saveMusic

Добавляет или удаляет композицию из профиля текущего пользователя; подробнее о вкладке с музыкой на странице профиля [см. здесь »](/api/profile/#music).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveMusic#b26732a9 flags:# unsave:flags.0?true id:InputDocument after_id:flags.1?InputDocument = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, удаляет песню.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Композиция, которую нужно добавить или удалить; при изменении порядка композиций с помощью <code>after_id</code> может быть уже добавленной композицией. Добавление уже добавленной композиции никогда не приводит к её повторному добавлению, а лишь перемещает её в начало списка композиций (или после композиции, переданной в <code>after_id</code>).</td></tr><tr><td><strong>after_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputDocument">InputDocument</a></td><td>Если установлено, композиция будет добавлена после переданной композиции (она уже должна быть закреплена в профиле).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DOCUMENT_INVALID</td><td>Указанный документ недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
