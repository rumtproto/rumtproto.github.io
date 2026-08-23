---
title: "inputWebFileGeoPointLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputWebFileGeoPointLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputWebFileGeoPointLocation

*Конструктор из схемы TL.*

> Used to download a server-generated image with the map preview from a [geoPoint](/constructor/geoPoint/), see the [webfile docs for more info »](https://core.telegram.org/api/files/#downloading-webfiles).

## Определение TL

```
inputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| geo_point | [InputGeoPoint](/type/InputGeoPoint/) | Generated from the lat, long and accuracy_radius parameters of the [geoPoint](/constructor/geoPoint/) |
| access_hash | [long](/type/long/) | Access hash of the [geoPoint](/constructor/geoPoint/) |
| w | [int](/type/int/) | Map width in pixels before applying scale; 16-1024 |
| h | [int](/type/int/) | Map height in pixels before applying scale; 16-1024 |
| zoom | [int](/type/int/) | Map zoom level; 13-20 |
| scale | [int](/type/int/) | Map scale; 1-3 |

## Тип

[InputWebFileLocation](/type/InputWebFileLocation/)

## Related pages

#### [geoPoint](/constructor/geoPoint/)

GeoPoint.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
