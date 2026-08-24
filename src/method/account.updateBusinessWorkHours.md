---
title: "account.updateBusinessWorkHours"
original: "https://core.telegram.org/method/account.updateBusinessWorkHours"
section: ref
kind: method
description: "Задать часы работы Telegram Business."
layout: layout.njk
---

# account.updateBusinessWorkHours

Задать [часы работы Telegram Business](/api/business/#opening-hours).  
Эти сведения будут содержаться в поле [userFull](/constructor/userFull/).`business_work_hours`.

Чтобы удалить все часы работы, вызовите метод, не задавая поле `business_work_hours`.

Обратите внимание, что указанные пользователем часы работы необходимо соответствующим образом проверить и преобразовать перед вызовом метода, как описано [здесь »](/api/business/#opening-hours).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessWorkHours#4b00e066 flags:# business_work_hours:flags.0?BusinessWorkHours = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>business_work_hours</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/BusinessWorkHours">BusinessWorkHours</a></td><td>Часы работы (необязательно; если не задано, все часы работы удаляются).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_WORK_HOURS_EMPTY</td><td>Не указаны рабочие часы.</td></tr><tr><td>400</td><td>BUSINESS_WORK_HOURS_PERIOD_INVALID</td><td>Указанные часы работы недействительны, точные требования см. <a href="/api/business#opening-hours">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>TIMEZONE_INVALID</td><td>Указанный часовой пояс не существует.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [userFull](/constructor/userFull/)

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).
