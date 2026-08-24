---
title: "messages.sendInlineBotResult"
original: "https://core.telegram.org/method/messages.sendInlineBotResult"
section: ref
kind: method
description: "Отправить результат, полученный с помощью messages.getInlineBotResults."
layout: layout.njk
---

# messages.sendInlineBotResult

Отправить результат, полученный с помощью [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Следует ли отправить сообщение без звука (на другом клиенте уведомление не появится)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Отправлять ли сообщение в фоновом режиме</td></tr><tr><td><strong>clear_draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Очищать ли <a href="/api/drafts">черновик</a></td></tr><tr><td><strong>hide_via</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Скрывать ли <code>via @botname</code> в итоговом сообщении (только для имён ботов, указанных в <a href="/constructor/config">config</a>)</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Назначение</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что сообщение следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный идентификатор, позволяющий избежать повторной отправки того же запроса. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса из <a href="/method/messages.getInlineBotResults">messages.getInlineBotResults</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор результата, полученный методом <a href="/method/messages.getInlineBotResults">messages.getInlineBotResults</a></td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Дата отправки для отложенных сообщений</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Отправить это сообщение от имени указанного пира</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut">InputQuickReplyShortcut</a></td><td>Вместо этого добавить сообщение в указанный <a href="/api/business#quick-reply-shortcuts">шаблон быстрого ответа »</a>.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/long">long</a></td><td>Для <a href="/api/paid-messages">платных сообщений »</a> указывает количество <a href="/api/stars">Telegram Stars</a>, которое пользователь согласился заплатить за отправку сообщения.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>Этот пир взимает %d <a href="/api/stars">Telegram Stars</a> за сообщение, но параметр <code>allow_paid_stars</code> не был задан либо его значение меньше %d.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_GUEST_SEND_FORBIDDEN</td><td>Прежде чем комментировать, необходимо вступить в группу обсуждения; подробнее см. <a href="/api/discussion#requiring-users-to-join-the-group">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>Вы не можете отправлять сообщения в этот чат: на вас наложены ограничения.</td></tr><tr><td>403</td><td>CHAT_SEND_AUDIOS_FORBIDDEN</td><td>В этом чате нельзя отправлять аудиосообщения.</td></tr><tr><td>403</td><td>CHAT_SEND_GAME_FORBIDDEN</td><td>Нельзя отправить игру в этот чат.</td></tr><tr><td>403</td><td>CHAT_SEND_GIFS_FORBIDDEN</td><td>В этом чате нельзя отправлять GIF.</td></tr><tr><td>403</td><td>CHAT_SEND_INLINE_FORBIDDEN</td><td>В этой группе нельзя отправлять инлайн-сообщения.</td></tr><tr><td>403</td><td>CHAT_SEND_MEDIA_FORBIDDEN</td><td>В этом чате нельзя отправлять медиа.</td></tr><tr><td>403</td><td>CHAT_SEND_PHOTOS_FORBIDDEN</td><td>В этом чате нельзя отправлять фотографии.</td></tr><tr><td>403</td><td>CHAT_SEND_PLAIN_FORBIDDEN</td><td>В этом чате нельзя отправлять сообщения без медиа (текстовые).</td></tr><tr><td>403</td><td>CHAT_SEND_STICKERS_FORBIDDEN</td><td>В этом чате нельзя отправлять стикеры.</td></tr><tr><td>403</td><td>CHAT_SEND_VOICES_FORBIDDEN</td><td>В этом чате нельзя отправлять голосовые сообщения.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>INLINE_RESULT_EXPIRED</td><td>Срок действия инлайн-запроса истёк.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>Чтобы отправить сообщение этому пользователю, нужна <a href="/api/premium">подписка Telegram Premium</a>.</td></tr><tr><td>400</td><td>QUERY_ID_EMPTY</td><td>Идентификатор запроса пуст.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>Можно создать не более <a href="/api/config#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> шаблонов быстрых ответов, лимит достигнут.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Каждый шаблон быстрого ответа может содержать не более <a href="/api/config#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> сообщений, лимит достигнут.</td></tr><tr><td>400</td><td>RESULT_ID_EMPTY</td><td>Пустой идентификатор результата.</td></tr><tr><td>400</td><td>RESULT_ID_INVALID</td><td>Один из указанных идентификаторов результата недействителен.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>Нельзя запланировать сообщение так далеко в будущем.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>Слишком много отложенных сообщений.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr><tr><td>500</td><td>SEND_MEDIA_INVALID</td><td>Указанное медиа недействительно.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>В этом чате включён медленный режим: подождите %d секунд перед отправкой следующего сообщения в этот чат.</td></tr><tr><td>400</td><td>TOPIC_DELETED</td><td>Указанная тема была удалена.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>Настройки приватности этого пользователя запрещают вам отправлять ему голосовые сообщения.</td></tr><tr><td>400</td><td>WEBPAGE_CURL_FAILED</td><td>Сбой при получении веб-страницы с помощью cURL.</td></tr><tr><td>400</td><td>WEBPAGE_MEDIA_EMPTY</td><td>Медиа веб-страницы пусто.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>Вы заблокировали этого пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений

#### [config](/constructor/config/)

Текущая конфигурация

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [messages.getInlineBotResults](/method/messages.getInlineBotResults/)

Запрос к инлайн-боту

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
