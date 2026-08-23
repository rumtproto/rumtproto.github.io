---
title: "updateSentStoryReaction (конструктор)"
original: "https://core.telegram.org/constructor/updateSentStoryReaction"
section: ref
kind: constructor
layout: layout.njk
---

# updateSentStoryReaction

*Конструктор из схемы TL.*

> Indicates we [reacted to a story »](https://core.telegram.org/api/stories#reactions).

## Определение TL

```
updateSentStoryReaction#7d627683 peer:Peer story_id:int reaction:Reaction = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The peer that sent the story |
| story_id | [int](/type/int/) | ID of the story we reacted to |
| reaction | [Reaction](/type/Reaction/) | The reaction that was sent |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.
