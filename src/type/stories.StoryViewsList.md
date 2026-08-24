---
title: "stories.StoryViewsList"
original: "https://core.telegram.org/type/stories.StoryViewsList"
section: ref
kind: type
description: "Счётчики реакций и просмотров истории"
layout: layout.njk
---

# stories.StoryViewsList

Счётчики реакций и просмотров [истории](/api/stories/)

```
stories.storyViewsList#59d78fc5 flags:# count:int views_count:int forwards_count:int reactions_count:int views:Vector<StoryView> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryViewsList;

---functions---

stories.getStoryViewsList#7ed23c57 flags:# just_contacts:flags.0?true reactions_first:flags.2?true forwards_first:flags.3?true peer:InputPeer q:flags.1?string id:int offset:string limit:int = stories.StoryViewsList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyViewsList">stories.storyViewsList</a></td><td>Счётчики реакций и просмотров <a href="/api/stories">истории</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoryViewsList">stories.getStoryViewsList</a></td><td>Получить список пользователей, просмотревших конкретную <a href="/api/stories">опубликованную нами историю</a></td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
