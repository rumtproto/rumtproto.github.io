---
title: "messages.setChatTheme"
original: "https://core.telegram.org/method/messages.setChatTheme"
section: ref
kind: method
description: "Изменить тему оформления определённого чата, подробнее здесь »."
layout: layout.njk
---

# messages.setChatTheme

Изменить тему оформления определённого чата, подробнее [здесь »](/api/themes/#chat-themes).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.setChatTheme#81202c9 peer:InputPeer theme:InputChatTheme = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Личный чат, в котором нужно изменить тему оформления</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/type/InputChatTheme">InputChatTheme</a></td><td>Тема, которую нужно установить.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>EMOJI_INVALID</td><td>Указанный эмодзи темы действителен.</td></tr><tr><td>400</td><td>EMOJI_NOT_MODIFIED</td><td>Тема не изменилась.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.
