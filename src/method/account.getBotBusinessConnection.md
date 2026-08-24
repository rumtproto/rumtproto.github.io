---
title: "account.getBotBusinessConnection"
original: "https://core.telegram.org/method/account.getBotBusinessConnection"
section: ref
kind: method
description: "Боты могут вызывать этот метод, чтобы заново получить конструктор updateBotBusinessConnect, связанный с конкретным бизнес-подключением connection_id, подробнее о подключённых…"
layout: layout.njk
---

# account.getBotBusinessConnection

Боты могут вызывать этот метод, чтобы заново получить конструктор [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/), связанный с конкретным [бизнес-подключением `connection_id`, подробнее о подключённых бизнес-ботах см. здесь »](/api/bots/connected-business-bots/).  
Это нужно, например, для только что вошедших в систему ботов, которые получают обновления [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/) и подобные, потому что некоторые пользователи подключились к боту ещё до того, как он смог войти в систему.  
В этом случае бот получает сообщения из бизнес-подключения, но ещё не закешировал связанное с ним [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) со сведениями о подключении (может ли он отвечать на сообщения? и т. д.) и не может получить старые обновления, поскольку они были отправлены, когда бот ещё не вошёл в сессию.  
Этот метод можно использовать, чтобы получить сведения о ещё не закешированном бизнес-подключении; его не следует вызывать, если сведения уже закешированы или чтобы получить изменения, так как последующие изменения будут автоматически отправляться боту в виде новых обновлений [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) обычными [способами доставки обновлений »](/api/updates/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
account.getBotBusinessConnection#76a86270 connection_id:string = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/bots/connected-business-bots">Идентификатор бизнес-подключения »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CONNECTION_ID_INVALID</td><td>Указанный идентификатор подключения недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/)

Подключение или отключение [бизнес-бота](/api/bots/connected-business-bots/), а также изменение настроек подключения отправляет боту обновление [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) с новыми настройками и идентификатором `connection_id`, который бот будет использовать, чтобы обрабатывать обновления от пользователя и отправлять сообщения от его имени.

#### [updateBotNewBusinessMessage](/constructor/updateBotNewBusinessMessage/)

Сообщение получено через [подключённый бизнес-чат »](/api/bots/connected-business-bots/).

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
