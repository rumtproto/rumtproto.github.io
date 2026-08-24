---
title: "phone.editGroupCallParticipant"
original: "https://core.telegram.org/method/phone.editGroupCallParticipant"
section: ref
kind: method
description: "Изменить сведения об участнике видеочата, трансляции или конференции без RTMP. Поле raise_hand поддерживается только в видеочатах и трансляциях; подробнее см. здесь »."
layout: layout.njk
---

# phone.editGroupCallParticipant

Изменить сведения об участнике видеочата, трансляции или конференции без RTMP. Поле `raise_hand` поддерживается только в видеочатах и трансляциях; подробнее см. [здесь »](/api/group-calls/#managing-an-active-group-call).

Обратите внимание: параметры [flags](/mtproto/TL-combinators/#conditional-fields).N?[Bool](/type/Bool/) могут принимать три значения:

-   Если [флаг TL](/mtproto/TL-combinators/#conditional-fields) не установлен, прежнее значение не изменится.
-   Если [флаг TL](/mtproto/TL-combinators/#conditional-fields) установлен и содержит [boolTrue](/constructor/boolTrue/), прежнее значение будет заменено на `true`.
-   Если [флаг TL](/mtproto/TL-combinators/#conditional-fields) установлен и содержит [boolFalse](/constructor/boolFalse/), прежнее значение будет заменено на `false`.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.editGroupCallParticipant#a5273abf flags:# call:InputGroupCall participant:InputPeer muted:flags.0?Bool volume:flags.1?int raise_hand:flags.2?Bool video_stopped:flags.3?Bool video_paused:flags.4?Bool presentation_paused:flags.5?Bool = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Видеочат, трансляция или конференция без RTMP</td></tr><tr><td><strong>participant</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Участник группового звонка (может быть и сам пользователь)</td></tr><tr><td><strong>muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Изменить состояние отключения микрофона у участника; разрешение принудительно заглушённому участнику самостоятельно включить микрофон не включает его немедленно</td></tr><tr><td><strong>volume</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Новая громкость, от <code>1</code> до <code>20000</code>; значение <code>10000</code> соответствует 100%. Без прав модерации изменение громкости другого участника влияет только на локальное воспроизведение</td></tr><tr><td><strong>raise_hand</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Bool">Bool</a></td><td>Поднять или опустить руку; поддерживается только в видеочатах и трансляциях</td></tr><tr><td><strong>video_stopped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Bool">Bool</a></td><td>Начать или остановить видеопоток текущего пользователя</td></tr><tr><td><strong>video_paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Bool">Bool</a></td><td>Приостановить или возобновить видеопоток текущего пользователя</td></tr><tr><td><strong>presentation_paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/Bool">Bool</a></td><td>Приостановить или возобновить поток демонстрации экрана текущего пользователя</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>Указанный групповой звонок нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>400</td><td>PARTICIPANT_JOIN_MISSING</td><td>Попытка включить презентацию, когда пользователь не присоединился к видеочату с помощью <a href="/method/phone.joinGroupCall">phone.joinGroupCall</a>.</td></tr><tr><td>400</td><td>RAISE_HAND_FORBIDDEN</td><td>Вы не можете поднять руку.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr><tr><td>400</td><td>USER_VOLUME_INVALID</td><td>Указанная громкость пользователя недопустима.</td></tr><tr><td>400</td><td>VIDEO_PAUSE_FORBIDDEN</td><td>Вы не можете приостановить видеопоток.</td></tr><tr><td>400</td><td>VIDEO_STOP_FORBIDDEN</td><td>Вы не можете остановить видеопоток.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Bool](/type/Bool/)

Логический тип.

#### [boolTrue](/constructor/boolTrue/)

Конструктор можно трактовать как **логическое** значение `true`.

#### [boolFalse](/constructor/boolFalse/)

Конструктор может интерпретироваться как **логическое**`false`-значение.

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
