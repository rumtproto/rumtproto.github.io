---
title: "stories.readStories (метод)"
original: "https://core.telegram.org/method/stories.readStories"
section: ref
kind: method
layout: layout.njk
---

# stories.readStories

*Метод из схемы TL.*

> Mark all stories up to a certain ID as read, for a given peer; will emit an [updateReadStories](/constructor/updateReadStories/) update to all logged-in sessions.

## Определение TL

```
---functions---
stories.readStories#a556dac8 peer:InputPeer max_id:int = Vector<int>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer whose stories should be marked as read. |
| max_id | [int](/type/int/) | Mark all stories up to and including this ID as read |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MAX_ID_INVALID | The provided max ID is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORIES_NEVER_CREATED | This peer hasn't ever posted any stories. |

## Related pages

#### [updateReadStories](/constructor/updateReadStories/)

Stories of a specific peer were marked as read.
