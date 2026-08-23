---
title: "messages.getInlineGameHighScores (метод)"
original: "https://core.telegram.org/method/messages.getInlineGameHighScores"
section: ref
kind: method
layout: layout.njk
---

# messages.getInlineGameHighScores

*Метод из схемы TL.*

> Get highscores of a game sent using an inline bot

## Определение TL

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;
---functions---
messages.getInlineGameHighScores#f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputBotInlineMessageID](/type/InputBotInlineMessageID/) | ID of inline message |
| user_id | [InputUser](/type/InputUser/) | Get high scores of a certain user |

## Результат

[messages.HighScores](/type/messages.HighScores/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
