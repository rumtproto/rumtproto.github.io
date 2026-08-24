---
title: "channels.editLocation"
original: "https://core.telegram.org/method/channels.editLocation"
section: ref
kind: method
description: "Изменить местоположение геогруппы; подробнее о геогруппах см. здесь »."
layout: layout.njk
---

# channels.editLocation

Изменить местоположение геогруппы; подробнее о геогруппах см. [здесь »](/api/nearby/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.editLocation#58e63f6d channel:InputChannel geo_point:InputGeoPoint address:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/channel">Геогруппа</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Новая геопозиция</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Строка адреса</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>400</td><td>MEGAGROUP_GEO_REQUIRED</td><td>Этот метод можно вызывать только для геогруппы.</td></tr><tr><td>400</td><td>MEGAGROUP_REQUIRED</td><td>Этот метод можно использовать только в супергруппе.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Пользователи и чаты поблизости](/api/nearby/)

Как работать с возможностями на основе геолокации, такими как геочаты и поиск пользователей поблизости.
