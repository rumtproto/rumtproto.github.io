---
title: "updateNewStoryReaction (конструктор)"
original: "https://core.telegram.org/constructor/updateNewStoryReaction"
section: ref
kind: constructor
layout: layout.njk
---

# updateNewStoryReaction

*Конструктор из схемы TL.*

> Represents a new [reaction to a story](https://core.telegram.org/api/reactions#notifications-about-reactions).

## Определение TL

```
updateNewStoryReaction#1824e40b story_id:int peer:Peer reaction:Reaction = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| story_id | [int](/type/int/) | [Story ID](https://core.telegram.org/api/stories). |
| peer | [Peer](/type/Peer/) | The peer where the story was posted. |
| reaction | [Reaction](/type/Reaction/) | The [reaction](https://core.telegram.org/api/reactions). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
