---
title: "help.getAppUpdate"
original: "https://core.telegram.org/method/help.getAppUpdate"
section: ref
kind: method
description: "Возвращает информацию о доступности обновления для текущего приложения."
layout: layout.njk
---

# help.getAppUpdate

Возвращает информацию о доступности обновления для текущего приложения.

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;
---functions---
help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>source</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Источник</td></tr></tbody></table>

### Результат

[help.AppUpdate](/type/help.AppUpdate/)

### Этот метод доступен только пользователям
