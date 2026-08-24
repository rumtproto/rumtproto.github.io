---
title: "messageActionSuggestProfilePhoto"
original: "https://core.telegram.org/constructor/messageActionSuggestProfilePhoto"
section: ref
kind: constructor
description: "Новая фотография профиля предложена с помощью photos.uploadContactProfilePhoto."
layout: layout.njk
---

# messageActionSuggestProfilePhoto

Новая фотография профиля предложена с помощью [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/).

```
messageActionSuggestProfilePhoto#57de635e photo:Photo = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo">Photo</a></td><td>Фотография, которую пользователь предложил установить как фотографию профиля.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)

Загрузить собственную фотографию профиля для контакта или предложить контакту новую фотографию профиля.

Флаги `file`, `video` и `video_emoji_markup` взаимоисключающие.
