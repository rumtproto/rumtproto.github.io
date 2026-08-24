---
title: "inputSingleMedia"
original: "https://core.telegram.org/constructor/inputSingleMedia"
section: ref
kind: constructor
description: "Отдельный медиафайл в альбоме или сгруппированных медиафайлах, отправленный методом messages.sendMultiMedia."
layout: layout.njk
---

# inputSingleMedia

Отдельный медиафайл в [альбоме или сгруппированных медиафайлах](/api/files/#albums-grouped-media), отправленный методом [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

```
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Медиафайл</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный клиентский идентификатор медиафайла, необходимый для предотвращения повторной отправки сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись к медиафайлу</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для форматированного текста</td></tr></tbody></table>

### Тип

[InputSingleMedia](/type/InputSingleMedia/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Отправить [альбом или сгруппированные медиафайлы](/api/files/#albums-grouped-media)
