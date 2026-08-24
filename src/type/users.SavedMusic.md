---
title: "users.SavedMusic"
original: "https://core.telegram.org/type/users.SavedMusic"
section: ref
kind: type
description: "Список композиций (document.id), закреплённых сейчас в профиле пользователя; подробнее см. здесь »."
layout: layout.njk
---

# users.SavedMusic

Список композиций ([document](/constructor/document/).`id`), закреплённых сейчас в профиле пользователя; подробнее см. [здесь »](/api/profile/#music).

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;

---functions---

users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/users.savedMusicNotModified">users.savedMusicNotModified</a></td><td>Это подмножество композиций, закреплённых в профиле пользователя, не изменилось; подробнее см. <a href="/api/profile#music">здесь »</a>.</td></tr><tr><td><a href="/constructor/users.savedMusic">users.savedMusic</a></td><td>Список композиций, закреплённых сейчас в профиле пользователя; подробнее см. <a href="/api/profile#music">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/users.getSavedMusic">users.getSavedMusic</a></td><td>Получить композиции, <a href="/api/profile#music">закреплённые в профиле пользователя; подробнее см. здесь »</a>.</td></tr><tr><td><a href="/method/users.getSavedMusicByID">users.getSavedMusicByID</a></td><td>Проверить, закреплены ли ещё указанные композиции в профиле пользователя, либо обновить ссылки на файлы композиций, закреплённых в профиле пользователя; подробнее <a href="/api/profile#music">см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [document](/constructor/document/)

Документ

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
