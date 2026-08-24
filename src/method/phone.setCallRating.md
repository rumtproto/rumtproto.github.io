---
title: "phone.setCallRating"
original: "https://core.telegram.org/method/phone.setCallRating"
section: ref
kind: method
description: "Оценить звонок; возвращает сведения о сообщении с оценкой, отправленном официальному VoIP-боту; подробнее обо всём процессе см. здесь »."
layout: layout.njk
---

# phone.setCallRating

Оценить звонок; возвращает сведения о сообщении с оценкой, отправленном официальному VoIP-боту; подробнее обо всём процессе см. [здесь »](/api/calls/#call-rating).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.setCallRating#59ead627 flags:# user_initiative:flags.0?true peer:InputPhoneCall rating:int comment:string = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_initiative</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Решил ли пользователь оценить звонок по собственной инициативе; НЕ должно устанавливаться, если оценка была запрошена сервером через <a href="/constructor/phoneCallDiscarded">phoneCallDiscarded</a>.<code>need_rating</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Звонок, который требуется оценить</td></tr><tr><td><strong>rating</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Оценка в звёздах от <code>1-5</code></td></tr><tr><td><strong>comment</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Дополнительный комментарий с хештегами проблем; подробнее о полном порядке действий см. <a href="/api/calls#call-rating">здесь »</a>.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [phoneCallDiscarded](/constructor/phoneCallDiscarded/)

Обозначает завершённый звонок; подробнее о полном процессе см. [здесь »](/api/calls/).

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
