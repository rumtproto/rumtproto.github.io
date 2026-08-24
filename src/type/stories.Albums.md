---
title: "stories.Albums"
original: "https://core.telegram.org/type/stories.Albums"
section: ref
kind: type
description: "Представляет список альбомов историй »."
layout: layout.njk
---

# Stories.Albums

Представляет список [альбомов историй »](/api/stories/#story-albums).

```
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;

---functions---

stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/stories.albumsNotModified">stories.albumsNotModified</a></td><td><a href="/api/stories#story-albums">Список альбомов историй »</a> не изменился.</td></tr><tr><td><a href="/constructor/stories.albums">stories.albums</a></td><td><a href="/api/stories#story-albums">Альбомы историй »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/stories.getAlbums">stories.getAlbums</a></td><td>Получить <a href="/api/stories#story-albums">альбомы историй</a>, созданные пиром.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
