---
title: "updateDeleteMessages"
original: "https://core.telegram.org/constructor/updateDeleteMessages"
section: ref
kind: constructor
description: "Сообщения были удалены."
layout: layout.njk
---

# updateDeleteMessages

Сообщения были удалены.

```
updateDeleteMessages#a20db0e5 messages:Vector<int> pts:int pts_count:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Список идентификаторов удалённых сообщений</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Новое качество действий в ящике сообщений</td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сгенерированных <a href="/api/updates">событий</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
