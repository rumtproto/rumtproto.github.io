---
title: "StoryAlbum"
original: "https://core.telegram.org/type/StoryAlbum"
section: ref
kind: type
description: "Представляет альбом историй »."
layout: layout.njk
---

# StoryAlbum

Представляет [альбом историй »](/api/stories/#story-albums).

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;

---functions---

stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/storyAlbum">storyAlbum</a></td><td>Представляет <a href="/api/stories#story-albums">альбом историй »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.createAlbum">stories.createAlbum</a></td><td>Создаёт <a href="/api/stories#story-albums">альбом историй</a>.</td></tr><tr><td><a href="/method/stories.updateAlbum">stories.updateAlbum</a></td><td>Переименовать <a href="/api/stories#story-albums">альбом историй »</a>, либо добавить, удалить или переупорядочить истории в нём.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
