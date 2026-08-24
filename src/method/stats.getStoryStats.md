---
title: "stats.getStoryStats"
original: "https://core.telegram.org/method/stats.getStoryStats"
section: ref
kind: method
description: "Получить статистику по определённой истории."
layout: layout.njk
---

# stats.getStoryStats

Получить [статистику](/api/stats/) по определённой [истории](/api/stories/).

```
stats.storyStats#50cd067c views_graph:StatsGraph reactions_by_emotion_graph:StatsGraph = stats.StoryStats;
---functions---
stats.getStoryStats#374fef40 flags:# dark:flags.0?true peer:InputPeer id:int = stats.StoryStats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Использовать ли тёмную тему для цветов графика</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, опубликовавший историю</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории</td></tr></tbody></table>

### Результат

[stats.StoryStats](/type/stats.StoryStats/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORIES_NEVER_CREATED</td><td>Этот пир ни разу не публиковал историй.</td></tr></tbody></table>

### Связанные страницы

#### [Статистика каналов](/api/stats/)

Telegram предоставляет подробную статистику для каналов и супергрупп.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
