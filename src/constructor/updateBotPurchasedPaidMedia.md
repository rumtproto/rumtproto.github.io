---
title: "updateBotPurchasedPaidMedia"
original: "https://core.telegram.org/constructor/updateBotPurchasedPaidMedia"
section: ref
kind: constructor
description: "Только для ботов: пользователь приобрёл платное медиа."
layout: layout.njk
---

# updateBotPurchasedPaidMedia

Только для ботов: пользователь приобрёл [платное медиа](/api/paid-media/).

```
updateBotPurchasedPaidMedia#283bd312 user_id:long payload:string qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, купивший медиафайл</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Полезная нагрузка, переданная ботом в <a href="/constructor/inputMediaPaidMedia">inputMediaPaidMedia</a>.<code>payload</code></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/)

[Платное медиа, подробнее см. здесь »](/api/paid-media/).

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
