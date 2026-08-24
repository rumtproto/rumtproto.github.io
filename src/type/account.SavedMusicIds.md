---
title: "account.SavedMusicIds"
original: "https://core.telegram.org/type/account.SavedMusicIds"
section: ref
kind: type
description: "Список идентификаторов композиций (полей id конструктора document), закреплённых сейчас в нашем профиле, подробнее см. здесь »."
layout: layout.njk
---

# account.SavedMusicIds

Список идентификаторов композиций (полей `id` конструктора [document](/constructor/document/)), закреплённых сейчас в нашем профиле, подробнее [см. здесь »](/api/profile/#music).

```
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;

---functions---

account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.savedMusicIdsNotModified">account.savedMusicIdsNotModified</a></td><td>Список идентификаторов композиций (значений <a href="/constructor/document">document</a>.<code>id</code>), закреплённых в нашем профиле, не изменился.</td></tr><tr><td><a href="/constructor/account.savedMusicIds">account.savedMusicIds</a></td><td>Список идентификаторов композиций (<a href="/constructor/document">document</a>.<code>id</code>), закреплённых сейчас в нашем профиле; подробнее см. <a href="/api/profile#music">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getSavedMusicIds">account.getSavedMusicIds</a></td><td>Получить полный список, содержащий только идентификаторы <a href="/api/profile#music">композиций, добавленных в профиль в данный момент; подробнее см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [document](/constructor/document/)

Документ

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
