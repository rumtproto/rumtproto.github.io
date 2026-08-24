---
title: "stories.albums"
original: "https://core.telegram.org/constructor/stories.albums"
section: ref
kind: constructor
description: "Альбомы историй »."
layout: layout.njk
---

# stories.albums

[Альбомы историй »](/api/stories/#story-albums).

```
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш, который нужно передать в <a href="/method/stories.getAlbums">stories.getAlbums</a>, чтобы не возвращать результаты, если они не изменились.</td></tr><tr><td><strong>albums</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StoryAlbum">StoryAlbum</a>&gt;</td><td>Альбомы.</td></tr></tbody></table>

### Тип

[stories.Albums](/type/stories.Albums/)

### Связанные страницы

#### [stories.getAlbums](/method/stories.getAlbums/)

Получить [альбомы историй](/api/stories/#story-albums), созданные пиром.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
