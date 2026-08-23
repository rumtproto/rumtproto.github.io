---
title: "updateStory (конструктор)"
original: "https://core.telegram.org/constructor/updateStory"
section: ref
kind: constructor
layout: layout.njk
---

# updateStory

*Конструктор из схемы TL.*

> A new story was posted.

## Определение TL

```
updateStory#75b3b798 peer:Peer story:StoryItem = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | ID of the poster. |
| story | [StoryItem](/type/StoryItem/) | The story that was posted. |

## Тип

[Update](/type/Update/)
