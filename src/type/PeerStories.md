---
title: "PeerStories (тип)"
original: "https://core.telegram.org/type/PeerStories"
section: ref
kind: type
layout: layout.njk
---

# PeerStories

*Тип из схемы TL.*

> [Stories](https://core.telegram.org/api/stories) associated to a peer

## Определение TL

```
peerStories#9a35e999 flags:# peer:Peer max_read_id:flags.0?int stories:Vector<StoryItem> = PeerStories;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [peerStories](/constructor/peerStories/) | [Stories](https://core.telegram.org/api/stories) associated to a peer |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
