---
title: "photo"
original: "https://core.telegram.org/constructor/photo"
section: ref
kind: constructor
description: "Фотография"
layout: layout.njk
---

# photo

Фотография

```
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Прикреплены ли к фотографии стикеры-маски</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:file_reference] <a href="/api/file-references">ссылка на файл</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата загрузки</td></tr><tr><td><strong>sizes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PhotoSize">PhotoSize</a>&gt;</td><td>Доступные для скачивания размеры</td></tr><tr><td><strong>video_sizes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/VideoSize">VideoSize</a>&gt;</td><td><a href="/api/files#animated-profile-pictures">Для анимированных профилей</a> — видео в формате MPEG4</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор DC, который следует использовать для скачивания</td></tr></tbody></table>

### Тип

[Photo](/type/Photo/)

### Связанные страницы

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
