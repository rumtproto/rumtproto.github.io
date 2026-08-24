---
title: "users.getSavedMusicByID"
original: "https://core.telegram.org/method/users.getSavedMusicByID"
section: ref
kind: method
description: "Проверить, закреплены ли ещё указанные композиции в профиле пользователя, либо обновить ссылки на файлы композиций, закреплённых в профиле пользователя; подробнее см. здесь »."
layout: layout.njk
---

# users.getSavedMusicByID

Проверить, закреплены ли ещё указанные композиции в профиле пользователя, либо обновить ссылки на файлы композиций, закреплённых в профиле пользователя; подробнее [см. здесь »](/api/profile/#music).

```
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
---functions---
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя.</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDocument">InputDocument</a>&gt;</td><td>[@term:file_reference] Композиции (здесь <code>file_reference</code> может быть пустым для обновления ссылок на файлы).</td></tr></tbody></table>

### Результат

[users.SavedMusic](/type/users.SavedMusic/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
