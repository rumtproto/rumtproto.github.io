---
title: "messages.importChatInvite"
original: "https://core.telegram.org/method/messages.importChatInvite"
section: ref
kind: method
description: "Применить приглашение в чат и вступить в личный чат/супергруппу/канал"
layout: layout.njk
---

# messages.importChatInvite

Применить приглашение в чат и вступить в личный чат/супергруппу/канал

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.importChatInvite#6c50051c hash:string = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:hash] <code>hash</code> из <a href="/api/links#chat-invite-links">глубокой пригласительной ссылки на чат</a></td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNELS_TOO_MUCH</td><td>Вы состоите в слишком большом числе каналов и супергрупп.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Недействительный чат.</td></tr><tr><td>400</td><td>INVITE_HASH_EMPTY</td><td>Хеш приглашения пуст.</td></tr><tr><td>406</td><td>INVITE_HASH_EXPIRED</td><td>Срок действия пригласительной ссылки истёк.</td></tr><tr><td>400</td><td>INVITE_HASH_INVALID</td><td>Хеш приглашения недействителен.</td></tr><tr><td>400</td><td>INVITE_REQUEST_SENT</td><td>Вы успешно подали заявку на вступление в этот чат или канал.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STARS_PAYMENT_REQUIRED</td><td>Чтобы воспользоваться этой пригласительной ссылкой, необходимо сначала <a href="/api/subscriptions#channel-subscriptions">оплатить связанную с ней подписку за Telegram Stars&nbsp;»</a>.</td></tr><tr><td>400</td><td>USERS_TOO_MUCH</td><td>Превышено максимальное количество пользователей (например, при создании чата).</td></tr><tr><td>400</td><td>USER_ALREADY_PARTICIPANT</td><td>Пользователь уже состоит в группе.</td></tr><tr><td>400</td><td>USER_CHANNELS_TOO_MUCH</td><td>Один из пользователей, которых вы попытались добавить, уже состоит в слишком большом числе каналов и супергрупп.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Подписки за звёзды](/api/subscriptions/)

Боты и каналы могут создавать подписки, периодически списывая с пользователей определённое количество Telegram Stars в обмен на контент и услуги.
