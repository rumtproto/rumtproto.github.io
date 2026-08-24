---
title: "inputMediaPaidMedia"
original: "https://core.telegram.org/constructor/inputMediaPaidMedia"
section: ref
kind: constructor
description: "Платное медиа, подробнее см. здесь »."
layout: layout.njk
---

# inputMediaPaidMedia

[Платное медиа, подробнее см. здесь »](/api/paid-media/).

```
inputMediaPaidMedia#c4103386 flags:# stars_amount:long extended_media:Vector<InputMedia> payload:flags.0?string = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена медиафайла в <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputMedia">InputMedia</a>&gt;</td><td>Фотографии или видео.</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Только для ботов: задаёт пользовательскую полезную нагрузку, которая затем будет передана в <a href="/constructor/updateBotPurchasedPaidMedia">updateBotPurchasedPaidMedia</a> при совершении платежа (это поле не будет видно пользователю)</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/)

Только для ботов: пользователь приобрёл [платное медиа](/api/paid-media/).

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
