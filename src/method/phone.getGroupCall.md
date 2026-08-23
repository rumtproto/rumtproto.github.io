---
title: "phone.getGroupCall (метод)"
original: "https://core.telegram.org/method/phone.getGroupCall"
section: ref
kind: method
layout: layout.njk
---

# phone.getGroupCall

*Метод из схемы TL.*

> Get info about a [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) and its participants.

## Определение TL

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;
---functions---
phone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| call | [InputGroupCall](/type/InputGroupCall/) | Group call of any type to fetch |
| limit | [int](/type/int/) | Maximum number of participants to return in this call (0 to return a server-defined amount). If the number of returned participants is less than [groupCall](/constructor/groupCall/).participants_count, paginate through the remaining participants using [phone.getGroupParticipants](/method/phone.getGroupParticipants/), passing to offset the [phone.groupCall](/constructor/phone.groupCall/).participants_next_offset returned by this call. This parameter behaves in a different way compared to the limit of [phone.getGroupParticipants](/method/phone.getGroupParticipants/), see [here »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) for more info. |

## Результат

[phone.GroupCall](/type/phone.GroupCall/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | GROUPCALL_FORBIDDEN | The specified group call cannot be used in this context. |
| 400 | GROUPCALL_INVALID | The specified group call is invalid. |

## Related pages

#### [groupCall](/constructor/groupCall/)

Describes a [group call](https://core.telegram.org/api/group-calls).

If the `min` flag is set, this is a partial (`min`) constructor: only a subset of its fields contains up-to-date information, and it must be merged into a previously cached non-`min` constructor as described below. If no full (non-`min`) constructor for this call was cached previously, the `min` constructor must be discarded.

When `min` is set, the following mandatory fields may be used: `id`, `access_hash`, `participants_count` and `version`. In addition, **only** the following conditional fields may be used if present, subject to the usual `version` check:

-   `conference`
-   `rtmp_stream`
-   `listeners_hidden`
-   `title`
-   `messages_enabled`
-   `record_start_date` and `record_video_active`
-   `schedule_date`
-   `send_paid_messages_stars`

When `min` is set, the following fields **must be ignored**, keeping the values from the previously cached non-`min` constructor:

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

The `join_date_asc` flag is set only when the call is created and never changes afterwards, so it too is not applied from a `min` constructor.

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) participants.

#### [phone.groupCall](/constructor/phone.groupCall/)

Contains group call information and an initial participant page, see [getting info about a group call »](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call).

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
