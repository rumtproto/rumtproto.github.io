---
title: "stories.incrementStoryViews"
original: "https://core.telegram.org/method/stories.incrementStoryViews"
section: ref
kind: method
description: "Увеличить счётчик просмотров одной или нескольких историй."
layout: layout.njk
---

# stories.incrementStoryViews

Увеличить счётчик просмотров одной или нескольких историй.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stories.incrementStoryViews#b2028afb peer:InputPeer id:Vector<int> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором были опубликованы истории.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы историй (не более 200 за раз).</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORY_ID_EMPTY</td><td>Вы не указали ни одного идентификатора истории.</td></tr></tbody></table>
