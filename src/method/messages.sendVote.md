---
title: "messages.sendVote"
original: "https://core.telegram.org/method/messages.sendVote"
section: ref
kind: method
description: "Проголосовать в опросе"
layout: layout.njk
---

# messages.sendVote

Проголосовать в [опросе](/constructor/poll/)

Начиная со слоя 159 голос отправляется от имени пира, указанного через [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Перед голосованием клиентам следует проверить, что пользователю действительно разрешено голосовать: голосование невозможно, если опрос закрыт, если он [только для подписчиков »](/api/poll/#subscriber-only-polls), а у пользователя нет нужной подписки, либо если он [ограничен по странам »](/api/poll/#country-restricted-polls), а [`phone_country_iso2` »](/api/config/#phone-country-iso2) пользователя отсутствует в списке разрешённых стран опроса. Полный перечень условий см. в разделе [ограничения на голосование »](/api/poll/#vote-restrictions).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendVote#10ea6184 peer:InputPeer msg_id:int options:Vector<bytes> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, в котором был отправлен опрос</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения с опросом</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/bytes">bytes</a>&gt;</td><td>Выбранные варианты</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MESSAGE_POLL_CLOSED</td><td>Опрос закрыт.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>OPTIONS_TOO_MUCH</td><td>Указано слишком много вариантов.</td></tr><tr><td>400</td><td>OPTION_INVALID</td><td>Выбран недопустимый вариант.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>406</td><td>POLL_COUNTRY_RESTRICTED</td><td>Пользователи из страны текущего пользователя не могут голосовать в этом <a href="/api/poll#country-restricted-polls">опросе с ограничением по странам&nbsp;»</a>.</td></tr><tr><td>406</td><td>POLL_MEMBER_RESTRICTED</td><td>Голосовать в этом опросе могут только подписчики канала.</td></tr><tr><td>400</td><td>REVOTE_NOT_ALLOWED</td><td>Вы не можете изменить свой голос.</td></tr></tbody></table>

### Связанные страницы

#### [poll](/constructor/poll/)

Опрос

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Изменить пир по умолчанию, используемый при отправке сообщений, реакций и голосов в опросах в определённую группу

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
