---
title: "photos.Photos (тип)"
original: "https://core.telegram.org/type/photos.Photos"
section: ref
kind: type
layout: layout.njk
---

# photos.Photos

*Тип из схемы TL.*

> Object contains list of photos with auxiliary data.

## Определение TL

```
photos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;
photos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;

---functions---

photos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [photos.photos](/constructor/photos.photos/) | Full list of photos with auxiliary data. |
| [photos.photosSlice](/constructor/photos.photosSlice/) | Incomplete list of photos with auxiliary data. |

## Методы

| Method | Описание |
|---|---|
| [photos.getUserPhotos](/method/photos.getUserPhotos/) | Returns the list of user photos. |
