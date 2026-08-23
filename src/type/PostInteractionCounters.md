---
title: "PostInteractionCounters (тип)"
original: "https://core.telegram.org/type/PostInteractionCounters"
section: ref
kind: type
layout: layout.njk
---

# PostInteractionCounters

*Тип из схемы TL.*

> Interaction counters

## Определение TL

```
postInteractionCountersMessage#e7058e7f msg_id:int views:int forwards:int reactions:int = PostInteractionCounters;
postInteractionCountersStory#8a480e27 story_id:int views:int forwards:int reactions:int = PostInteractionCounters;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [postInteractionCountersMessage](/constructor/postInteractionCountersMessage/) | Interaction counters for a message. |
| [postInteractionCountersStory](/constructor/postInteractionCountersStory/) | Interaction counters for a story. |
