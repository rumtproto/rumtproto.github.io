---
title: "contacts.resetTopPeerRating"
original: "https://core.telegram.org/method/contacts.resetTopPeerRating"
section: ref
kind: method
description: "Сбросить рейтинг популярного пира"
layout: layout.njk
---

# contacts.resetTopPeerRating

Сбросить [рейтинг](/api/top-rating/) популярного пира

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.resetTopPeerRating#1ae373ac category:TopPeerCategory peer:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>category</strong></td><td style="text-align: center;"><a href="/type/TopPeerCategory">TopPeerCategory</a></td><td>Категория популярных пиров</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, рейтинг которого следует сбросить</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Рейтинг популярных пиров](/api/top-rating/)

Если включено, рейтинг наиболее используемых пиров отражает значимость часто используемого пира в определённой категории (пользователи, которым часто пишут, часто используемые боты, инлайн-боты, часто посещаемые каналы и так далее).
