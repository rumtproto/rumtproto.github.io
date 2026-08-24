---
title: "photos.Photo"
original: "https://core.telegram.org/type/photos.Photo"
section: ref
kind: type
description: "Фотография со вспомогательными данными."
layout: layout.njk
---

# photos.Photo

Фотография со вспомогательными данными.

```
photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;

---functions---

photos.updateProfilePhoto#9e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;
photos.uploadProfilePhoto#388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;
photos.uploadContactProfilePhoto#e14c4a71 flags:# suggest:flags.3?true save:flags.4?true user_id:InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.5?VideoSize = photos.Photo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/photos.photo">photos.photo</a></td><td>Фотография со вспомогательными данными.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/photos.updateProfilePhoto">photos.updateProfilePhoto</a></td><td>Устанавливает ранее загруженную фотографию в качестве фотографии профиля.</td></tr><tr><td><a href="/method/photos.uploadProfilePhoto">photos.uploadProfilePhoto</a></td><td>Обновляет фотографию профиля текущего пользователя.<br><br>Флаги <code>file</code>, <code>video</code> и <code>video_emoji_markup</code> взаимоисключающие.</td></tr><tr><td><a href="/method/photos.uploadContactProfilePhoto">photos.uploadContactProfilePhoto</a></td><td>Загрузить собственную фотографию профиля для контакта или предложить контакту новую фотографию профиля.<br><br>Флаги <code>file</code>, <code>video</code> и <code>video_emoji_markup</code> взаимоисключающие.</td></tr></tbody></table>
