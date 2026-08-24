---
title: "stories.getPeerMaxIDs"
original: "https://core.telegram.org/method/stories.getPeerMaxIDs"
section: ref
kind: method
description: "Получить компактные сводки активных историй » для набора пиров."
layout: layout.njk
---

# stories.getPeerMaxIDs

Получить компактные [сводки активных историй »](/api/stories/#recent-story-summaries) для набора пиров.

```
---functions---
stories.getPeerMaxIDs#78499170 id:Vector<InputPeer> = Vector<RecentStory>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Пиры, чьи <a href="/api/stories#recent-story-summaries">сводки активных историй »</a> следует получить.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[RecentStory](/type/RecentStory/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
