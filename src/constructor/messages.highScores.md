---
title: "messages.highScores (конструктор)"
original: "https://core.telegram.org/constructor/messages.highScores"
section: ref
kind: constructor
layout: layout.njk
---

# messages.highScores

*Конструктор из схемы TL.*

> Highscores in a game

## Определение TL

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| scores | [Vector](https://core.telegram.org/type/Vector%20t)<[HighScore](/type/HighScore/)> | Highscores |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users, associated to the highscores |

## Тип

[messages.HighScores](/type/messages.HighScores/)
