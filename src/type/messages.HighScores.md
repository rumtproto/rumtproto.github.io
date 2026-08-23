---
title: "Messages.HighScores (тип)"
original: "https://core.telegram.org/type/messages.HighScores"
section: ref
kind: type
layout: layout.njk
---

# Messages.HighScores

*Тип из схемы TL.*

> High scores (in games)

## Определение TL

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;

---functions---

messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
messages.getInlineGameHighScores#f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.highScores](/constructor/messages.highScores/) | Highscores in a game |

## Методы

| Method | Описание |
|---|---|
| [messages.getGameHighScores](/method/messages.getGameHighScores/) | Get highscores of a game |
| [messages.getInlineGameHighScores](/method/messages.getInlineGameHighScores/) | Get highscores of a game sent using an inline bot |
