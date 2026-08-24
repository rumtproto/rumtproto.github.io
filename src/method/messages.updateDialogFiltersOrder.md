---
title: "messages.updateDialogFiltersOrder"
original: "https://core.telegram.org/method/messages.updateDialogFiltersOrder"
section: ref
kind: method
description: "Изменить порядок папок"
layout: layout.njk
---

# messages.updateDialogFiltersOrder

Изменить порядок [папок](/api/folders/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateDialogFiltersOrder#c563c1e4 order:Vector<int> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Новый порядок <a href="/api/folders">папок</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
