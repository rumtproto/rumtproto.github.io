---
title: "foundStory (конструктор)"
original: "https://core.telegram.org/constructor/foundStory"
section: ref
kind: constructor
layout: layout.njk
---

# foundStory

*Конструктор из схемы TL.*

> A story found using [global story search »](https://core.telegram.org/api/stories#searching-stories).

## Определение TL

```
foundStory#e87acbc0 peer:Peer story:StoryItem = FoundStory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The peer that posted the story. |
| story | [StoryItem](/type/StoryItem/) | The story. |

## Тип

[FoundStory](/type/FoundStory/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
