---
title: "groupCall"
original: "https://core.telegram.org/constructor/groupCall"
section: ref
kind: constructor
description: "Описывает групповой звонок."
layout: layout.njk
---

# groupCall

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

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>join_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Следует ли отключить микрофон пользователю при входе в звонок. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>can_change_join_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Может ли текущий пользователь изменять значение флага <code>join_muted</code> с помощью <a href="/method/phone.toggleGroupCallSettings">phone.toggleGroupCallSettings</a>. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>join_date_asc</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Задаёт порядок, который следует использовать при локальной сортировке участников группового звонка по дате и их отображении в интерфейсе. Устанавливается только при создании звонка и после этого никогда не меняется, поэтому не применяется из <code>min</code>-конструктора.</td></tr><tr><td><strong>schedule_start_subscribed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Подписались ли мы на запланированный звонок. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>can_start_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Можете ли вы начать трансляцию видео в звонок. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>record_video_active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Ведётся ли сейчас запись группового звонка</td></tr><tr><td><strong>rtmp_stream</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Использует ли этот звонок <a href="/api/group-calls#stream-mode">режим RTMP-трансляции »</a></td></tr><tr><td><strong>listeners_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Скрыт ли список слушателей и нельзя ли получить его с помощью <a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a>. Счётчики <code>phone.groupParticipants.count</code> и <code>groupCall.participants_count</code> при этом всё равно учитывают слушателей.</td></tr><tr><td><strong>conference</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Является ли это конференц-звонком со сквозным шифрованием.</td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/constructor/true">true</a></td><td>Создал ли текущий пользователь этот групповой звонок. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>messages_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/constructor/true">true</a></td><td>Включено ли <a href="/api/group-calls#in-call-messages">наложение сообщений во время звонка »</a></td></tr><tr><td><strong>can_change_messages_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/constructor/true">true</a></td><td>Может ли текущий пользователь включать или отключать <a href="/api/group-calls#in-call-messages">наложение сообщений во время звонка »</a>. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/constructor/true">true</a></td><td>Является ли это частичным конструктором, который необходимо объединить с ранее сохранённым конструктором без флага <code>min</code> по описанным выше правилам.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор группового звонка</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Хеш доступа группового звонка</td></tr><tr><td><strong>participants_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество участников</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Название группового звонка</td></tr><tr><td><strong>stream_dc_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Идентификатор медиа-DC, который следует использовать для <a href="/api/group-calls#downloading-media-chunks">запросов RTMP-потока »</a>. Должен игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>record_start_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Когда началась запись</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/int">int</a></td><td>На когда запланировано начало звонка</td></tr><tr><td><strong>unmuted_video_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Количество человек, которые сейчас транслируют видео в звонок. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>unmuted_video_limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное количество людей, которым разрешено передавать видео в звонок. Должно игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ревизия, используемая для применения <a href="/api/group-calls#applying-group-call-updates">обновлений группового звонка »</a></td></tr><tr><td><strong>invite_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/string">string</a></td><td>Пригласительная ссылка на <a href="/api/group-calls#conference-calls">конференц-звонок »</a>. Должна игнорироваться, если установлен флаг <code>min</code>.</td></tr><tr><td><strong>send_paid_messages_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/type/long">long</a></td><td>Минимальное пожертвование в Stars, требуемое от всех пользователей, кроме владельца прямой истории, для отправки <a href="/api/group-calls#paid-live-story-comments">платного комментария »</a>; <code>0</code> или отсутствие значения разрешает бесплатные комментарии</td></tr><tr><td><strong>default_send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.21?<a href="/type/Peer">Peer</a></td><td>Пир, отображаемый по умолчанию как автор <a href="/api/group-calls#in-call-messages">комментариев и реакций в прямых историях »</a>. Должен игнорироваться, если установлен флаг <code>min</code>.</td></tr></tbody></table>

### Тип

[GroupCall](/type/GroupCall/)

### Связанные страницы

#### [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)

Изменить настройки группового звонка. Каждая настройка поддерживает разные типы групповых звонков, подробнее см. [здесь »](/api/group-calls/#managing-an-active-group-call).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Получить участников [группового звонка](/api/group-calls/#getting-info-about-a-group-call).
