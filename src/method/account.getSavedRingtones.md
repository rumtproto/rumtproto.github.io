---
title: "account.getSavedRingtones"
original: "https://core.telegram.org/method/account.getSavedRingtones"
section: ref
kind: method
description: "Получить сохранённые звуки уведомлений"
layout: layout.njk
---

# account.getSavedRingtones

Получить сохранённые звуки уведомлений

```
account.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;
---functions---
account.getSavedRingtones#e1902288 hash:long = account.SavedRingtones;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[account.SavedRingtones](/type/account.SavedRingtones/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
