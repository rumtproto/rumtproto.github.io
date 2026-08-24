---
title: "payments.sendStarGiftOffer"
original: "https://core.telegram.org/method/payments.sendStarGiftOffer"
section: ref
kind: method
description: "Отправить предложение о покупке коллекционного подарка »; полный порядок действий см. здесь »."
layout: layout.njk
---

# payments.sendStarGiftOffer

Отправить предложение о покупке [коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полный порядок действий см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Владелец коллекционного подарка: равен <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>owner_id</code>.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Идентификатор коллекционного подарка: равен <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>slug</code>.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Цена предложения в Stars или TON.</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность предложения в секундах: должна быть равна одному из значений <code>21600</code>, <code>43200</code>, <code>86400</code>, <code>129600</code>, <code>172800</code> или <code>259200</code>; в тестовом режиме допускается также <code>120</code>.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный 64-битный идентификатор, позволяющий избежать двойной отправки одного и того же предложения при проблемах с сетью. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Если у пира-получателя включены <a href="/api/paid-messages">платные сообщения »</a>, указывает количество <a href="/api/stars">Telegram Stars</a>, которое отправляющий пользователь согласился заплатить за отправку предложения (дополнительно к сумме самого предложения, указанной в <code>price</code>).</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>INPUT_STARS_AMOUNT_INVALID</td><td>Указанная сумма предложения в Stars недопустима; допустимый диапазон см. <a href="/api/gifts#collectible-gift-purchase-offers">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>INPUT_STARS_NANOS_INVALID</td><td>Указанная сумма предложения в нанотонах недопустима; допустимый диапазон см. <a href="/api/gifts#collectible-gift-purchase-offers">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>INVOICE_INVALID</td><td>Указанный счёт недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>RESELL_STARS_TOO_FEW</td><td>Предложенная цена слишком мала.</td></tr><tr><td>400</td><td>RESELL_STARS_TOO_MUCH</td><td>Предложенная цена слишком высока.</td></tr><tr><td>400</td><td>STARGIFT_OFFER_INVALID</td><td>Указанная сумма предложения недопустима.</td></tr><tr><td>400</td><td>STARGIFT_OFFER_NOT_ALLOWED</td><td>Вы не можете отправить предложение о покупке этого подарка.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>Указанный слаг подарка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
