---
title: "stories.incrementStoryViews (метод)"
original: "https://core.telegram.org/method/stories.incrementStoryViews"
section: ref
kind: method
layout: layout.njk
---

# stories.incrementStoryViews

*Метод из схемы TL.*

> Increment the view counter of one or more stories.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.incrementStoryViews#b2028afb peer:InputPeer id:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the stories were posted. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the stories (maximum 200 at a time). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORY_ID_EMPTY | You specified no story IDs. |
