---
title: "inputGameID (конструктор)"
original: "https://core.telegram.org/constructor/inputGameID"
section: ref
kind: constructor
layout: layout.njk
---

# inputGameID

*Конструктор из схемы TL.*

> Indicates an already sent game

## Определение TL

```
inputGameID#32c3e77 id:long access_hash:long = InputGame;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | game ID from [Game](/type/Game/) constructor |
| access_hash | [long](/type/long/) | access hash from [Game](/type/Game/) constructor |

## Тип

[InputGame](/type/InputGame/)

## Related pages

#### [Game](/type/Game/)

Indicates an already sent game
