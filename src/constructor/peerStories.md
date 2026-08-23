---
title: "peerStories (конструктор)"
original: "https://core.telegram.org/constructor/peerStories"
section: ref
kind: constructor
layout: layout.njk
---

# peerStories

*Конструктор из схемы TL.*

> [Stories](https://core.telegram.org/api/stories) associated to a peer

## Определение TL

```
peerStories#9a35e999 flags:# peer:Peer max_read_id:flags.0?int stories:Vector<StoryItem> = PeerStories;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | The peer |
| max_read_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, contains the ID of the maximum read story |
| stories | [Vector](https://core.telegram.org/type/Vector%20t)<[StoryItem](/type/StoryItem/)> | Stories |

## Тип

[PeerStories](/type/PeerStories/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
