---
title: "phone.declineConferenceCallInvite"
original: "https://core.telegram.org/method/phone.declineConferenceCallInvite"
section: ref
kind: method
description: "Отклонить приглашение на конференц-звонок."
layout: layout.njk
---

# phone.declineConferenceCallInvite

Отклонить приглашение на [конференц-звонок](/api/group-calls/#conference-calls).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.declineConferenceCallInvite#3c479971 msg_id:int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор <a href="/constructor/messageActionConferenceCall">messageActionConferenceCall</a>, который нужно отклонить.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Представляет [конференц-звонок »](/api/group-calls/#conference-calls) либо приглашение на него, если не установлен ни флаг `missed`, ни флаг `active`.

Если [call\_requests\_disabled](/api/config/#call-requests-disabled) не установлен или равен false, входящий [messageActionConferenceCall](/constructor/messageActionConferenceCall/), у которого **не** установлены флаги `missed` и `active`, должен вызывать звонок и экран входящего вызова — так же, как при звонках один на один.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
