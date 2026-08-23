---
title: "updatePeerBlocked (конструктор)"
original: "https://core.telegram.org/constructor/updatePeerBlocked"
section: ref
kind: constructor
layout: layout.njk
---

# updatePeerBlocked

*Конструктор из схемы TL.*

> We blocked a peer, see [here »](https://core.telegram.org/api/block) for more info on blocklists.

## Определение TL

```
updatePeerBlocked#ebe07752 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| blocked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the peer was blocked or unblocked |
| blocked_my_stories_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the peer was added/removed to/from the story blocklist; if not set, this update affects the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. |
| peer_id | [Peer](/type/Peer/) | The (un)blocked peer |

## Тип

[Update](/type/Update/)

## Related pages

#### [Blocked users](https://core.telegram.org/api/block)

Working with the blocklist.
