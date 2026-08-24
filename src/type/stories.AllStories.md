---
title: "stories.AllStories"
original: "https://core.telegram.org/type/stories.AllStories"
section: ref
kind: type
description: "Полный список активных (или активных и скрытых) историй."
layout: layout.njk
---

# stories.AllStories

Полный список активных (или активных и скрытых) [историй](/api/stories/#watching-stories).

```
stories.allStoriesNotModified#1158fe3e flags:# state:string stealth_mode:StoriesStealthMode = stories.AllStories;
stories.allStories#6efc5e81 flags:# has_more:flags.0?true count:int state:string peer_stories:Vector<PeerStories> chats:Vector<Chat> users:Vector<User> stealth_mode:StoriesStealthMode = stories.AllStories;

---functions---

stories.getAllStories#eeb0d625 flags:# next:flags.1?true hidden:flags.2?true state:flags.0?string = stories.AllStories;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.allStoriesNotModified">stories.allStoriesNotModified</a></td><td>Список активных (или активных и скрытых) <a href="/api/stories#watching-stories">историй</a> не изменился.</td></tr><tr><td><a href="/constructor/stories.allStories">stories.allStories</a></td><td>Полный список активных (либо активных и скрытых) <a href="/api/stories#watching-stories">историй</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getAllStories">stories.getAllStories</a></td><td>Получить список активных (или активных и скрытых) историй; подробнее о просмотре историй см. <a href="/api/stories#watching-stories">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
