---
title: "phone.getGroupCallStreamChannels"
original: "https://core.telegram.org/method/phone.getGroupCallStreamChannels"
section: ref
kind: method
description: "Получить доступные каналы потока и текущую позицию воспроизведения видеочата, трансляции или прямой истории в режиме RTMP; полный порядок действий описан здесь »."
layout: layout.njk
---

# phone.getGroupCallStreamChannels

Получить доступные каналы потока и текущую позицию воспроизведения видеочата, трансляции или прямой истории в режиме RTMP; полный порядок действий описан [здесь »](/api/group-calls/#rtmp-mode).  
Перед вызовом этого метода необходимо подключиться к групповому звонку. Отправляйте запрос в медиа-DC, указанный в [groupCall](/constructor/groupCall/).`stream_dc_id`.

```
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;
---functions---
phone.getGroupCallStreamChannels#1ab21940 call:InputGroupCall = phone.GroupCallStreamChannels;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Видеочат, трансляция или прямая история в режиме RTMP</td></tr></tbody></table>

### Результат

[phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>400</td><td>GROUPCALL_JOIN_MISSING</td><td>Вы не присоединились к этому групповому звонку.</td></tr></tbody></table>

### Связанные страницы

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
