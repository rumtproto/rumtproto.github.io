---
title: "messageMediaPaidMedia"
original: "https://core.telegram.org/constructor/messageMediaPaidMedia"
section: ref
kind: constructor
description: "Платное медиа, подробнее см. здесь »."
layout: layout.njk
---

# messageMediaPaidMedia

[Платное медиа, подробнее см. здесь »](/api/paid-media/).

```
messageMediaPaidMedia#a8852491 stars_amount:long extended_media:Vector<MessageExtendedMedia> = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена медиафайла в <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageExtendedMedia">MessageExtendedMedia</a>&gt;</td><td>Либо оплаченное медиа, либо предпросмотры в сверхнизком разрешении, если медиа ещё не оплачено; подробнее <a href="/api/paid-media#viewing-paid-media">см. здесь »</a>.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
