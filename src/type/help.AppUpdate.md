---
title: "help.AppUpdate"
original: "https://core.telegram.org/type/help.AppUpdate"
section: ref
kind: type
description: "Содержит информацию о доступности обновления приложения."
layout: layout.njk
---

# help.AppUpdate

Содержит информацию о доступности обновления приложения.

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;

---functions---

help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.appUpdate">help.appUpdate</a></td><td>Доступно обновление приложения.</td></tr><tr><td><a href="/constructor/help.noAppUpdate">help.noAppUpdate</a></td><td>Обновлений для приложения нет.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getAppUpdate">help.getAppUpdate</a></td><td>Возвращает информацию о доступности обновления для текущего приложения.</td></tr></tbody></table>
