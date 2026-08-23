---
title: "stories.toggleAllStoriesHidden (метод)"
original: "https://core.telegram.org/method/stories.toggleAllStoriesHidden"
section: ref
kind: method
layout: layout.njk
---

# stories.toggleAllStoriesHidden

*Метод из схемы TL.*

> Hide the active stories of a specific peer, preventing them from being displayed on the action bar on the homescreen.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.toggleAllStoriesHidden#7c2557c4 hidden:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hidden | [Bool](/type/Bool/) | Whether to hide or unhide all active stories of the peer |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
