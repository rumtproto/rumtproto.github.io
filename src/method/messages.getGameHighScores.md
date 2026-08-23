---
title: "messages.getGameHighScores (метод)"
original: "https://core.telegram.org/method/messages.getGameHighScores"
section: ref
kind: method
layout: layout.njk
---

# messages.getGameHighScores

*Метод из схемы TL.*

> Get highscores of a game

## Определение TL

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
---functions---
messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Where was the game sent |
| id | [int](/type/int/) | ID of message with game media attachment |
| user_id | [InputUser](/type/InputUser/) | Get high scores made by a certain user |

## Результат

[messages.HighScores](/type/messages.HighScores/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
