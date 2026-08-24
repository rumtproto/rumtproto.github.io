---
title: "PublicForward"
original: "https://core.telegram.org/type/PublicForward"
section: ref
kind: type
description: "Содержит информацию о пересылках истории в виде сообщения в публичные чаты и о репостах публичными каналами."
layout: layout.njk
---

# PublicForward

Содержит информацию о пересылках [истории](/api/stories/) в виде сообщения в публичные чаты и о репостах публичными каналами.

```
publicForwardMessage#1f2bf4a message:Message = PublicForward;
publicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/publicForwardMessage">publicForwardMessage</a></td><td>Содержит информацию о пересылке <a href="/api/stories">истории</a> в виде сообщения.</td></tr><tr><td><a href="/constructor/publicForwardStory">publicForwardStory</a></td><td>Содержит информацию о пересылке <a href="/api/stories">истории</a> в виде репоста публичным каналом.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
