---
title: "messages.HighScores"
original: "https://core.telegram.org/type/messages.HighScores"
section: ref
kind: type
description: "Рекорды (в играх)"
layout: layout.njk
---

# Messages.HighScores

Рекорды (в играх)

```
messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;

---functions---

messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
messages.getInlineGameHighScores#f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.highScores">messages.highScores</a></td><td>Рекорды в игре</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getGameHighScores">messages.getGameHighScores</a></td><td>Получить рекорды в игре</td></tr><tr><td><a href="/method/messages.getInlineGameHighScores">messages.getInlineGameHighScores</a></td><td>Получить рекорды в игре, отправленной через инлайн-бота</td></tr></tbody></table>
