---
title: "updateGroupCall (конструктор)"
original: "https://core.telegram.org/constructor/updateGroupCall"
section: ref
kind: constructor
layout: layout.njk
---

# updateGroupCall

*Конструктор из схемы TL.*

> Indicates that group call information changed, see [applying group call updates »](https://core.telegram.org/api/group-calls#applying-group-call-updates).

## Определение TL

```
updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| live_story | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this update belongs to a [live story »](https://core.telegram.org/api/group-calls#live-stories) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | Peer associated with the group call |
| call | [GroupCall](/type/GroupCall/) | Info about the group call or livestream |

## Тип

[Update](/type/Update/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
