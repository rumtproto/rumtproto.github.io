---
title: "messages.forwardMessages"
original: "https://core.telegram.org/method/messages.forwardMessages"
section: ref
kind: method
description: "Пересылает сообщения по их идентификаторам."
layout: layout.njk
---

# messages.forwardMessages

Пересылает сообщения по их идентификаторам.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Отправлять ли сообщения без звука (на клиентах получателей не будет уведомления)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Отправлять ли сообщение в фоновом режиме</td></tr><tr><td><strong>with_my_score</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>При пересылке игр — включать ли в игру ваш счёт</td></tr><tr><td><strong>drop_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Пересылать ли сообщения без указания исходного автора</td></tr><tr><td><strong>drop_media_captions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Следует ли удалять подписи из медиафайлов</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Только для ботов: запрещает дальнейшую пересылку и сохранение сообщений, даже если в чате назначения не включена <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защита контента</a></td></tr><tr><td><strong>allow_paid_floodskip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Только для ботов: если установлено, разрешает отправлять до 1000 сообщений в секунду, игнорируя <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">ограничения на рассылку</a>, за плату 0,1 Telegram Stars за сообщение. Соответствующие Stars будут списаны с баланса бота.</td></tr><tr><td><strong>from_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Источник сообщений</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы сообщений</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>[@term:random_id] Случайный идентификатор, предотвращающий повторную отправку сообщений. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>to_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир назначения</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/int">int</a></td><td>Целевая <a href="/api/forum#forum-topics">тема форума</a></td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.22?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Может содержать только <a href="/constructor/inputReplyToMonoForum">inputReplyToMonoForum</a> — для пересылки сообщений в <a href="/api/monoforum">тему монофорума</a> (взаимоисключающе с <code>top_msg_id</code>).</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Дата отправки для отложенных сообщений</td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.24?<a href="/type/int">int</a></td><td>После отправки это сообщение будет автоматически запланировано на повторную отправку через указанное число секунд; подробнее о повторяющихся отложенных сообщениях см. <a href="/api/scheduled-messages#repeating-scheduled-messages">здесь »</a>.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/InputPeer">InputPeer</a></td><td>Переслать сообщения от имени указанного пира</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut">InputQuickReplyShortcut</a></td><td>Вместо этого добавить сообщения в указанный <a href="/api/business#quick-reply-shortcuts">шаблон быстрого ответа »</a>.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/long">long</a></td><td>Задаёт <a href="/api/effects">эффект сообщения »</a>, применяемый к сообщению.</td></tr><tr><td><strong>video_timestamp</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/type/int">int</a></td><td>Начать воспроизведение видео с указанной отметки времени (в секундах).</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/long">long</a></td><td>Для <a href="/api/paid-messages">платных сообщений »</a> указывает количество <a href="/api/stars">Telegram Stars</a>, которое пользователь согласился заплатить за отправку сообщения.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.23?<a href="/type/SuggestedPost">SuggestedPost</a></td><td>Используется, чтобы <a href="/api/suggested-posts">предложить пост каналу; подробнее о полном сценарии см. здесь »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>ALLOW_PAYMENT_REQUIRED</td><td>Этот пир принимает только <a href="/api/paid-messages">платные сообщения&nbsp;»</a>: эта ошибка возвращается только для старых слоёв без поддержки платных сообщений, поэтому для работы с платными сообщениями клиент необходимо обновить. .</td></tr><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>Этот пир взимает %d <a href="/api/stars">Telegram Stars</a> за сообщение, но параметр <code>allow_paid_stars</code> не был задан либо его значение меньше %d.</td></tr><tr><td>400</td><td>BROADCAST_PUBLIC_VOTERS_FORBIDDEN</td><td>Нельзя пересылать опросы с открытым списком проголосовавших.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>406</td><td>CHAT_FORWARDS_RESTRICTED</td><td>Нельзя пересылать сообщения из защищённого чата.</td></tr><tr><td>403</td><td>CHAT_GUEST_SEND_FORBIDDEN</td><td>Прежде чем комментировать, необходимо вступить в группу обсуждения; подробнее см. <a href="/api/discussion#requiring-users-to-join-the-group">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>Вы не можете отправлять сообщения в этот чат: на вас наложены ограничения.</td></tr><tr><td>403</td><td>CHAT_SEND_AUDIOS_FORBIDDEN</td><td>В этом чате нельзя отправлять аудиосообщения.</td></tr><tr><td>403</td><td>CHAT_SEND_DOCS_FORBIDDEN</td><td>В этом чате нельзя отправлять документы.</td></tr><tr><td>403</td><td>CHAT_SEND_GAME_FORBIDDEN</td><td>Нельзя отправить игру в этот чат.</td></tr><tr><td>403</td><td>CHAT_SEND_GIFS_FORBIDDEN</td><td>В этом чате нельзя отправлять GIF.</td></tr><tr><td>403</td><td>CHAT_SEND_INLINE_FORBIDDEN</td><td>В этой группе нельзя отправлять инлайн-сообщения.</td></tr><tr><td>403</td><td>CHAT_SEND_MEDIA_FORBIDDEN</td><td>В этом чате нельзя отправлять медиа.</td></tr><tr><td>403</td><td>CHAT_SEND_PHOTOS_FORBIDDEN</td><td>В этом чате нельзя отправлять фотографии.</td></tr><tr><td>403</td><td>CHAT_SEND_PLAIN_FORBIDDEN</td><td>В этом чате нельзя отправлять сообщения без медиа (текстовые).</td></tr><tr><td>403</td><td>CHAT_SEND_POLL_FORBIDDEN</td><td>В этом чате нельзя отправлять опросы.</td></tr><tr><td>403</td><td>CHAT_SEND_STICKERS_FORBIDDEN</td><td>В этом чате нельзя отправлять стикеры.</td></tr><tr><td>403</td><td>CHAT_SEND_VIDEOS_FORBIDDEN</td><td>В этом чате нельзя отправлять видео.</td></tr><tr><td>403</td><td>CHAT_SEND_VOICES_FORBIDDEN</td><td>В этом чате нельзя отправлять голосовые сообщения.</td></tr><tr><td>403</td><td>CHAT_SEND_WEBPAGE_FORBIDDEN</td><td>Вы не можете отправлять предпросмотры веб-страниц в этот чат.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>GROUPED_MEDIA_INVALID</td><td>Недопустимые сгруппированные медиафайлы.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr><tr><td>400</td><td>MEDIA_FILE_INVALID</td><td>Указанный медиафайл недействителен.</td></tr><tr><td>400</td><td>MESSAGE_IDS_EMPTY</td><td>Не указаны идентификаторы сообщений.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>406</td><td>PAYMENT_UNSUPPORTED</td><td>Подробное описание ошибки будет получено отдельно, как описано <a href="/api/errors#406-not-acceptable">здесь&nbsp;»</a>.</td></tr><tr><td>406</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>406</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>Чтобы отправить сообщение этому пользователю, нужна <a href="/api/premium">подписка Telegram Premium</a>.</td></tr><tr><td>400</td><td>QUICK_REPLIES_BOT_NOT_ALLOWED</td><td><a href="/api/business#quick-reply-shortcuts">Быстрые ответы</a> недоступны ботам.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>Можно создать не более <a href="/api/config#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> шаблонов быстрых ответов, лимит достигнут.</td></tr><tr><td>400</td><td>QUIZ_ANSWER_MISSING</td><td>Переслать викторину, скрыв исходного автора, можно только после выбора одного из вариантов ответа.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>RANDOM_ID_INVALID</td><td>Один из переданных случайных идентификаторов недействителен.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Каждый шаблон быстрого ответа может содержать не более <a href="/api/config#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> сообщений, лимит достигнут.</td></tr><tr><td>400</td><td>REPLY_TO_MONOFORUM_PEER_INVALID</td><td>Указанное значение inputReplyToMonoForum.monoforum_peer_id недействительно.</td></tr><tr><td>400</td><td>SCHEDULE_BOT_NOT_ALLOWED</td><td>Боты не могут планировать отправку сообщений.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>Нельзя запланировать сообщение так далеко в будущем.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>Слишком много отложенных сообщений.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr><tr><td>400</td><td>SLOWMODE_MULTI_MSGS_DISABLED</td><td>Включён медленный режим, вы не можете переслать несколько сообщений в эту группу.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>В этом чате включён медленный режим: подождите %d секунд перед отправкой следующего сообщения в этот чат.</td></tr><tr><td>400</td><td>SUGGESTED_POST_PEER_INVALID</td><td>Нельзя отправлять предлагаемые посты пирам, которые не являются <a href="/api/monoforum">монофорумами</a>.</td></tr><tr><td>406</td><td>TOPIC_CLOSED</td><td>Эта тема закрыта, отправлять в неё сообщения больше нельзя.</td></tr><tr><td>406</td><td>TOPIC_DELETED</td><td>Указанная тема была удалена.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr><tr><td>400</td><td>USER_BOT_TO_BOT_DISABLED</td><td>Обмен сообщениями между ботами отключён, поскольку один из двух ботов не включил настройку Bot to Bot в @BotFather.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr><tr><td>400</td><td>USER_IS_BOT</td><td>Боты не могут отправлять сообщения другим ботам.</td></tr><tr><td>403</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>Настройки приватности этого пользователя запрещают вам отправлять ему голосовые сообщения.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>Вы заблокировали этого пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Bots FAQ — частые вопросы о ботах](https://core.telegram.org/bots/faq)

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/)

Используется для отправки сообщений в [тему монофорума](/api/monoforum/).

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.

#### [Обработка ошибок](/api/errors/)

Как правильно обрабатывать ошибки, возвращаемые API.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
