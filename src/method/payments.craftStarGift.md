---
title: "payments.craftStarGift"
original: "https://core.telegram.org/method/payments.craftStarGift"
section: ref
kind: method
description: "Создать новый коллекционный подарок », объединив от 1 до 4 принадлежащих вам коллекционных подарков одного и того же базового типа."
layout: layout.njk
---

# payments.craftStarGift

Создать новый [коллекционный подарок »](/api/gifts/#collectible-gifts), объединив от 1 до 4 принадлежащих вам коллекционных подарков одного и того же базового типа.

У всех переданных подарков должно совпадать поле [starGiftUnique](/constructor/starGiftUnique/).`gift_id`, они должны быть пригодны для крафта и не должны быть заблокированы будущей отметкой времени `can_craft_at`.

Первый переданный подарок не должен быть [размещён в блокчейне TON](/api/gifts/#hosted-collectible-gifts).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
payments.craftStarGift#b0f9684f stargift:Vector<InputSavedStarGift> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputSavedStarGift">InputSavedStarGift</a>&gt;</td><td>От 1 до 4 принадлежащих пользователю коллекционных подарков одного типа, которые используются для <a href="/api/gifts#crafting-collectible-gifts">крафта »</a>. При успешном крафте идентификатор первого подарка используется повторно.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>Переданное значение inputSavedStarGiftChat.saved_id пусто.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.
