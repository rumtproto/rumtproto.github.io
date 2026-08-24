---
title: "stories.togglePeerStoriesHidden"
original: "https://core.telegram.org/method/stories.togglePeerStoriesHidden"
section: ref
kind: method
description: "Скрыть активные истории пользователя, чтобы они не отображались на панели действий на главном экране; подробнее см. здесь »."
layout: layout.njk
---

# stories.togglePeerStoriesHidden

Скрыть активные истории пользователя, чтобы они не отображались на панели действий на главном экране; подробнее см. [здесь »](/api/stories/#hiding-stories-of-other-users).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.togglePeerStoriesHidden#bd0415c4 peer:InputPeer hidden:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, истории которого следует скрыть или показать.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Скрыть или показать истории.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
