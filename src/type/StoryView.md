---
title: "StoryView"
original: "https://core.telegram.org/type/StoryView"
section: ref
kind: type
description: "Сведения о датах просмотра и реакциях для истории"
layout: layout.njk
---

# StoryView

Сведения о датах просмотра и реакциях для [истории](/api/stories/)

```
storyView#b0bdeac5 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true user_id:long date:int reaction:flags.2?Reaction = StoryView;
storyViewPublicForward#9083670b flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true message:Message = StoryView;
storyViewPublicRepost#bd74cf49 flags:# blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:Peer story:StoryItem = StoryView;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/storyView">storyView</a></td><td>Сведения о датах просмотров и реакциях для <a href="/api/stories">истории</a></td></tr><tr><td><a href="/constructor/storyViewPublicForward">storyViewPublicForward</a></td><td>Определённый пир переслал историю в виде сообщения в публичный чат или канал.</td></tr><tr><td><a href="/constructor/storyViewPublicRepost">storyViewPublicRepost</a></td><td>Определённый пир сделал репост истории.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
