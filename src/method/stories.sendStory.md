---
title: "stories.sendStory"
original: "https://core.telegram.org/method/stories.sendStory"
section: ref
kind: method
description: "Загружает историю Telegram."
layout: layout.njk
---

# stories.sendStory

Загружает [историю Telegram](/api/stories/).

[@term:peer] Может также применяться в рамках [бизнес-подключения](/api/bots/connected-business-bots/), причём _не_ через оборачивание запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора управляемого бизнес-пользователя в `peer`.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
stories.sendStory#737fc2ec flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Добавлять ли историю в профиль автоматически по истечении срока её действия. Если флаг не установлен, история будет добавлена только в архив, подробнее см. <a href="/api/stories">здесь »</a>.</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, запрещает пересылку, снимки экрана и скачивание.</td></tr><tr><td><strong>fwd_modified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Установите этот флаг при репосте историй с <code>fwd_from_id</code>+<code>fwd_from_story</code>, если перед репостом поле <code>media</code> было изменено.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир, от имени которого нужно опубликовать историю.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Медиафайл истории.</td></tr><tr><td><strong>media_areas</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MediaArea">MediaArea</a>&gt;</td><td><a href="/api/stories#media-areas">Медиазоны</a>, связанные с историей; подробнее см. <a href="/api/stories#media-areas">здесь »</a>.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Подпись истории.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a>, если это разрешено <a href="/api/config#stories-entities">параметром конфигурации клиента <code>stories_entities</code> »</a>.</td></tr><tr><td><strong>privacy_rules</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPrivacyRule">InputPrivacyRule</a>&gt;</td><td><a href="/api/privacy">Правила приватности</a> для истории, определяющие, кто может и кто не может её просматривать.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, необходимый для предотвращения повторной отправки сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Срок, по истечении которого история переносится в архив (и в профиль, если установлен флаг <code>pinned</code>), в секундах; должен быть равен одному из значений <code>6 * 3600</code>, <code>12 * 3600</code>, <code>86400</code> или <code>2 * 86400</code> для пользователей Telegram Premium и <code>86400</code> в остальных случаях.</td></tr><tr><td><strong>fwd_from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, указывает, что эта история — репост истории с идентификатором <code>fwd_from_story</code>, опубликованной пиром из <code>fwd_from_id</code>.</td></tr><tr><td><strong>fwd_from_story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Если установлено, указывает, что эта история — репост истории с идентификатором <code>fwd_from_story</code>, опубликованной пиром из <code>fwd_from_id</code>.</td></tr><tr><td><strong>albums</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Если установлено, добавляет историю в указанные альбомы.</td></tr><tr><td><strong>music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/InputDocument">InputDocument</a></td><td>Если установлено, аудиодорожка, которую следует воспроизводить как фоновую музыку для истории.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOOSTS_REQUIRED</td><td>Чтобы выполнить это действие, указанный канал должен быть сначала <a href="/api/boost">забустен своими пользователями</a>.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>Указанный метод <em>можно</em> использовать через <a href="/api/bots/connected-business-bots">бизнес-подключение</a> для некоторых операций, но в данном запросе была предпринята операция, недопустимая через бизнес-подключение.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>Подпись слишком длинная.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>Указанный объект медиа недействителен.</td></tr><tr><td>400</td><td>MEDIA_FILE_INVALID</td><td>Указанный медиафайл недействителен.</td></tr><tr><td>400</td><td>MEDIA_TYPE_INVALID</td><td>Указанный тип медиа нельзя использовать в историях.</td></tr><tr><td>400</td><td>MEDIA_VIDEO_STORY_MISSING</td><td>Видео, не являющееся историей, нельзя опубликовать повторно как историю (возникает при попытке повторно отправить такое видео в качестве истории через inputDocument).</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>Недопустимые размеры фотографии.</td></tr><tr><td>400</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>Указанная реакция недействительна.</td></tr><tr><td>400</td><td>STORIES_TOO_MUCH</td><td>Вы достигли предельного числа активных историй, заданного <a href="/api/config#story-expiring-limit-default">параметрами клиентской конфигурации <code>story_expiring_limit_*</code></a>: следует приобрести подписку <a href="/api/premium">Premium</a>, удалить одну из активных историй или дождаться истечения срока самой старой из них.</td></tr><tr><td>400</td><td>STORY_PERIOD_INVALID</td><td>Указанный срок действия истории недопустим для этого аккаунта.</td></tr><tr><td>400</td><td>VENUE_ID_INVALID</td><td>Указанный идентификатор заведения недействителен.</td></tr><tr><td>400</td><td>VIDEO_DURATION_INVALID</td><td>Недопустимая длительность указанного видео.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Вызвать метод через [подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »](/api/bots/connected-business-bots/).

Всегда отправляйте запросы, обёрнутые в `invokeWithBusinessConnection`, в дата-центр с идентификатором, указанным в поле `dc_id` используемого [botBusinessConnection](/constructor/botBusinessConnection/).

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
