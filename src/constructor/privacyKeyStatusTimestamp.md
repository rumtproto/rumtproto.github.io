---
title: "privacyKeyStatusTimestamp"
original: "https://core.telegram.org/constructor/privacyKeyStatusTimestamp"
section: ref
kind: constructor
description: "Можем ли мы видеть время последнего пребывания этого пользователя в сети."
layout: layout.njk
---

# privacyKeyStatusTimestamp

Можем ли мы видеть время последнего пребывания этого пользователя в сети.

Учтите: если _мы_ решили скрыть от кого-либо точное время последнего пребывания в сети (то есть от пользователей A, B, C или от всех пользователей) **и** у нас нет подписки [Premium](/api/premium/), мы не сможем видеть точное время последнего пребывания в сети этих пользователей (A, B, C или всех пользователей), даже если они _действительно_ показывают его нам.

Если эти пользователи _всё же_ показывают нам точное время последнего пребывания в сети, но мы не видим его по указанной выше причине, будет установлен флаг `by_me` в конструкторах [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/).

```
privacyKeyStatusTimestamp#bc2eab30 = PrivacyKey;
```

### Параметры

Этот конструктор не требует параметров.

### Тип

[PrivacyKey](/type/PrivacyKey/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [userStatusRecently](/constructor/userStatusRecently/)

Статус в сети: недавно был в сети

#### [userStatusLastWeek](/constructor/userStatusLastWeek/)

Статус в сети: последний раз в сети на прошлой неделе

#### [userStatusLastMonth](/constructor/userStatusLastMonth/)

Статус в сети: последний раз в сети в прошлом месяце
