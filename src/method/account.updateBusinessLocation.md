---
title: "account.updateBusinessLocation"
original: "https://core.telegram.org/method/account.updateBusinessLocation"
section: ref
kind: method
description: "Бизнес-аккаунты » могут указывать своё местоположение с помощью этого метода, подробнее см. здесь »."
layout: layout.njk
---

# account.updateBusinessLocation

[Бизнес-аккаунты »](/api/business/#location) могут указывать своё местоположение с помощью этого метода, подробнее см. [здесь »](/api/business/#location).

Чтобы удалить сведения о местоположении компании, вызовите метод, не задавая ни одного из параметров.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateBusinessLocation#9e6b131a flags:# geo_point:flags.1?InputGeoPoint address:flags.0?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Необязательное поле, содержит набор географических координат.</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Обязательно при установке или изменении местоположения, содержит текстовое описание адреса (не более 96 символов UTF-8).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
