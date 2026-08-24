---
title: "phone.startScheduledGroupCall"
original: "https://core.telegram.org/method/phone.startScheduledGroupCall"
section: ref
kind: method
description: "Начать запланированный групповой звонок."
layout: layout.njk
---

# phone.startScheduledGroupCall

Начать запланированный [групповой звонок](/api/group-calls/#video-chats-livestreams).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.startScheduledGroupCall#5680e342 call:InputGroupCall = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Запуск запланированного видеочата или трансляции до или после назначенной даты</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_ALREADY_STARTED</td><td>Групповой звонок уже начался, вы можете присоединиться к нему напрямую с помощью <a href="/method/phone.joinGroupCall">phone.joinGroupCall</a>.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [phone.joinGroupCall](/method/phone.joinGroupCall/)

Присоединиться к групповому звонку [любого типа »](/api/group-calls/#group-call-types). Для конференций дополнительно требуется [сквозной сценарий подключения »](/api/end-to-end/group-calls/#joining-a-call).

Поле `params` должно содержать полезную нагрузку для входа, сформированную локальным движком групповых звонков tgcalls. Она содержит случайный ненулевой аудио-`ssrc`, ICE-значения `ufrag` и `pwd`, DTLS-`fingerprints`, а при публикации видео — ещё и `ssrc-groups`.

Например, полезная нагрузка для входа без публикации видео имеет следующий вид:

```
{
  "ssrc": 123456789,
  "ufrag": "...",
  "pwd": "...",
  "fingerprints": [{
    "hash": "sha-256",
    "fingerprint": "...",
    "setup": "passive"
  }]
}
```

При подключении к звонку в режиме RTMP формируйте полезную нагрузку без групп публикуемых видеоисточников.
