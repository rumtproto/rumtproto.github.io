---
title: "photos.deletePhotos"
original: "https://core.telegram.org/method/photos.deletePhotos"
section: ref
kind: method
description: "Удаляет фотографии профиля. Метод возвращает список идентификаторов успешно удалённых фотографий."
layout: layout.njk
---

# photos.deletePhotos

Удаляет фотографии профиля. Метод возвращает список идентификаторов успешно удалённых фотографий.

```
---functions---
photos.deletePhotos#87cf7f2f id:Vector<InputPhoto> = Vector<long>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPhoto">InputPhoto</a>&gt;</td><td>Входные фотографии для удаления</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)\>

### Этот метод доступен только пользователям
