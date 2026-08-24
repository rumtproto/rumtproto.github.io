---
title: "photos.getUserPhotos"
original: "https://core.telegram.org/method/photos.getUserPhotos"
section: ref
kind: method
description: "Возвращает список фотографий пользователя."
layout: layout.njk
---

# photos.getUserPhotos

Возвращает список фотографий пользователя.

```
photos.photos#8dca6aa5 photos:Vector<Photo> users:Vector<User> = photos.Photos;
photos.photosSlice#15051f54 count:int photos:Vector<Photo> users:Vector<User> = photos.Photos;
---functions---
photos.getUserPhotos#91cd32a8 user_id:InputUser offset:int max_id:long limit:int = photos.Photos;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пропускаемых элементов списка</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Если передано положительное значение, метод вернёт только фотографии с идентификаторами меньше указанного. Этот параметр часто полезен при <a href="/api/file-references">повторном получении ссылок на файлы »</a>: в сочетании с <code>limit=1</code> и <code>offset=-1</code> он позволяет получить объект <a href="/constructor/photo">photo</a> с идентификатором <code>id</code>, указанным в <code>max_id</code>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество возвращаемых элементов списка</td></tr></tbody></table>

### Результат

[photos.Photos](/type/photos.Photos/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MAX_ID_INVALID</td><td>Указанный максимальный идентификатор недействителен.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.

#### [photo](/constructor/photo/)

Фотография
