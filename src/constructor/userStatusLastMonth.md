---
title: "userStatusLastMonth"
original: "https://core.telegram.org/constructor/userStatusLastMonth"
section: ref
kind: constructor
description: "Статус в сети: последний раз в сети в прошлом месяце"
layout: layout.njk
---

# userStatusLastMonth

Статус в сети: последний раз в сети в прошлом месяце

```
userStatusLastMonth#65899777 flags:# by_me:flags.0?true = UserStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>by_me</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, точный статус этого пользователя на самом деле нам доступен, но чтобы его увидеть, нужно сначала приобрести подписку <a href="/api/premium">Premium</a> либо разрешить этому пользователю видеть <em>наше</em> точное время последнего посещения. Подробнее <a href="/constructor/privacyKeyStatusTimestamp">см. здесь »</a>.</td></tr></tbody></table>

### Тип

[UserStatus](/type/UserStatus/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [privacyKeyStatusTimestamp](/constructor/privacyKeyStatusTimestamp/)

Можем ли мы видеть время последнего пребывания этого пользователя в сети.

Учтите: если _мы_ решили скрыть от кого-либо точное время последнего пребывания в сети (то есть от пользователей A, B, C или от всех пользователей) **и** у нас нет подписки [Premium](/api/premium/), мы не сможем видеть точное время последнего пребывания в сети этих пользователей (A, B, C или всех пользователей), даже если они _действительно_ показывают его нам.

Если эти пользователи _всё же_ показывают нам точное время последнего пребывания в сети, но мы не видим его по указанной выше причине, будет установлен флаг `by_me` в конструкторах [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/).
