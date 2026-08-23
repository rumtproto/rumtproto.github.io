---
title: "StoryViews (тип)"
original: "https://core.telegram.org/type/StoryViews"
section: ref
kind: type
layout: layout.njk
---

# StoryViews

*Тип из схемы TL.*

> Aggregated view and reaction information of a [story](https://core.telegram.org/api/stories)

## Определение TL

```
storyViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [storyViews](/constructor/storyViews/) | Aggregated view and reaction information of a [story](https://core.telegram.org/api/stories). |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
