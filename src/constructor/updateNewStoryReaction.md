---
title: "updateNewStoryReaction"
original: "https://core.telegram.org/constructor/updateNewStoryReaction"
section: ref
kind: constructor
description: "Представляет новую реакцию на историю."
layout: layout.njk
---

# updateNewStoryReaction

Представляет новую [реакцию на историю](/api/reactions/#notifications-about-reactions).

```
updateNewStoryReaction#1824e40b story_id:int peer:Peer reaction:Reaction = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>story_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/stories">Идентификатор истории</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, в котором была опубликована история.</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td><a href="/api/reactions">Реакция</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
