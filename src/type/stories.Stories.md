---
title: "stories.Stories"
original: "https://core.telegram.org/type/stories.Stories"
section: ref
kind: type
description: "Список историй"
layout: layout.njk
---

# stories.Stories

Список [историй](/api/stories/#pinned-or-archived-stories)

```
stories.stories#63c3dd0a flags:# count:int stories:Vector<StoryItem> pinned_to_top:flags.0?Vector<int> chats:Vector<Chat> users:Vector<User> = stories.Stories;

---functions---

stories.getPinnedStories#5821a5dc peer:InputPeer offset_id:int limit:int = stories.Stories;
stories.getStoriesArchive#b4352016 peer:InputPeer offset_id:int limit:int = stories.Stories;
stories.getStoriesByID#5774ca74 peer:InputPeer id:Vector<int> = stories.Stories;
stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.stories">stories.stories</a></td><td>Список <a href="/api/stories#pinned-or-archived-stories">историй</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getPinnedStories">stories.getPinnedStories</a></td><td>Получить <a href="/api/stories#pinned-or-archived-stories">истории</a>, закреплённые в профиле пира.</td></tr><tr><td><a href="/method/stories.getStoriesArchive">stories.getStoriesArchive</a></td><td>Получить <a href="/api/stories#pinned-or-archived-stories">архив историй »</a> подконтрольного нам пира.</td></tr><tr><td><a href="/method/stories.getStoriesByID">stories.getStoriesByID</a></td><td>Получить полные сведения о наборе <a href="/api/stories">историй</a> по их идентификаторам.</td></tr><tr><td><a href="/method/stories.getAlbumStories">stories.getAlbumStories</a></td><td>Получить истории из <a href="/api/stories#story-albums">альбома историй »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
