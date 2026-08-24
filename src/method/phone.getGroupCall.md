---
title: "phone.getGroupCall"
original: "https://core.telegram.org/method/phone.getGroupCall"
section: ref
kind: method
description: "Получить информацию о групповом звонке и его участниках."
layout: layout.njk
---

# phone.getGroupCall

Получить информацию о [групповом звонке](/api/group-calls/#getting-info-about-a-group-call) и его участниках.

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;
---functions---
phone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок любого типа, который нужно получить</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное количество участников, возвращаемых этим вызовом (0 — вернуть количество, определяемое сервером).<br>Если количество возвращённых участников меньше <a href="/constructor/groupCall">groupCall</a>.<code>participants_count</code>, получайте остальных участников постранично с помощью <a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a>, передавая в <code>offset</code> значение <a href="/constructor/phone.groupCall">phone.groupCall</a>.<code>participants_next_offset</code>, возвращённое этим вызовом.<br>Этот параметр ведёт себя иначе, чем <code>limit</code> в <a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a>, подробнее <a href="/api/group-calls#getting-info-about-a-group-call">здесь »</a>.</td></tr></tbody></table>

### Результат

[phone.GroupCall](/type/phone.GroupCall/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>GROUPCALL_FORBIDDEN</td><td>Указанный групповой звонок нельзя использовать в этом контексте.</td></tr><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

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

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Получить участников [группового звонка](/api/group-calls/#getting-info-about-a-group-call).

#### [phone.groupCall](/constructor/phone.groupCall/)

Содержит информацию о групповом звонке и первую страницу списка участников, см. [получение информации о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
