---
title: "stories.togglePinnedToTop"
original: "https://core.telegram.org/method/stories.togglePinnedToTop"
section: ref
kind: method
description: "Закрепить несколько историй вверху профиля, подробнее см. здесь »."
layout: layout.njk
---

# stories.togglePinnedToTop

Закрепить несколько историй вверху профиля, подробнее см. [здесь »](/api/stories/#pinned-or-archived-stories).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.togglePinnedToTop#b297e9b peer:InputPeer id:Vector<int> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором следует закрепить истории.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы историй, которые нужно закрепить (не более <a href="/api/config#stories-pinned-to-top-count-max">stories_pinned_to_top_count_max</a>).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORY_ID_INVALID</td><td>Указанный идентификатор истории недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
