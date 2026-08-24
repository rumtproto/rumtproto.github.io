---
title: "stories.StoryReactionsList"
original: "https://core.telegram.org/type/stories.StoryReactionsList"
section: ref
kind: type
description: "Список пиров, отреагировавших на конкретную историю"
layout: layout.njk
---

# stories.StoryReactionsList

Список пиров, отреагировавших на конкретную [историю](/api/stories/)

```
stories.storyReactionsList#aa5f789c flags:# count:int reactions:Vector<StoryReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = stories.StoryReactionsList;

---functions---

stories.getStoryReactionsList#b9b2881f flags:# forwards_first:flags.2?true peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = stories.StoryReactionsList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.storyReactionsList">stories.storyReactionsList</a></td><td>Список пиров, отреагировавших на конкретную <a href="/api/stories">историю</a> или иначе взаимодействовавших с ней</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getStoryReactionsList">stories.getStoryReactionsList</a></td><td>Получить список <a href="/api/reactions">реакций</a> и взаимодействий с <a href="/api/stories">историей</a>, опубликованной в канале, вместе с отправителем каждой реакции.<br><br>Доступно только администраторам канала.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
