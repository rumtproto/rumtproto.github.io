---
title: "storyReaction (конструктор)"
original: "https://core.telegram.org/constructor/storyReaction"
section: ref
kind: constructor
layout: layout.njk
---

# storyReaction

*Конструктор из схемы TL.*

> How a certain peer reacted to a story

## Определение TL

```
storyReaction#6090d6d5 peer_id:Peer date:int reaction:Reaction = StoryReaction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer_id | [Peer](/type/Peer/) | The peer |
| date | [int](/type/int/) | Reaction date |
| reaction | [Reaction](/type/Reaction/) | The reaction |

## Тип

[StoryReaction](/type/StoryReaction/)
