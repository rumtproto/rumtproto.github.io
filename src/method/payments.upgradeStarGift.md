---
title: "payments.upgradeStarGift"
original: "https://core.telegram.org/method/payments.upgradeStarGift"
section: ref
kind: method
description: "Улучшить подарок до коллекционного подарка: может использоваться, только если улучшение уже оплачено отправителем подарка; подробнее о полном порядке действий (включая другой…"
layout: layout.njk
---

# payments.upgradeStarGift

Улучшить [подарок](/api/gifts/) до [коллекционного подарка](/api/gifts/#collectible-gifts): может использоваться, только если улучшение уже оплачено отправителем подарка; подробнее о полном порядке действий (включая другой порядок на случай, когда улучшение не было оплачено отправителем подарка) [см. здесь »](/api/gifts/#upgrade-a-gift-to-a-collectible-gift).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.upgradeStarGift#aed6e4f5 flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>keep_original_details</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы сохранить исходный текст подарка, отправителя и получателя в улучшенном подарке в виде атрибута <a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a>.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Подарок для улучшения</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>PAYMENT_REQUIRED</td><td>Для этого действия требуется оплата, подробнее см. <a href="/api/gifts">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>Переданное значение inputSavedStarGiftChat.saved_id пусто.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_CONVERTED</td><td>Указанный звёздный подарок уже обменян на Stars.</td></tr><tr><td>400</td><td>STARGIFT_ALREADY_UPGRADED</td><td>Указанный подарок уже был улучшен до коллекционного.</td></tr><tr><td>400</td><td>STARGIFT_UPGRADE_UNAVAILABLE</td><td>Полученный подарок можно улучшить до коллекционного только в том случае, если установлен флаг <a href="/constructor/messageActionStarGift">messageActionStarGift</a>/<a href="/constructor/savedStarGift">savedStarGift</a>.<code>can_upgrade</code>.</td></tr></tbody></table>

### Связанные страницы

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Сведения об отправителе, получателе и сообщении, приложенных к исходному [подарку »](/api/gifts/), до того как он был превращён в [коллекционный подарок »](/api/gifts/#collectible-gifts).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

#### [savedStarGift](/constructor/savedStarGift/)

Представляет [подарок](/api/gifts/), принадлежащий пиру.
