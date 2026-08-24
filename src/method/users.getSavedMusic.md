---
title: "users.getSavedMusic"
original: "https://core.telegram.org/method/users.getSavedMusic"
section: ref
kind: method
description: "Получить композиции, закреплённые в профиле пользователя; подробнее см. здесь »."
layout: layout.njk
---

# users.getSavedMusic

Получить композиции, [закреплённые в профиле пользователя; подробнее см. здесь »](/api/profile/#music).

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
---functions---
users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение для постраничной выборки.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш »</a> идентификаторов ранее добавленных композиций; позволяет не возвращать результат, если изменений не было.</td></tr></tbody></table>

### Результат

[users.SavedMusic](/type/users.SavedMusic/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
