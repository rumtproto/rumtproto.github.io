---
title: "messages.getDialogFilters"
original: "https://core.telegram.org/method/messages.getDialogFilters"
section: ref
kind: method
description: "Получить папки"
layout: layout.njk
---

# messages.getDialogFilters

Получить [папки](/api/folders/)

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;
---functions---
messages.getDialogFilters#efd48c89 = messages.DialogFilters;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[messages.DialogFilters](/type/messages.DialogFilters/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
