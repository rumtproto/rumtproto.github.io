---
title: "groupCallDonor (конструктор)"
original: "https://core.telegram.org/constructor/groupCallDonor"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallDonor

*Конструктор из схемы TL.*

> Describes a live story donor in the [donation leaderboard »](https://core.telegram.org/api/group-calls#paid-live-story-donations).

## Определение TL

```
groupCallDonor#ee430c85 flags:# top:flags.0?true my:flags.1?true peer_id:flags.3?Peer stars:long = GroupCallDonor;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| top | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this donor is included in the top-donor leaderboard |
| my | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this entry describes the current user's donations |
| peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Peer](/type/Peer/) | Donor displayed in the leaderboard |
| stars | [long](/type/long/) | Total Stars donated by this donor |

## Тип

[GroupCallDonor](/type/GroupCallDonor/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
