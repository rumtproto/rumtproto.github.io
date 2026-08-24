---
title: "channels.createChannel"
original: "https://core.telegram.org/method/channels.createChannel"
section: ref
kind: method
description: "Создать супергруппу или канал."
layout: layout.njk
---

# channels.createChannel

Создать [супергруппу или канал](/api/channel/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.createChannel#91006707 flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string ttl_period:flags.4?int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Создать ли <a href="/api/channel">канал</a></td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Создать ли <a href="/api/channel">супергруппу</a></td></tr><tr><td><strong>for_import</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Создаётся ли супергруппа для импорта сообщений из стороннего мессенджера с помощью <a href="/method/messages.initHistoryImport">messages.initHistoryImport</a></td></tr><tr><td><strong>forum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Создать ли <a href="/api/forum">форум</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название канала</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание канала</td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Местоположение геогруппы, <a href="/api/nearby">подробнее о геогруппах см. здесь »</a>.</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Адрес геогруппы, <a href="/api/nearby">подробнее о геогруппах см. здесь »</a>.</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Время жизни всех сообщений, которые будут отправлены в супергруппу: как только message.date+message.ttl_period === time(), сообщение будет удалено на сервере, и его также необходимо удалить локально. Изменить это значение позже можно с помощью метода <a href="/method/messages.setDefaultHistoryTTL">messages.setDefaultHistoryTTL</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ADDRESS_INVALID</td><td>Указанный адрес географической точки недействителен.</td></tr><tr><td>400</td><td>CHANNELS_ADMIN_LOCATED_TOO_MUCH</td><td>Пользователь достиг предела числа публичных геогрупп.</td></tr><tr><td>400</td><td>CHANNELS_TOO_MUCH</td><td>Вы состоите в слишком большом числе каналов и супергрупп.</td></tr><tr><td>400</td><td>CHAT_ABOUT_TOO_LONG</td><td>Слишком длинное описание чата.</td></tr><tr><td>500</td><td>CHAT_INVALID</td><td>Недействительный чат.</td></tr><tr><td>400</td><td>CHAT_TITLE_EMPTY</td><td>Не указано название чата.</td></tr><tr><td>400</td><td>TTL_PERIOD_INVALID</td><td>[@term:TTL] Указанный период TTL недействителен.</td></tr><tr><td>406</td><td>USER_RESTRICTED</td><td>На вас пожаловались как на спам, вы не можете создавать каналы или чаты.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [messages.initHistoryImport](/method/messages.initHistoryImport/)

Импортировать историю переписки из стороннего мессенджера в определённый чат Telegram; [подробнее об импортированных чатах см. здесь »](/api/import/).

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Пользователи и чаты поблизости](/api/nearby/)

Как работать с возможностями на основе геолокации, такими как геочаты и поиск пользователей поблизости.

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Изменяет значение по умолчанию настройки времени жизни сообщений (Time-To-Live), применяемое ко всем новым чатам.
