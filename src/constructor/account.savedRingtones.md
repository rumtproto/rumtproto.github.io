---
title: "account.savedRingtones"
original: "https://core.telegram.org/constructor/account.savedRingtones"
section: ref
kind: constructor
description: "Список сохранённых звуков уведомлений"
layout: layout.njk
---

# account.savedRingtones

Список сохранённых звуков уведомлений

```
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>ringtones</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Сохранённые звуки уведомлений</td></tr></tbody></table>

### Тип

[account.SavedRingtones](/type/account.SavedRingtones/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
