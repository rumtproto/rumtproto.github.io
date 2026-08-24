---
title: "account.updateStatus"
original: "https://core.telegram.org/method/account.updateStatus"
section: ref
kind: method
description: "Обновляет статус присутствия пользователя в сети."
layout: layout.njk
---

# account.updateStatus

Обновляет статус присутствия пользователя в сети.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateStatus#6628562c offline:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offline</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Если передано <a href="/constructor/boolTrue">(boolTrue)</a>, статус пользователя изменится на <a href="/constructor/userStatusOffline">(userStatusOffline)</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [boolTrue](/constructor/boolTrue/)

Конструктор можно трактовать как **логическое** значение `true`.

#### [userStatusOffline](/constructor/userStatusOffline/)

Статус пользователя «не в сети».
