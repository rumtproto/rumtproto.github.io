---
title: "chatPhoto"
original: "https://core.telegram.org/constructor/chatPhoto"
section: ref
kind: constructor
description: "Фотография профиля группы."
layout: layout.njk
---

# chatPhoto

Фотография профиля группы.

```
chatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Есть ли у пользователя анимированная фотография профиля</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор фотографии</td></tr><tr><td><strong>stripped_thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/bytes">bytes</a></td><td><a href="/api/files#stripped-thumbnails">Урезанная миниатюра</a></td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>DC, где хранится эта фотография</td></tr></tbody></table>

### Тип

[ChatPhoto](/type/ChatPhoto/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
