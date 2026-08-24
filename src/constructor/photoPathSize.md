---
title: "photoPathSize"
original: "https://core.telegram.org/constructor/photoPathSize"
section: ref
kind: constructor
description: "Сообщения с анимированными стикерами могут содержать сжатый svg (< 300 байт), чтобы показать контур стикера до загрузки самой анимации lottie."
layout: layout.njk
---

# photoPathSize

Сообщения с анимированными стикерами могут содержать сжатый svg (< 300 байт), чтобы показать контур стикера до загрузки самой анимации lottie.

```
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Всегда <a href="/api/files#vector-thumbnails"><code>j</code> »</a></td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Сжатые данные SVG-контура, см. <a href="/api/files#vector-thumbnails">векторные миниатюры »</a></td></tr></tbody></table>

### Тип

[PhotoSize](/type/PhotoSize/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
