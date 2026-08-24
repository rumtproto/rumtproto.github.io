---
title: "account.saveTheme"
original: "https://core.telegram.org/method/account.saveTheme"
section: ref
kind: method
description: "Сохранить тему оформления"
layout: layout.njk
---

# account.saveTheme

Сохранить тему оформления

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.saveTheme#f257106c theme:InputTheme unsave:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/type/InputTheme">InputTheme</a></td><td>Тема оформления, которую нужно сохранить</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Удалить из сохранённых</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>THEME_INVALID</td><td>Указана недействительная тема оформления.</td></tr></tbody></table>
