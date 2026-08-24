---
title: "sponsoredMessage"
original: "https://core.telegram.org/constructor/sponsoredMessage"
section: ref
kind: constructor
description: "Рекламное сообщение."
layout: layout.njk
---

# sponsoredMessage

[Рекламное сообщение](/api/sponsored-messages/).

```
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>recommended</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Следует ли пометить сообщение как «рекомендованное», а не как «рекламное»</td></tr><tr><td><strong>can_report</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Можно ли пожаловаться на это сообщение <a href="/api/sponsored-messages#reporting-sponsored-messages">так, как описано здесь »</a>.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:random_id] Идентификатор сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении с updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Содержит URL, который следует открыть, когда пользователь нажимает на рекламное сообщение.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Содержит заголовок рекламного сообщения.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Спонсируемое сообщение</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a> в поле <code>message</code>.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Photo">Photo</a></td><td>Если установлено, содержит пользовательский кружок фотографии профиля, который следует отображать для рекламного сообщения, как для сообщений, отправленных в группах.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/MessageMedia">MessageMedia</a></td><td>Если установлено, содержит некоторое медиа.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/PeerColor">PeerColor</a></td><td>Если установлено, рекламное сообщение должно использовать <a href="/api/colors">акцентный цвет сообщения »</a>, заданный в поле <code>color</code>.</td></tr><tr><td><strong>button_text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Надпись на кнопке рекламного сообщения.</td></tr><tr><td><strong>sponsor_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/string">string</a></td><td>Если установлено, содержит дополнительные сведения о рекламодателе, которые следует показать вместе с сообщением.</td></tr><tr><td><strong>additional_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/string">string</a></td><td>Если установлено, содержит дополнительные сведения о рекламном сообщении, которые следует показать вместе с сообщением.</td></tr><tr><td><strong>min_display_duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/int">int</a></td><td>Для <a href="/api/sponsored-messages#getting-sponsored-video-advertisements">рекламных сообщений, показываемых поверх видео в каналах »</a>, — разрешать пользователю скрыть рекламу только по прошествии указанного числа секунд.</td></tr><tr><td><strong>max_display_duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/int">int</a></td><td>Для <a href="/api/sponsored-messages#getting-sponsored-video-advertisements">рекламных сообщений, показываемых поверх видео в каналах »</a>, — автоматически скрывать рекламу по прошествии указанного числа секунд.</td></tr></tbody></table>

### Тип

[SponsoredMessage](/type/SponsoredMessage/)

### Связанные страницы

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
