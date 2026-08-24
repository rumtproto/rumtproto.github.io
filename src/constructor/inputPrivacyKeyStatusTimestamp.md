---
title: "inputPrivacyKeyStatusTimestamp"
original: "https://core.telegram.org/constructor/inputPrivacyKeyStatusTimestamp"
section: ref
kind: constructor
description: "Смогут ли другие видеть точное время нашего последнего пребывания в сети."
layout: layout.njk
---

# inputPrivacyKeyStatusTimestamp

Смогут ли другие видеть точное время нашего последнего пребывания в сети.

Учтите: если _мы_ решили скрыть от кого-либо точное время последнего пребывания в сети (то есть от пользователей A, B, C или от всех пользователей) **и** у нас нет подписки [Premium](/api/premium/), мы не сможем видеть точное время последнего пребывания в сети этих пользователей (A, B, C или всех пользователей), даже если они _действительно_ показывают его нам.

Если эти пользователи _всё же_ показывают нам точное время последнего пребывания в сети, но мы не видим его по указанной выше причине, будет установлен флаг `by_me` в конструкторах [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/).

```
inputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;
```

### Параметры

Этот конструктор не требует параметров.

### Тип

[InputPrivacyKey](/type/InputPrivacyKey/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [userStatusRecently](/constructor/userStatusRecently/)

Статус в сети: недавно был в сети

#### [userStatusLastWeek](/constructor/userStatusLastWeek/)

Статус в сети: последний раз в сети на прошлой неделе

#### [userStatusLastMonth](/constructor/userStatusLastMonth/)

Статус в сети: последний раз в сети в прошлом месяце
