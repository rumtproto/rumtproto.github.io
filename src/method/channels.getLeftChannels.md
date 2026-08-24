---
title: "channels.getLeftChannels"
original: "https://core.telegram.org/method/channels.getLeftChannels"
section: ref
kind: method
description: "Получить список каналов и супергрупп, которые мы покинули; требуется сессия выгрузки данных, подробнее см. здесь »."
layout: layout.njk
---

# channels.getLeftChannels

Получить список [каналов и супергрупп](/api/channel/), которые мы покинули; требуется [сессия выгрузки данных, подробнее см. здесь »](/api/takeout/).

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getLeftChannels#8341ecc0 offset:int = messages.Chats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение для <a href="/api/offsets">постраничной выборки</a></td></tr></tbody></table>

### Результат

[messages.Chats](/type/messages.Chats/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TAKEOUT_INVALID</td><td>Указанный идентификатор выгрузки данных недействителен.</td></tr><tr><td>403</td><td>TAKEOUT_REQUIRED</td><td>Сначала необходимо инициализировать сессию <a href="/api/takeout">выгрузки данных</a>, <a href="/api/takeout">подробнее см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Takeout API](/api/takeout/)

API Telegram позволяет пользователям экспортировать все свои данные через API выгрузки данных.
