---
title: "photos.Photos"
original: "https://core.telegram.org/type/photos.Photos"
section: ref
kind: type
description: "Объект содержит список фотографий со вспомогательными данными."
layout: layout.njk
---

# photos.Photos

Объект содержит список фотографий со вспомогательными данными.

```
photos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;
photos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;

---functions---

photos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/photos.photos">photos.photos</a></td><td>Полный список фотографий со вспомогательными данными.</td></tr><tr><td><a href="/constructor/photos.photosSlice">photos.photosSlice</a></td><td>Неполный список фотографий со вспомогательными данными.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/photos.getUserPhotos">photos.getUserPhotos</a></td><td>Возвращает список фотографий пользователя.</td></tr></tbody></table>
