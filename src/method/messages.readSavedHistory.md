---
title: "messages.readSavedHistory"
original: "https://core.telegram.org/method/messages.readSavedHistory"
section: ref
kind: method
description: "Отметить сообщения в теме монофорума » как прочитанные."
layout: layout.njk
---

# messages.readSavedHistory

Отметить сообщения в [теме монофорума »](/api/monoforum/) как прочитанные.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readSavedHistory#ba4a3b5b parent_peer:InputPeer peer:InputPeer max_id:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Идентификатор группы-монофорума.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Идентификатор темы.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Если передано положительное значение, прочитанными будут помечены только сообщения с идентификаторами меньше или равными указанному.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>Указанный <code>parent_peer</code> недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.
