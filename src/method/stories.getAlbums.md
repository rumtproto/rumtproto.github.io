---
title: "stories.getAlbums"
original: "https://core.telegram.org/method/stories.getAlbums"
section: ref
kind: method
description: "Получить альбомы историй, созданные пиром."
layout: layout.njk
---

# stories.getAlbums

Получить [альбомы историй](/api/stories/#story-albums), созданные пиром.

```
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;
---functions---
stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <code>hash</code> из ранее возвращённого <a href="/constructor/stories.albums">stories.albums</a>, чтобы не возвращать результаты, если они не изменились.</td></tr></tbody></table>

### Результат

[stories.Albums](/type/stories.Albums/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [stories.albums](/constructor/stories.albums/)

[Альбомы историй »](/api/stories/#story-albums).

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
