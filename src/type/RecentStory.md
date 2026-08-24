---
title: "RecentStory"
original: "https://core.telegram.org/type/RecentStory"
section: ref
kind: type
description: "Сводка активных историй » пира."
layout: layout.njk
---

# RecentStory

Сводка [активных историй »](/api/stories/#recent-story-summaries) пира.

```
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/recentStory">recentStory</a></td><td>Сводка <a href="/api/stories#recent-story-summaries">активных историй »</a> пира, встроенная в <a href="/constructor/user">user</a>.<code>stories_max_id</code> и <a href="/constructor/channel">channel</a>.<code>stories_max_id</code> и возвращаемая методом <a href="/method/stories.getPeerMaxIDs">stories.getPeerMaxIDs</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
