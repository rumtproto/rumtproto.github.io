---
title: "stories.togglePinned"
original: "https://core.telegram.org/method/stories.togglePinned"
section: ref
kind: method
description: "Закрепить или открепить одну или несколько историй"
layout: layout.njk
---

# stories.togglePinned

Закрепить или открепить одну или несколько историй

```
---functions---
stories.togglePinned#9a75a1ef peer:InputPeer id:Vector<int> pinned:Bool = Vector<int>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором следует закрепить или открепить истории</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Идентификаторы историй, которые нужно закрепить или открепить</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Закрепить или открепить истории</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
