---
title: "payments.refundStarsCharge"
original: "https://core.telegram.org/method/payments.refundStarsCharge"
section: ref
kind: method
description: "Вернуть средства по транзакции Telegram Stars; подробнее см. здесь »."
layout: layout.njk
---

# payments.refundStarsCharge

Вернуть средства по транзакции [Telegram Stars](/api/stars/); подробнее см. [здесь »](/api/payments/#6-refunds).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.refundStarsCharge#25ae8f4a user_id:InputUser charge_id:string = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, которому возвращается платёж.</td></tr><tr><td><strong>charge_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор транзакции.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHARGE_ALREADY_REFUNDED</td><td>Платёж по этой транзакции уже был возвращён.</td></tr><tr><td>400</td><td>CHARGE_ID_EMPTY</td><td>Указанный charge_id пуст.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [API платежей](/api/payments/)

Вы можете принимать платежи от пользователей Telegram через ботов Telegram.
