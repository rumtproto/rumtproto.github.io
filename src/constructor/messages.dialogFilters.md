---
title: "messages.dialogFilters"
original: "https://core.telegram.org/constructor/messages.dialogFilters"
section: ref
kind: constructor
description: "Сведения о папке и тегах папок"
layout: layout.njk
---

# messages.dialogFilters

Сведения о [папке и тегах папок](/api/folders/)

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>tags_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Включены ли <a href="/api/folders#folder-tags">теги папок</a>.</td></tr><tr><td><strong>filters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DialogFilter">DialogFilter</a>&gt;</td><td>Папки.</td></tr></tbody></table>

### Тип

[messages.DialogFilters](/type/messages.DialogFilters/)

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
