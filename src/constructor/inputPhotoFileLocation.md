---
title: "inputPhotoFileLocation"
original: "https://core.telegram.org/constructor/inputPhotoFileLocation"
section: ref
kind: constructor
description: "Этот объект используется для скачивания фотографии методом upload.getFile"
layout: layout.njk
---

# inputPhotoFileLocation

Этот объект используется для скачивания фотографии методом [upload.getFile](/method/upload.getFile/)

```
inputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор фотографии, полученный из объекта <a href="/constructor/photo">photo</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа фотографии, полученный из объекта <a href="/constructor/photo">photo</a></td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:file_reference] <a href="/api/file-references">Ссылка на файл</a></td></tr><tr><td><strong>thumb_size</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/type/PhotoSize">PhotoSize</a>, который нужно скачать: должно быть равно полю <code>type</code> нужного объекта PhotoSize из <a href="/constructor/photo">photo</a></td></tr></tbody></table>

### Тип

[InputFileLocation](/type/InputFileLocation/)

### Связанные страницы

#### [photo](/constructor/photo/)

Фотография

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.

#### [PhotoSize](/type/PhotoSize/)

Расположение изображения определённого размера

#### [upload.getFile](/method/upload.getFile/)

Возвращает содержимое файла целиком или его части.
