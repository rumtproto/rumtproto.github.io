---
title: "contacts.toggleTopPeers"
original: "https://core.telegram.org/method/contacts.toggleTopPeers"
section: ref
kind: method
description: "Включить или отключить наиболее используемые пиры"
layout: layout.njk
---

# contacts.toggleTopPeers

Включить или отключить [наиболее используемые пиры](/api/top-rating/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.toggleTopPeers#8514bdda enabled:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Включить или отключить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Рейтинг популярных пиров](/api/top-rating/)

Если включено, рейтинг наиболее используемых пиров отражает значимость часто используемого пира в определённой категории (пользователи, которым часто пишут, часто используемые боты, инлайн-боты, часто посещаемые каналы и так далее).
