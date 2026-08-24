---
title: "channels.deleteHistory"
original: "https://core.telegram.org/method/channels.deleteHistory"
section: ref
kind: method
description: "Удалить историю супергруппы"
layout: layout.njk
---

# channels.deleteHistory

Удалить историю [супергруппы](/api/channel/)

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.deleteHistory#9baa9647 flags:# for_everyone:flags.0?true channel:InputChannel max_id:int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>for_everyone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли удалить историю сообщений для всех</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Супергруппа</a>, историю которой нужно удалить</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения, <strong>до которого</strong> следует удалить историю</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PARICIPANT_MISSING</td><td>Текущий пользователь не состоит в канале.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHANNEL_TOO_BIG</td><td>В этом канале слишком много участников (&gt;1000), чтобы его можно было удалить.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
