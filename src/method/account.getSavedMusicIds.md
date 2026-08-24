---
title: "account.getSavedMusicIds"
original: "https://core.telegram.org/method/account.getSavedMusicIds"
section: ref
kind: method
description: "Получить полный список, содержащий только идентификаторы композиций, добавленных в профиль в данный момент; подробнее см. здесь »."
layout: layout.njk
---

# account.getSavedMusicIds

Получить полный список, содержащий только идентификаторы [композиций, добавленных в профиль в данный момент; подробнее см. здесь »](/api/profile/#music).

```
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;
---functions---
account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш, <a href="/api/offsets#hash-generation">вычисленный »</a> по ранее возвращённому списку идентификаторов.</td></tr></tbody></table>

### Результат

[account.SavedMusicIds](/type/account.SavedMusicIds/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
