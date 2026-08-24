---
title: "updateDialogFilter"
original: "https://core.telegram.org/constructor/updateDialogFilter"
section: ref
kind: constructor
description: "Была добавлена новая папка"
layout: layout.njk
---

# updateDialogFilter

Была добавлена новая [папка](/api/folders/)

```
updateDialogFilter#26ffde7d flags:# id:int filter:flags.0?DialogFilter = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор <a href="/api/folders">папки</a></td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/DialogFilter">DialogFilter</a></td><td>Сведения о <a href="/api/folders">папке</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
