---
title: "userProfilePhoto"
original: "https://core.telegram.org/constructor/userProfilePhoto"
section: ref
kind: constructor
description: "Фотография профиля пользователя."
layout: layout.njk
---

# userProfilePhoto

Фотография профиля пользователя.

```
userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Доступен ли для этого пользователя <a href="/api/files#animated-profile-pictures">анимированный аватар</a></td></tr><tr><td><strong>personal</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Видима ли эта фотография профиля только нам (то есть была ли она установлена методом <a href="/method/photos.uploadContactProfilePhoto">photos.uploadContactProfilePhoto</a>).</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор соответствующей фотографии</td></tr><tr><td><strong>stripped_thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/bytes">bytes</a></td><td><a href="/api/files#stripped-thumbnails">Урезанная миниатюра</a></td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор DC, где хранится фотография</td></tr></tbody></table>

### Тип

[UserProfilePhoto](/type/UserProfilePhoto/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)

Загрузить собственную фотографию профиля для контакта или предложить контакту новую фотографию профиля.

Флаги `file`, `video` и `video_emoji_markup` взаимоисключающие.
