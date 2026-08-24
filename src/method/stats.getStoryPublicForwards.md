---
title: "stats.getStoryPublicForwards"
original: "https://core.telegram.org/method/stats.getStoryPublicForwards"
section: ref
kind: method
description: "Получить пересылки истории в виде сообщения в публичные чаты и репосты публичными каналами."
layout: layout.njk
---

# stats.getStoryPublicForwards

Получить пересылки [истории](/api/stories/) в виде сообщения в публичные чаты и репосты публичными каналами.

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;
---functions---
stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором изначально была опубликована история</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/api/stories">истории</a></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для постраничной выборки, из <a href="/constructor/stats.publicForwards">stats.PublicForwards</a>.<code>next_offset</code>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[stats.PublicForwards](/type/stats.PublicForwards/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [stats.publicForwards](/constructor/stats.publicForwards/)

Содержит информацию о пересылках [истории](/api/stories/) в виде сообщения в публичные чаты и о репостах публичными каналами.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
