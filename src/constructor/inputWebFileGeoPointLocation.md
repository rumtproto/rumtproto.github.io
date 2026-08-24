---
title: "inputWebFileGeoPointLocation"
original: "https://core.telegram.org/constructor/inputWebFileGeoPointLocation"
section: ref
kind: constructor
description: "Используется для скачивания сгенерированного сервером изображения с предпросмотром карты по geoPoint; подробнее см. документацию по веб-файлам »."
layout: layout.njk
---

# inputWebFileGeoPointLocation

Используется для скачивания сгенерированного сервером изображения с предпросмотром карты по [geoPoint](/constructor/geoPoint/); подробнее см. [документацию по веб-файлам »](/api/files/#downloading-webfiles).

```
inputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Формируется из параметров <code>lat</code>, <code>long</code> и <code>accuracy_radius</code> конструктора <a href="/constructor/geoPoint">geoPoint</a></td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа <a href="/constructor/geoPoint">geoPoint</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина карты в пикселях до применения масштаба; 16-1024</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота карты в пикселях до применения масштаба; 16–1024</td></tr><tr><td><strong>zoom</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Уровень приближения карты; 13–20</td></tr><tr><td><strong>scale</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Масштаб карты; 1-3</td></tr></tbody></table>

### Тип

[InputWebFileLocation](/type/InputWebFileLocation/)

### Связанные страницы

#### [geoPoint](/constructor/geoPoint/)

Географическая точка.

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
