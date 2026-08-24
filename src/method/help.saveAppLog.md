---
title: "help.saveAppLog"
original: "https://core.telegram.org/method/help.saveAppLog"
section: ref
kind: method
description: "Сохраняет журналы работы приложения на сервере."
layout: layout.njk
---

# help.saveAppLog

Сохраняет журналы работы приложения на сервере.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.saveAppLog#6f02f748 events:Vector<InputAppEvent> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>events</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputAppEvent">InputAppEvent</a>&gt;</td><td>Список входных событий</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)
