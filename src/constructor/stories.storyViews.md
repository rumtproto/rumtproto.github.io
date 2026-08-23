---
title: "stories.storyViews (конструктор)"
original: "https://core.telegram.org/constructor/stories.storyViews"
section: ref
kind: constructor
layout: layout.njk
---

# stories.storyViews

*Конструктор из схемы TL.*

> Reaction and view counters for a list of [stories](https://core.telegram.org/api/stories)

## Определение TL

```
stories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| views | [Vector](https://core.telegram.org/type/Vector%20t)<[StoryViews](/type/StoryViews/)> | View date and reaction information of multiple stories |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[stories.StoryViews](/type/stories.StoryViews/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
