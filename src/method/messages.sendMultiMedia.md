---
title: "messages.sendMultiMedia"
original: "https://core.telegram.org/method/messages.sendMultiMedia"
section: ref
kind: method
description: "Отправить альбом или сгруппированные медиафайлы"
layout: layout.njk
---

# messages.sendMultiMedia

Отправить [альбом или сгруппированные медиафайлы](/api/files/#albums-grouped-media)

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Отправлять ли альбом без звука (уведомление не приходит)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Отправить в фоновом режиме?</td></tr><tr><td><strong>clear_draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Очищать ли <a href="/api/drafts">черновики</a></td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Только для ботов: запрещает пересылку и сохранение сообщений, даже если в чате назначения не включена <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защита контента</a></td></tr><tr><td><strong>update_stickersets_order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Перемещать ли использованные наборы стикеров наверх, <a href="/api/stickers#recent-stickersets">подробнее об этом флаге »</a></td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>allow_paid_floodskip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Только для ботов: если установлено, разрешает отправлять до 1000 сообщений в секунду, игнорируя <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">ограничения на рассылку</a>, за плату 0,1 Telegram Stars за сообщение. Соответствующие Stars будут списаны с баланса бота.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат назначения</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что сообщение следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>multi_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputSingleMedia">InputSingleMedia</a>&gt;</td><td>Медиафайлы, которые нужно отправить: обратите внимание, что их необходимо предварительно загрузить по отдельности с помощью <a href="/method/messages.uploadMedia">messages.uploadMedia</a>; использование сырых конструкторов <code>inputMediaUploaded*</code> не поддерживается.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Дата отправки для отложенных сообщений</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Отправить это сообщение от имени указанного пира</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut">InputQuickReplyShortcut</a></td><td>Вместо этого добавить сообщение в указанный <a href="/api/business#quick-reply-shortcuts">шаблон быстрого ответа »</a>.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/long">long</a></td><td>Задаёт <a href="/api/effects">эффект сообщения »</a>, применяемый к сообщению.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/long">long</a></td><td>Для <a href="/api/paid-messages">платных сообщений »</a> указывает количество <a href="/api/stars">Telegram Stars</a>, которое пользователь согласился заплатить за отправку сообщения.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>Этот пир взимает %d <a href="/api/stars">Telegram Stars</a> за сообщение, но параметр <code>allow_paid_stars</code> не был задан либо его значение меньше %d.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Через текущее <a href="/api/business#connected-bots">бизнес-подключение</a> нельзя отправлять сообщения указанному пиру.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_FORWARDS_RESTRICTED</td><td>Нельзя пересылать сообщения из защищённого чата.</td></tr><tr><td>403</td><td>CHAT_SEND_MEDIA_FORBIDDEN</td><td>В этом чате нельзя отправлять медиа.</td></tr><tr><td>403</td><td>CHAT_SEND_PHOTOS_FORBIDDEN</td><td>В этом чате нельзя отправлять фотографии.</td></tr><tr><td>403</td><td>CHAT_SEND_VIDEOS_FORBIDDEN</td><td>В этом чате нельзя отправлять видео.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>EFFECT_ID_INVALID</td><td>Указанный идентификатор эффекта недействителен.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>FILE_REFERENCE_%d_EMPTY</td><td>Ссылка на файл для медиафайла со смещением %d в массиве multi_media недействительна.</td></tr><tr><td>400</td><td>FILE_REFERENCE_%d_EXPIRED</td><td>Срок действия ссылки на файл для медиафайла с индексом %d в переданном массиве медиа истёк, её <a href="/api/file-references">необходимо обновить, как описано в документации</a>. .</td></tr><tr><td>400</td><td>FILE_REFERENCE_%d_INVALID</td><td><a href="/api/file-references">Ссылка на файл</a> для медиафайла с индексом %d в переданном массиве медиа недействительна.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>Подпись слишком длинная.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Медиа недействительно.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>MULTI_MEDIA_TOO_LONG</td><td>Слишком много медиафайлов для альбома.</td></tr><tr><td>406</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>Чтобы отправить сообщение этому пользователю, нужна <a href="/api/premium">подписка Telegram Premium</a>.</td></tr><tr><td>400</td><td>QUICK_REPLIES_BOT_NOT_ALLOWED</td><td><a href="/api/business#quick-reply-shortcuts">Быстрые ответы</a> недоступны ботам.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>Можно создать не более <a href="/api/config#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> шаблонов быстрых ответов, лимит достигнут.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>RANDOM_ID_EMPTY</td><td>Пустой случайный идентификатор.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Каждый шаблон быстрого ответа может содержать не более <a href="/api/config#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> сообщений, лимит достигнут.</td></tr><tr><td>400</td><td>REPLY_TO_INVALID</td><td>Указанное поле <code>reply_to</code> недействительно.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>Нельзя запланировать сообщение так далеко в будущем.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>Слишком много отложенных сообщений.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>В этом чате включён медленный режим: подождите %d секунд перед отправкой следующего сообщения в этот чат.</td></tr><tr><td>400</td><td>TOPIC_CLOSED</td><td>Эта тема закрыта, отправлять в неё сообщения больше нельзя.</td></tr><tr><td>400</td><td>TOPIC_DELETED</td><td>Указанная тема была удалена.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr></tbody></table>

### Связанные страницы

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [Bots FAQ — частые вопросы о ботах](https://core.telegram.org/bots/faq)

#### [messages.uploadMedia](/method/messages.uploadMedia/)

Загрузить файл и связать его с чатом (не отправляя его в чат)

Может также применяться в рамках [бизнес-подключения](/api/bots/connected-business-bots/), причём _не_ путём оборачивания запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора бизнес-подключения в параметре `business_connection_id`.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
