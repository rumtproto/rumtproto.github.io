---
title: "stories.editStory"
original: "https://core.telegram.org/method/stories.editStory"
section: ref
kind: method
description: "Изменить загруженную историю"
layout: layout.njk
---

# stories.editStory

Изменить загруженную [историю](/api/stories/)

[@term:peer] Может также использоваться в [бизнес-подключении](/api/bots/connected-business-bots/), _не_ путём оборачивания запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора управляемого бизнес-пользователя в `peer`: в этом случае метод можно использовать только для изменения историй, опубликованных тем же бизнес-ботом от имени пользователя с помощью [stories.sendStory](/method/stories.sendStory/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
stories.editStory#b583ba46 flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир, в котором была опубликована история.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории, которую нужно изменить.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputMedia">InputMedia</a></td><td>Если указано, заменяет медиа истории.</td></tr><tr><td><strong>media_areas</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MediaArea">MediaArea</a>&gt;</td><td><a href="/api/stories#media-areas">Медиазоны</a>, связанные с историей; подробнее см. <a href="/api/stories#media-areas">здесь »</a>.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Если указано, заменяет подпись истории.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста в подписи</a>, если это разрешено <a href="/api/config#stories-entities">параметром конфигурации клиента <code>stories_entities</code> »</a>.</td></tr><tr><td><strong>privacy_rules</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPrivacyRule">InputPrivacyRule</a>&gt;</td><td>Если указано, изменяет <a href="/api/privacy">настройки приватности »</a> истории, меняя то, кто может и кто не может её просматривать.</td></tr><tr><td><strong>music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/InputDocument">InputDocument</a></td><td>Если установлено, новая аудиодорожка, которую следует воспроизводить как фоновую музыку для истории.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORY_NOT_MODIFIED</td><td>Переданные сведения об истории совпадают с прежними, поэтому история не была изменена.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Вызвать метод через [подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »](/api/bots/connected-business-bots/).

Всегда отправляйте запросы, обёрнутые в `invokeWithBusinessConnection`, в дата-центр с идентификатором, указанным в поле `dc_id` используемого [botBusinessConnection](/constructor/botBusinessConnection/).

#### [stories.sendStory](/method/stories.sendStory/)

Загружает [историю Telegram](/api/stories/).

Может также применяться в рамках [бизнес-подключения](/api/bots/connected-business-bots/), причём _не_ через оборачивание запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора управляемого бизнес-пользователя в `peer`.
