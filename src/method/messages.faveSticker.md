---
title: "messages.faveSticker"
original: "https://core.telegram.org/method/messages.faveSticker"
section: ref
kind: method
description: "Добавить стикер в избранное или удалить его оттуда"
layout: layout.njk
---

# messages.faveSticker

Добавить стикер в избранное или удалить его оттуда

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.faveSticker#b9ffc55b id:InputDocument unfave:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Рассматриваемый стикер</td></tr><tr><td><strong>unfave</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Добавить стикер в избранное или удалить его оттуда</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STICKER_ID_INVALID</td><td>Указанный идентификатор стикера недействителен.</td></tr></tbody></table>
