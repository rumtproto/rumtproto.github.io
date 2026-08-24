---
title: "messages.sendPaidReaction"
original: "https://core.telegram.org/method/messages.sendPaidReaction"
section: ref
kind: method
description: "Отправляет одну или несколько платных реакций Telegram Stars », переводя Telegram Stars » на баланс канала."
layout: layout.njk
---

# messages.sendPaidReaction

Отправляет одну или несколько [платных реакций Telegram Stars »](/api/reactions/#paid-reactions), переводя [Telegram Stars »](/api/stars/) на баланс канала.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Сообщение, на которое нужно отреагировать</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество <a href="/api/stars">звёзд</a> для отправки (каждая увеличивает счётчик реакции на единицу).</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, необходимый для предотвращения повторной отправки сообщения. <strong>Примечание</strong>: этот аргумент <strong>обязан</strong> быть 64-битным целым числом, младшие 32 бита которого случайны, а старшие 32 бита <strong>равны текущему unixtime</strong>, то есть `uint64_t random_id = (time() &lt;&lt; 32). Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PaidReactionPrivacy">PaidReactionPrivacy</a></td><td>У каждой публикации с реакциями за звёзды есть таблица лидеров с самыми щедрыми отправителями, но пользователи могут отказаться от появления в ней, если предпочитают большую приватность. Если это поле не заполнено, будет использована приватность реакций по умолчанию, которая хранится на сервере и синхронизируется с клиентами через <a href="/constructor/updatePaidReactionPrivacy">updatePaidReactionPrivacy</a> (подробнее см. <a href="/api/reactions#paid-reaction-privacy">здесь</a>).</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BALANCE_TOO_LOW</td><td>Транзакцию невозможно завершить, так как текущий <a href="/api/stars">баланс Telegram Stars</a> слишком мал.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>RANDOM_ID_EMPTY</td><td>Пустой случайный идентификатор.</td></tr><tr><td>400</td><td>RANDOM_ID_EXPIRED</td><td>Срок действия указанного <code>random_id</code> истёк (скорее всего, он не соответствовал требуемой формуле `uint64_t random_id = (time() &lt;&lt; 32)</td></tr><tr><td>400</td><td>REACTIONS_COUNT_INVALID</td><td>Указанное количество реакций недопустимо.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>Вы не можете отправлять сообщения от имени указанного пира.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/)

Содержит текущую [настройку приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions).

При запуске клиентам следует вызывать [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/), чтобы получить текущую настройку приватности реакций по умолчанию, поскольку это обновление отправляется только сессиям, находящимся в сети в данный момент, и его нельзя получить через getDifference при запуске клиента.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
