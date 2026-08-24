---
title: "stats.storyStats"
original: "https://core.telegram.org/constructor/stats.storyStats"
section: ref
kind: constructor
description: "Содержит статистику по истории."
layout: layout.njk
---

# stats.storyStats

Содержит [статистику](/api/stats/) по [истории](/api/stories/).

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>views_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>График количества просмотров и репостов историй</td></tr><tr><td><strong>reactions_by_emotion_graph</strong></td><td style="text-align: center;"><a href="/type/StatsGraph">StatsGraph</a></td><td>Столбчатая диаграмма с числом реакций на истории по «эмоциям» (то есть положительные, отрицательные, прочие и т. д.)</td></tr></tbody></table>

### Тип

[stats.StoryStats](/type/stats.StoryStats/)

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
