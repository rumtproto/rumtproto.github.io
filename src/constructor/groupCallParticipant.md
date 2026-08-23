---
title: "groupCallParticipant (конструктор)"
original: "https://core.telegram.org/constructor/groupCallParticipant"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallParticipant

*Конструктор из схемы TL.*

> Describes a group call participant and their current state, see [applying group call updates »](https://core.telegram.org/api/group-calls#applying-group-call-updates).

## Определение TL

```
groupCallParticipant#2a3dc7ac flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo paid_stars_total:flags.16?long = GroupCallParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the participant is muted |
| left | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the participant left the media layer; in conferences, another participant must then prune them from the E2E blockchain |
| can_self_unmute | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the participant can unmute themselves |
| just_joined | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether the participant has just joined |
| versioned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, the application logic for this update is slightly different, see [here »](https://core.telegram.org/api/group-calls#applying-group-call-updates) for more info on the full flow. |
| min | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If not set, the volume and muted_by_you fields can be safely used to overwrite locally cached information; otherwise, volume will contain valid information only if volume_by_admin is set both in the cache and in the received constructor. |
| muted_by_you | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether this participant was muted by the current user |
| volume_by_admin | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Whether our volume can only changed by an admin |
| self | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether this participant is the current user |
| video_joined | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | Whether this participant is currently broadcasting video |
| peer | [Peer](/type/Peer/) | Peer represented by this participant |
| date | [int](/type/int/) | When did this participant join the group call |
| active_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | When was this participant last active in the group call |
| source | [int](/type/int/) | Source ID of the participant's main audio stream |
| volume | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[int](/type/int/) | Volume, between 1 and 20000; 10000 represents 100% volume. If not set, the volume is set to 100%. |
| about | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](/type/string/) | Info about this participant |
| raise_hand_rating | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[long](/type/long/) | Specifies the UI visualization order of peers with raised hands: peers with a higher rating should be showed first in the list. |
| video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[GroupCallParticipantVideo](/type/GroupCallParticipantVideo/) | Info about the video stream the participant is currently broadcasting |
| presentation | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[GroupCallParticipantVideo](/type/GroupCallParticipantVideo/) | Info about the screen sharing stream the participant is currently broadcasting |
| paid_stars_total | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[long](/type/long/) | Total Stars donated by this participant in a live story |

## Тип

[GroupCallParticipant](/type/GroupCallParticipant/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
