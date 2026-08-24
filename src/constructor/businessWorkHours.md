---
title: "businessWorkHours"
original: "https://core.telegram.org/constructor/businessWorkHours"
section: ref
kind: constructor
description: "Задаёт часы работы Telegram Business."
layout: layout.njk
---

# businessWorkHours

Задаёт [часы работы Telegram Business](/api/business/#opening-hours).

```
businessWorkHours#8c92b098 flags:# open_now:flags.0?true timezone_id:string weekly_open:Vector<BusinessWeeklyOpen> = BusinessWorkHours;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>open_now</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Игнорируется при передаче в <a href="/method/account.updateBusinessWorkHours">account.updateBusinessWorkHours</a>; возвращается сервером только в <a href="/constructor/userFull">userFull</a>.<code>business_work_hours</code> и указывает, открыта ли организация в данный момент согласно текущему времени и значениям <code>weekly_open</code> и <code>timezone</code>.</td></tr><tr><td><strong>timezone_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор одного из часовых поясов, возвращаемых методом <a href="/method/help.getTimezonesList">help.getTimezonesList</a>.<br>Идентификатор часового пояса содержится в поле <a href="/constructor/timezone">timezone</a>.<code>id</code>, понятное человеку локализованное название часового пояса доступно в <a href="/constructor/timezone">timezone</a>.<code>name</code>, а поле <a href="/constructor/timezone">timezone</a>.<code>utc_offset</code> содержит смещение от UTC в секундах, которое клиент может отображать в формате чч:мм вместе с понятным человеку названием (то есть <code>$name UTC -01:00</code>).</td></tr><tr><td><strong>weekly_open</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BusinessWeeklyOpen">BusinessWeeklyOpen</a>&gt;</td><td>Список интервалов времени (не более 28), представленных конструктором <a href="/constructor/businessWeeklyOpen">businessWeeklyOpen »</a> и задающих часы работы компании.</td></tr></tbody></table>

### Тип

[BusinessWorkHours](/type/BusinessWorkHours/)

### Связанные страницы

#### [account.updateBusinessWorkHours](/method/account.updateBusinessWorkHours/)

Задать [часы работы Telegram Business](/api/business/#opening-hours).  
Эти сведения будут содержаться в поле [userFull](/constructor/userFull/).`business_work_hours`.

Чтобы удалить все часы работы, вызовите метод, не задавая поле `business_work_hours`.

Обратите внимание, что указанные пользователем часы работы необходимо соответствующим образом проверить и преобразовать перед вызовом метода, как описано [здесь »](/api/business/#opening-hours).

#### [userFull](/constructor/userFull/)

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [help.getTimezonesList](/method/help.getTimezonesList/)

Возвращает сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания [часов работы Telegram Business »](/api/business/#opening-hours).

#### [timezone](/constructor/timezone/)

Сведения о часовом поясе.

#### [businessWeeklyOpen](/constructor/businessWeeklyOpen/)

Интервал времени, задающий часы работы компании.

Обратите внимание, что указанные пользователем часы работы необходимо соответствующим образом проверить и преобразовать перед их отправкой на сервер, как описано [здесь »](/api/business/#opening-hours).

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
