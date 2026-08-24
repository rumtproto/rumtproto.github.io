---
title: "StoryViews"
original: "https://core.telegram.org/type/StoryViews"
section: ref
kind: type
description: "Сводные сведения о просмотрах и реакциях истории"
layout: layout.njk
---

# StoryViews

Сводные сведения о просмотрах и реакциях [истории](/api/stories/)

```
storyViews#8d595cd6 flags:# has_viewers:flags.1?true views_count:int forwards_count:flags.2?int reactions:flags.3?Vector<ReactionCount> reactions_count:flags.4?int recent_viewers:flags.0?Vector<long> = StoryViews;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/storyViews">storyViews</a></td><td>Сводные сведения о просмотрах и реакциях <a href="/api/stories">истории</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
