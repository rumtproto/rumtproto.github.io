---
title: "GroupCall"
original: "https://core.telegram.org/type/GroupCall"
section: ref
kind: type
description: "Групповой звонок"
layout: layout.njk
---

# GroupCall

Групповой звонок

```
groupCallDiscarded#7780bcb4 id:long access_hash:long duration:int = GroupCall;
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/groupCallDiscarded">groupCallDiscarded</a></td><td>Описывает завершённый <a href="/api/group-calls">групповой звонок</a>.</td></tr><tr><td><a href="/constructor/groupCall">groupCall</a></td><td>[@term:access_hash] Описывает <a href="/api/group-calls">групповой звонок</a>.<br><br>Если установлен флаг <code>min</code>, это частичный (<code>min</code>) конструктор: только часть его полей содержит актуальные сведения, и его необходимо объединить с ранее закешированным не-<code>min</code> конструктором, как описано ниже. Если полный (не-<code>min</code>) конструктор для этого звонка ранее не был закеширован, <code>min</code>-конструктор следует отбросить.<br><br>Если установлен флаг <code>min</code>, допускается использовать следующие обязательные поля: <code>id</code>, <code>access_hash</code>, <code>participants_count</code> и <code>version</code>. Кроме того, <strong>только</strong> следующие условные поля допускается использовать при их наличии, с учётом обычной проверки <code>version</code>:<br><br>- <code>conference</code><br>- <code>rtmp_stream</code><br>- <code>listeners_hidden</code><br>- <code>title</code><br>- <code>messages_enabled</code><br>- <code>record_start_date</code> и <code>record_video_active</code><br>- <code>schedule_date</code><br>- <code>send_paid_messages_stars</code><br><br>Если установлен флаг <code>min</code>, следующие поля <strong>обязательно игнорируются</strong>, а их значения берутся из ранее закешированного конструктора без флага <code>min</code>:<br><br>- <code>join_muted</code><br>- <code>can_change_join_muted</code><br>- <code>schedule_start_subscribed</code><br>- <code>can_start_video</code><br>- <code>creator</code><br>- <code>can_change_messages_enabled</code><br>- <code>unmuted_video_count</code><br>- <code>unmuted_video_limit</code><br>- <code>stream_dc_id</code><br>- <code>invite_link</code><br>- <code>default_send_as</code><br><br>Флаг <code>join_date_asc</code> устанавливается только при создании звонка и в дальнейшем никогда не меняется, поэтому он тоже не применяется из <code>min</code>-конструктора.</td></tr></tbody></table>
