---
title: "photoCachedSize"
original: "https://core.telegram.org/constructor/photoCachedSize"
section: ref
kind: constructor
description: "Описание изображения и его содержимого."
layout: layout.njk
---

# photoCachedSize

Описание изображения и его содержимого.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===23===
photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize;
```

#### Схема API

```
photoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/files#photosizetype-values">Значение PhotoSize.type »</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина изображения</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота изображения</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Двоичные данные, содержимое файла</td></tr></tbody></table>

### Тип

[PhotoSize](/type/PhotoSize/)

### Значения Photosize.type

См. [значения PhotoSize.type »](https://core.telegram.org/api/files#photosizetype-values).

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
