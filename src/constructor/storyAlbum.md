---
title: "storyAlbum"
original: "https://core.telegram.org/constructor/storyAlbum"
section: ref
kind: constructor
description: "Представляет альбом историй »."
layout: layout.njk
---

# storyAlbum

Представляет [альбом историй »](/api/stories/#story-albums).

```
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>album_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор альбома.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название альбома.</td></tr><tr><td><strong>icon_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Photo">Photo</a></td><td>Фотография из первой истории альбома, если это фотография.</td></tr><tr><td><strong>icon_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Document">Document</a></td><td>Видео из первой истории альбома, если это видео.</td></tr></tbody></table>

### Тип

[StoryAlbum](/type/StoryAlbum/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
