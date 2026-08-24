---
title: "stories.FoundStories"
original: "https://core.telegram.org/type/stories.FoundStories"
section: ref
kind: type
description: "Истории, найденные с помощью глобального поиска историй »."
layout: layout.njk
---

# stories.FoundStories

Истории, найденные с помощью [глобального поиска историй »](/api/stories/#searching-stories).

```
stories.foundStories#e2de7737 flags:# count:int stories:Vector<FoundStory> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stories.FoundStories;

---functions---

stories.searchPosts#d1810907 flags:# hashtag:flags.0?string area:flags.1?MediaArea peer:flags.2?InputPeer offset:string limit:int = stories.FoundStories;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.foundStories">stories.foundStories</a></td><td>Истории, найденные через <a href="/api/stories#searching-stories">глобальный поиск историй »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.searchPosts">stories.searchPosts</a></td><td>Глобальный поиск <a href="/api/stories">историй</a> по хештегу или <a href="/api/stories#location-tags">медиазоне с местоположением</a>; подробнее о полном порядке действий см. <a href="/api/stories#searching-stories">здесь »</a>.<br><br>При вызове метода поле <code>hashtag</code> <strong>или</strong> <code>area</code> <strong>обязательно</strong> должно быть задано.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
