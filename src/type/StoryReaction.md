---
title: "StoryReaction (тип)"
original: "https://core.telegram.org/type/StoryReaction"
section: ref
kind: type
layout: layout.njk
---

# StoryReaction

*Тип из схемы TL.*

> How a certain peer reacted to or interacted with a story

## Определение TL

```
storyReaction#6090d6d5 peer_id:Peer date:int reaction:Reaction = StoryReaction;
storyReactionPublicForward#bbab2643 message:Message = StoryReaction;
storyReactionPublicRepost#cfcd0f13 peer_id:Peer story:StoryItem = StoryReaction;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [storyReaction](/constructor/storyReaction/) | How a certain peer reacted to a story |
| [storyReactionPublicForward](/constructor/storyReactionPublicForward/) | A certain peer has forwarded the story as a message to a public chat or channel. |
| [storyReactionPublicRepost](/constructor/storyReactionPublicRepost/) | A certain peer has reposted the story. |
