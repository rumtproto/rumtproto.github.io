---
title: "Photo"
original: "https://core.telegram.org/type/Photo"
section: ref
kind: type
description: "Объект описывает фотографию."
layout: layout.njk
---

# Photo

Объект описывает фотографию.

```
photoEmpty#2331b22d id:long = Photo;
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/photoEmpty">photoEmpty</a></td><td>Пустой конструктор, несуществующая фотография</td></tr><tr><td><a href="/constructor/photo">photo</a></td><td>Фотография</td></tr></tbody></table>
