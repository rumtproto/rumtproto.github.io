---
title: "payments.transferStarGift"
original: "https://core.telegram.org/method/payments.transferStarGift"
section: ref
kind: method
description: "Передать коллекционный подарок другому пользователю или каналу: можно использовать, только если передача бесплатна (то есть поле messageActionStarGiftUnique.transfer_stars не…"
layout: layout.njk
---

# payments.transferStarGift

Передать [коллекционный подарок](/api/gifts/#collectible-gifts) другому пользователю или каналу: можно использовать, только если передача бесплатна (то есть поле [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/).`transfer_stars` не установлено); подробнее обо всём процессе (включая другой порядок действий на случай, когда передача платная) см. [здесь »](/api/gifts/#transferring-collectible-gifts).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Подарок для передачи.</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир назначения.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PAYMENT_REQUIRED</td><td>Для этого действия требуется оплата, подробнее см. <a href="/api/gifts">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>Переданное значение inputSavedStarGiftChat.saved_id пусто.</td></tr><tr><td>400</td><td>STARGIFT_NOT_FOUND</td><td>Указанный подарок не найден.</td></tr><tr><td>400</td><td>STARGIFT_NOT_OWNER</td><td>Вы не владелец подарка, который пытаетесь передать.</td></tr><tr><td>400</td><td>STARGIFT_NOT_UNIQUE</td><td>Нельзя передать неколлекционный подарок.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>Нельзя передать или продать подарок, принадлежащий другому пользователю.</td></tr><tr><td>400</td><td>STARGIFT_PEER_INVALID</td><td>Указанное значение inputSavedStarGiftChat.peer недействительно.</td></tr><tr><td>400</td><td>STARGIFT_TRANSFER_TOO_EARLY_%d</td><td>Этот подарок пока нельзя передать, подождите %d секунд.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

[Подарок »](/api/gifts/) был улучшен до [коллекционного подарка »](/api/gifts/#collectible-gifts).

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
