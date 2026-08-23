---
title: "groupCall (конструктор)"
original: "https://core.telegram.org/constructor/groupCall"
section: ref
kind: constructor
layout: layout.njk
---

# groupCall

*Конструктор из схемы TL.*

> Describes a [group call](https://core.telegram.org/api/group-calls).
> If the `min` flag is set, this is a partial (`min`) constructor: only a subset of its fields contains up-to-date information, and it must be merged into a previously cached non-`min` constructor as described below. If no full (non-`min`) constructor for this call was cached previously, the `min` constructor must be discarded.
> When `min` is set, the following mandatory fields may be used: `id`, `access_hash`, `participants_count` and `version`. In addition, **only** the following conditional fields may be used if present, subject to the usual `version` check:
> -   `conference`
> -   `rtmp_stream`
> -   `listeners_hidden`
> -   `title`
> -   `messages_enabled`
> -   `record_start_date` and `record_video_active`
> -   `schedule_date`
> -   `send_paid_messages_stars`
> When `min` is set, the following fields **must be ignored**, keeping the values from the previously cached non-`min` constructor:
> -   `join_muted`
> -   `can_change_join_muted`
> -   `schedule_start_subscribed`
> -   `can_start_video`
> -   `creator`
> -   `can_change_messages_enabled`
> -   `unmuted_video_count`
> -   `unmuted_video_limit`
> -   `stream_dc_id`
> -   `invite_link`
> -   `default_send_as`
> The `join_date_asc` flag is set only when the call is created and never changes afterwards, so it too is not applied from a `min` constructor.

## Определение TL

```
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| join_muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the user should be muted upon joining the call. Must be ignored if the min flag is set. |
| can_change_join_muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the current user can change the value of the join_muted flag using [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/). Must be ignored if the min flag is set. |
| join_date_asc | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Specifies the ordering to use when locally sorting by date and displaying in the UI group call participants. Set only when the call is created and never changed afterwards, so it is not applied from a min constructor. |
| schedule_start_subscribed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether we subscribed to the scheduled call. Must be ignored if the min flag is set. |
| can_start_video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether you can start streaming video into the call. Must be ignored if the min flag is set. |
| record_video_active | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether the group call is currently being recorded |
| rtmp_stream | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether this call uses [RTMP livestream mode »](https://core.telegram.org/api/group-calls#stream-mode) |
| listeners_hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether the listeners list is hidden and cannot be fetched using [phone.getGroupParticipants](/method/phone.getGroupParticipants/). The phone.groupParticipants.count and groupCall.participants_count counters will still include listeners. |
| conference | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Whether this is an E2E conference call. |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | Whether the current user created this group call. Must be ignored if the min flag is set. |
| messages_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[true](/constructor/true/) | Whether the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages) is enabled |
| can_change_messages_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[true](/constructor/true/) | Whether the current user may enable or disable the [in-call message overlay »](https://core.telegram.org/api/group-calls#in-call-messages). Must be ignored if the min flag is set. |
| min | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | Whether this is a partial constructor that must be merged into a previously cached non-min constructor, following the rules described above. |
| id | [long](/type/long/) | Group call ID |
| access_hash | [long](/type/long/) | Group call access hash |
| participants_count | [int](/type/int/) | Participant count |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Group call title |
| stream_dc_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Media DC ID to use for [RTMP stream requests »](https://core.telegram.org/api/group-calls#downloading-media-chunks). Must be ignored if the min flag is set. |
| record_start_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | When was the recording started |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[int](/type/int/) | When is the call scheduled to start |
| unmuted_video_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Number of people currently streaming video into the call. Must be ignored if the min flag is set. |
| unmuted_video_limit | [int](/type/int/) | Maximum number of people allowed to stream video into the call. Must be ignored if the min flag is set. |
| version | [int](/type/int/) | Revision used to apply [group call updates »](https://core.telegram.org/api/group-calls#applying-group-call-updates) |
| invite_link | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | Invitation link for a [conference call »](https://core.telegram.org/api/group-calls#conference-calls). Must be ignored if the min flag is set. |
| send_paid_messages_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[long](/type/long/) | Minimum Stars donation required from users other than the live story owner to send a [paid comment »](https://core.telegram.org/api/group-calls#paid-live-story-comments); 0 or no value allows free comments |
| default_send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[Peer](/type/Peer/) | Default peer displayed as the author of [live story comments and reactions »](https://core.telegram.org/api/group-calls#in-call-messages). Must be ignored if the min flag is set. |

## Тип

[GroupCall](/type/GroupCall/)

## Related pages

#### [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)

Change group call settings. Each setting supports different group call types, see [here »](https://core.telegram.org/api/group-calls#managing-an-active-group-call) for more info.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Get [group call](https://core.telegram.org/api/group-calls#getting-info-about-a-group-call) participants.
