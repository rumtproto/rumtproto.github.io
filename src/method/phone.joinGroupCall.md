---
title: "phone.joinGroupCall"
original: "https://core.telegram.org/method/phone.joinGroupCall"
section: ref
kind: method
description: "Присоединиться к групповому звонку любого типа ». Для конференций дополнительно требуется сквозной сценарий подключения »."
layout: layout.njk
---

# phone.joinGroupCall

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

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Присоединиться с отключённым микрофоном; обязательно для слушателей прямых историй и зрителей в режиме RTMP</td></tr><tr><td><strong>video_stopped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Присоединиться с отключённым видео; обязательно для слушателей прямых историй и зрителей в режиме RTMP</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок, к которому нужно присоединиться</td></tr><tr><td><strong>join_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Присоединиться к групповому звонку, представляясь указанным пользователем или каналом; этот пир также используется как автор сообщений во время звонка в обычных видеочатах и трансляциях. Использовать другого пира могут только видеочаты и трансляции; это поле должно быть равно <a href="/constructor/inputPeerSelf">inputPeerSelf</a> при присоединении к <a href="/api/group-calls#live-stories">прямым историям »</a> или <a href="/api/group-calls#conference-calls">конференц-звонкам »</a>.</td></tr><tr><td><strong>invite_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Хеш приглашения из <a href="/api/links#video-chat-livestream-links">пригласительной ссылки »</a>; если указан, позволяет говорить в трансляции или групповом звонке с отключёнными микрофонами (только для <a href="/api/group-calls#video-chats-livestreams">видеочатов и трансляций »</a>, не может использоваться <a href="/api/group-calls#live-stories">прямыми историями »</a> или <a href="/api/group-calls#conference-calls">конференц-звонками »</a>).</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int256">int256</a></td><td>Только для <a href="/api/group-calls#conference-calls">конференций »</a> — ваш открытый ключ.</td></tr><tr><td><strong>block</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/group-calls#joining-a-call">Блок основной цепочки, добавляющий вступающего пользователя »</a>; только для <a href="/api/group-calls#conference-calls">конференц-звонков »</a>.</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Полезная нагрузка для входа, сформированная локальным движком групповых звонков tgcalls, как описано выше</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>DATA_JSON_INVALID</td><td>Указанные данные JSON недействительны.</td></tr><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>Указанный групповой звонок нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>400</td><td>GROUPCALL_SSRC_DUPLICATE_MUCH</td><td>Приложению необходимо повторить попытку входа в групповой звонок с новым значением SSRC.</td></tr><tr><td>400</td><td>JOIN_AS_PEER_INVALID</td><td>Указанный пир нельзя использовать для присоединения к групповому звонку.</td></tr><tr><td>400</td><td>PUBLIC_KEY_INVALID</td><td>Указанный открытый ключ e2e недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Определяет текущего пользователя.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
