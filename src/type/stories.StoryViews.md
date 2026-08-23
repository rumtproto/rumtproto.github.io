---
title: "stories.StoryViews (тип)"
original: "https://core.telegram.org/type/stories.StoryViews"
section: ref
kind: type
layout: layout.njk
---

# stories.StoryViews

*Тип из схемы TL.*

> Reaction and view counters for a list of [stories](https://core.telegram.org/api/stories)

## Определение TL

```
stories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;

---functions---

stories.getStoriesViews#28e16cc8 peer:InputPeer id:Vector<int> = stories.StoryViews;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [stories.storyViews](/constructor/stories.storyViews/) | Reaction and view counters for a list of [stories](https://core.telegram.org/api/stories) |

## Методы

| Method | Описание |
|---|---|
| [stories.getStoriesViews](/method/stories.getStoriesViews/) | Obtain info about the view count, forward count, reactions and recent viewers of one or more [stories](https://core.telegram.org/api/stories). |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
