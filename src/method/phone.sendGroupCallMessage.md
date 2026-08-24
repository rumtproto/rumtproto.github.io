---
title: "phone.sendGroupCallMessage"
original: "https://core.telegram.org/method/phone.sendGroupCallMessage"
section: ref
kind: method
description: "Отправить сообщение внутри звонка всем участникам видеочата, трансляции или прямой истории, в том числе в режиме RTMP; подробнее см. здесь »."
layout: layout.njk
---

# phone.sendGroupCallMessage

Отправить сообщение внутри звонка всем участникам видеочата, трансляции или прямой истории, в том числе в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#in-call-messages).

Поле `send_as` можно заполнять только для прямых историй, где оно необязательно задаёт отображаемого автора. Если оно не задано, сервер выбирает подходящего автора автоматически. Не заполняйте его для видеочатов и трансляций.

Видеочаты, трансляции и прямые истории поддерживают [анимированные эмодзи-реакции »](/api/group-calls/#in-call-reactions), закодированные как сообщения, содержащие только стандартный доступный эмодзи реакции или одну сущность пользовательского эмодзи.

Для платного комментария к прямой истории передайте подтверждённую пользователем сумму пожертвования в `allow_paid_stars`. Для всех комментаторов, кроме владельца прямой истории, эта сумма должна быть не меньше текущего минимума, заданного в [groupCall](/constructor/groupCall/).`send_paid_messages_stars`. Чтобы выделить комментарий, можно пожертвовать большую сумму. Владелец прямой истории может комментировать, не заполняя `allow_paid_stars`. Чтобы отправить отдельное платное пожертвование прямой истории, передайте положительное значение `allow_paid_stars` и пустое поле `message`; полный порядок действий см. [здесь »](/api/group-calls/#paid-live-story-donations).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Видеочат, трансляция или прямой эфир в истории, которые должны получить сообщение, реакцию или донат</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Новый случайный идентификатор, сгенерированный клиентом и служащий для дедупликации сообщения или пожертвования. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Текст сообщения или эмодзи реакции; при отправке отдельного платного пожертвования прямой истории передайте пустое значение</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Подтверждённое пользователем количество Telegram Stars для доната с комментарием к прямой трансляции или отдельного доната</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>Необязательный пир, отображаемый как автор сообщения или реакции в прямой истории; можно использовать только для прямых историй</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>400</td><td>GROUPCALL_JOIN_MISSING</td><td>Вы не присоединились к этому групповому звонку.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [groupCall](/constructor/groupCall/)

Описывает [групповой звонок](/api/group-calls/).

[@term:min] Если установлен флаг `min`, это частичный (`min`) конструктор: только часть его полей содержит актуальные сведения, и его необходимо объединить с ранее закешированным не-`min` конструктором, как описано ниже. Если полный (не-`min`) конструктор для этого звонка ранее не был закеширован, `min`-конструктор следует отбросить.

[@term:access_hash] Если установлен флаг `min`, допускается использовать следующие обязательные поля: `id`, `access_hash`, `participants_count` и `version`. Кроме того, **только** следующие условные поля допускается использовать при их наличии, с учётом обычной проверки `version`:

-   `conference`
-   `rtmp_stream`
-   `listeners_hidden`
-   `title`
-   `messages_enabled`
-   `record_start_date` и `record_video_active`
-   `schedule_date`
-   `send_paid_messages_stars`

Если установлен флаг `min`, следующие поля **обязательно игнорируются**, а их значения берутся из ранее закешированного не-`min` конструктора:

-   `join_muted`
-   `can_change_join_muted`
-   `schedule_start_subscribed`
-   `can_start_video`
-   `creator`
-   `can_change_messages_enabled`
-   `unmuted_video_count`
-   `unmuted_video_limit`
-   `stream_dc_id`
-   `invite_link`
-   `default_send_as`

Флаг `join_date_asc` устанавливается только при создании звонка и в дальнейшем никогда не меняется, поэтому он тоже не применяется из `min`-конструктора.
