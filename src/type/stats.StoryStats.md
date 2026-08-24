---
title: "stats.StoryStats"
original: "https://core.telegram.org/type/stats.StoryStats"
section: ref
kind: type
description: "Содержит статистику по истории."
layout: layout.njk
---

# Stats.StoryStats

Содержит [статистику](/api/stats/) по [истории](/api/stories/).

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;

---functions---

stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stats.storyStats">stats.storyStats</a></td><td>Содержит <a href="/api/stats">статистику</a> по <a href="/api/stories">истории</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stats.getStoryStats">stats.getStoryStats</a></td><td>Получить <a href="/api/stats">статистику</a> по определённой <a href="/api/stories">истории</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
