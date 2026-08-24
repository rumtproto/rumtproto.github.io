---
title: "InputWebFileLocation"
original: "https://core.telegram.org/type/InputWebFileLocation"
section: ref
kind: type
description: "Расположение удалённого файла"
layout: layout.njk
---

# InputWebFileLocation

Расположение удалённого файла

```
inputWebFileLocation#c239d686 url:string access_hash:long = InputWebFileLocation;
inputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;
inputWebFileAudioAlbumThumbLocation#f46fe924 flags:# small:flags.2?true document:flags.0?InputDocument title:flags.1?string performer:flags.1?string = InputWebFileLocation;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputWebFileLocation">inputWebFileLocation</a></td><td>Расположение удалённого файла HTTP(s)</td></tr><tr><td><a href="/constructor/inputWebFileGeoPointLocation">inputWebFileGeoPointLocation</a></td><td>Используется для скачивания сгенерированного сервером изображения с предпросмотром карты по <a href="/constructor/geoPoint">geoPoint</a>; подробнее см. <a href="/api/files#downloading-webfiles">документацию по веб-файлам »</a>.</td></tr><tr><td><a href="/constructor/inputWebFileAudioAlbumThumbLocation">inputWebFileAudioAlbumThumbLocation</a></td><td>Используется для загрузки обложки альбома для любого музыкального файла с помощью <a href="/method/upload.getWebFile">upload.getWebFile</a>; подробнее см. <a href="/api/files#downloading-webfiles">документацию по webfile »</a>.</td></tr></tbody></table>
