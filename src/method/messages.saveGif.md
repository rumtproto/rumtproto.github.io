---
title: "messages.saveGif"
original: "https://core.telegram.org/method/messages.saveGif"
section: ref
kind: method
description: "Добавить GIF в список сохранённых GIF"
layout: layout.njk
---

# messages.saveGif

Добавить GIF в список сохранённых GIF

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>GIF, который нужно сохранить</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Удалять ли GIF из списка сохранённых GIF</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GIF_ID_INVALID</td><td>Указанный идентификатор GIF недействителен.</td></tr></tbody></table>
