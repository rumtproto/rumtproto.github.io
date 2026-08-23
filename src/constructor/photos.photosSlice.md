---
title: "photos.photosSlice (конструктор)"
original: "https://core.telegram.org/constructor/photos.photosSlice"
section: ref
kind: constructor
layout: layout.njk
---

# photos.photosSlice

*Конструктор из схемы TL.*

> Incomplete list of photos with auxiliary data.

## Определение TL

```
photos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of photos |
| photos | [Vector](https://core.telegram.org/type/Vector%20t)<[Photo](/type/Photo/)> | List of photos |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of mentioned users |

## Тип

[photos.Photos](/type/photos.Photos/)
