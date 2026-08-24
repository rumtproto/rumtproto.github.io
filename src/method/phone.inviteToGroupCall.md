---
title: "phone.inviteToGroupCall"
original: "https://core.telegram.org/method/phone.inviteToGroupCall"
section: ref
kind: method
description: "Пригласить группу пользователей в видеочат или трансляцию »; нельзя использовать для прямых историй » и конференц-звонков »."
layout: layout.njk
---

# phone.inviteToGroupCall

Пригласить группу пользователей в [видеочат или трансляцию »](/api/group-calls/#video-chats-livestreams); нельзя использовать для [прямых историй »](/api/group-calls/#live-stories) и [конференц-звонков »](/api/group-calls/#conference-calls).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.inviteToGroupCall#7b393160 call:InputGroupCall users:Vector<InputUser> = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td><a href="/api/group-calls#video-chats-livestreams">Видеочат или трансляция »</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>Пользователи, которых нужно пригласить.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>CHAT_TYPE_INVALID</td><td>Указанный тип пользователя недействителен.</td></tr><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>Указанный групповой звонок нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>400</td><td>INVITE_FORBIDDEN_WITH_JOINAS</td><td>Если пользователь присоединился к групповому звонку анонимно, от имени канала, он не может приглашать в звонок других пользователей, так как это привело бы к деанонимизации: приглашение было бы отправлено с исходным идентификатором пользователя, а не с анонимизированным идентификатором канала.</td></tr><tr><td>400</td><td>USER_ALREADY_INVITED</td><td>Вы уже пригласили этого пользователя.</td></tr><tr><td>403</td><td>USER_NOT_PARTICIPANT</td><td>Вы не состоите в этой супергруппе или канале.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
