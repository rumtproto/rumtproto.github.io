---
title: "updateNewAuthorization"
original: "https://core.telegram.org/constructor/updateNewAuthorization"
section: ref
kind: constructor
description: "В аккаунт текущего пользователя вошла новая сессия с неизвестного устройства."
layout: layout.njk
---

# updateNewAuthorization

В аккаунт текущего пользователя вошла новая сессия с неизвестного устройства.

```
updateNewAuthorization#8951abef flags:# unconfirmed:flags.0?true hash:long date:flags.0?int device:flags.0?string location:flags.0?string = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>unconfirmed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли сессия <a href="/api/auth#confirming-login">неподтверждённой, подробнее см. здесь »</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Дата авторизации</td></tr><tr><td><strong>device</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Название устройства, например <em>Android</em></td></tr><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Местоположение, например <em>USA, NY (IP=1.2.3.4)</em></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
