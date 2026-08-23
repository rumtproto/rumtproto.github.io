---
title: "storyReactionPublicRepost (конструктор)"
original: "https://core.telegram.org/constructor/storyReactionPublicRepost"
section: ref
kind: constructor
layout: layout.njk
---

# storyReactionPublicRepost

*Конструктор из схемы TL.*

> A certain peer has reposted the story.

## Определение TL

```
storyReactionPublicRepost#cfcd0f13 peer_id:Peer story:StoryItem = StoryReaction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer_id | [Peer](/type/Peer/) | The peer that reposted the story. |
| story | [StoryItem](/type/StoryItem/) | The reposted story. |

## Тип

[StoryReaction](/type/StoryReaction/)
