---
title: "stories.StoryViews"
original: "https://core.telegram.org/type/stories.StoryViews"
section: ref
kind: type
description: "Счётчики реакций и просмотров для списка историй"
layout: layout.njk
---

# stories.StoryViews

Счётчики реакций и просмотров для списка [историй](/api/stories/)

```
stories.storyViews#de9eed1d views:Vector<StoryViews> users:Vector<User> = stories.StoryViews;

---functions---

stories.getStoriesViews#28e16cc8 peer:InputPeer id:Vector<int> = stories.StoryViews;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyViews">stories.storyViews</a></td><td>Счётчики реакций и просмотров для списка <a href="/api/stories">историй</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoriesViews">stories.getStoriesViews</a></td><td>Получить информацию о количестве просмотров, количестве пересылок, реакциях и недавних зрителях одной или нескольких <a href="/api/stories">историй</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
