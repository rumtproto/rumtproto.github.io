---
title: "users.savedMusic"
original: "https://core.telegram.org/constructor/users.savedMusic"
section: ref
kind: constructor
description: "Список композиций, закреплённых сейчас в профиле пользователя; подробнее см. здесь »."
layout: layout.njk
---

# users.savedMusic

Список композиций, закреплённых сейчас в профиле пользователя; подробнее см. [здесь »](/api/profile/#music).

```
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число композиций (может быть больше числа возвращённых <code>documents</code> в зависимости от переданного <code>limit</code> и максимального значения <code>limit</code> по умолчанию, в этом случае требуется постраничная выборка).</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Document">Document</a>&gt;</td><td>Композиции.</td></tr></tbody></table>

### Тип

[users.SavedMusic](/type/users.SavedMusic/)

### Связанные страницы

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
