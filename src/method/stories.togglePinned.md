---
title: "stories.togglePinned (метод)"
original: "https://core.telegram.org/method/stories.togglePinned"
section: ref
kind: method
layout: layout.njk
---

# stories.togglePinned

*Метод из схемы TL.*

> Pin or unpin one or more stories

## Определение TL

```
---functions---
stories.togglePinned#9a75a1ef peer:InputPeer id:Vector<int> pinned:Bool = Vector<int>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where to pin or unpin stories |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of stories to pin or unpin |
| pinned | [Bool](/type/Bool/) | Whether to pin or unpin the stories |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
