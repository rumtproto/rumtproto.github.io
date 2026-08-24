---
title: "InputMedia"
original: "https://core.telegram.org/type/InputMedia"
section: ref
kind: type
description: "Определяет медиасодержимое сообщения."
layout: layout.njk
---

# InputMedia

Определяет медиасодержимое сообщения.

```
inputMediaEmpty#9664f57f = InputMedia;
inputMediaUploadedPhoto#1e287d04 flags:# spoiler:flags.2?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int = InputMedia;
inputMediaPhoto#b3ba0635 flags:# spoiler:flags.1?true id:InputPhoto ttl_seconds:flags.0?int = InputMedia;
inputMediaGeoPoint#f9c44144 geo_point:InputGeoPoint = InputMedia;
inputMediaContact#f8ab7dfb phone_number:string first_name:string last_name:string vcard:string = InputMedia;
inputMediaUploadedDocument#37c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;
inputMediaVenue#c13d1c11 geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string = InputMedia;
inputMediaPhotoExternal#e5bbfe1a flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int = InputMedia;
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
inputMediaGame#d33f43f3 id:InputGame = InputMedia;
inputMediaInvoice#405fef0d flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:flags.3?string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;
inputMediaGeoLive#971fa843 flags:# stopped:flags.0?true geo_point:InputGeoPoint heading:flags.2?int period:flags.1?int proximity_notification_radius:flags.3?int = InputMedia;
inputMediaPoll#f94e5f1 flags:# poll:Poll correct_answers:flags.0?Vector<bytes> solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> = InputMedia;
inputMediaDice#e66fbf7b emoticon:string = InputMedia;
inputMediaStory#89fdd778 peer:InputPeer id:int = InputMedia;
inputMediaWebPage#c21b8849 flags:# force_large_media:flags.0?true force_small_media:flags.1?true optional:flags.2?true url:string = InputMedia;
inputMediaPaidMedia#c4103386 flags:# stars_amount:long extended_media:Vector<InputMedia> payload:flags.0?string = InputMedia;
inputMediaTodo#9fc55fde todo:TodoList = InputMedia;
inputMediaStakeDice#f3a9244a game_hash:string ton_amount:long client_seed:bytes = InputMedia;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputMediaEmpty">inputMediaEmpty</a></td><td>Пустое медиасодержимое сообщения.</td></tr><tr><td><a href="/constructor/inputMediaUploadedPhoto">inputMediaUploadedPhoto</a></td><td>Фотография</td></tr><tr><td><a href="/constructor/inputMediaPhoto">inputMediaPhoto</a></td><td>Пересланная фотография</td></tr><tr><td><a href="/constructor/inputMediaGeoPoint">inputMediaGeoPoint</a></td><td>Карта.</td></tr><tr><td><a href="/constructor/inputMediaContact">inputMediaContact</a></td><td>Контакт из телефонной книги</td></tr><tr><td><a href="/constructor/inputMediaUploadedDocument">inputMediaUploadedDocument</a></td><td>Новый документ</td></tr><tr><td><a href="/constructor/inputMediaDocument">inputMediaDocument</a></td><td>Пересланный документ</td></tr><tr><td><a href="/constructor/inputMediaVenue">inputMediaVenue</a></td><td>Может использоваться для отправки геопозиции заведения.</td></tr><tr><td><a href="/constructor/inputMediaPhotoExternal">inputMediaPhotoExternal</a></td><td>Новая фотография, которая будет загружена сервером по указанному URL</td></tr><tr><td><a href="/constructor/inputMediaDocumentExternal">inputMediaDocumentExternal</a></td><td>Документ, который будет загружен серверами Telegram</td></tr><tr><td><a href="/constructor/inputMediaGame">inputMediaGame</a></td><td>Игра</td></tr><tr><td><a href="/constructor/inputMediaInvoice">inputMediaInvoice</a></td><td>Сформированный счёт <a href="/bots/payments">платежа через бота</a></td></tr><tr><td><a href="/constructor/inputMediaGeoLive">inputMediaGeoLive</a></td><td><a href="/api/live-location">Геолокация в реальном времени</a></td></tr><tr><td><a href="/constructor/inputMediaPoll">inputMediaPoll</a></td><td>Опрос</td></tr><tr><td><a href="/constructor/inputMediaDice">inputMediaDice</a></td><td>Отправить <a href="/api/dice">анимированный стикер с игральной костью</a></td></tr><tr><td><a href="/constructor/inputMediaStory">inputMediaStory</a></td><td>Пересланная история</td></tr><tr><td><a href="/constructor/inputMediaWebPage">inputMediaWebPage</a></td><td>Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в подписи, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения.</td></tr><tr><td><a href="/constructor/inputMediaPaidMedia">inputMediaPaidMedia</a></td><td><a href="/api/paid-media">Платное медиа, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/inputMediaTodo">inputMediaTodo</a></td><td>Создаёт <a href="/api/todo">список задач »</a>.</td></tr><tr><td><a href="/constructor/inputMediaStakeDice">inputMediaStakeDice</a></td><td>Медиа игры в кости.</td></tr></tbody></table>
