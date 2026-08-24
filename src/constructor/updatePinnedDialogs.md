---
title: "updatePinnedDialogs"
original: "https://core.telegram.org/constructor/updatePinnedDialogs"
section: ref
kind: constructor
description: "Закреплённые диалоги были обновлены"
layout: layout.njk
---

# updatePinnedDialogs

Закреплённые диалоги были обновлены

```
updatePinnedDialogs#fa0f3ca2 flags:# folder_id:flags.1?int order:flags.0?Vector<DialogPeer> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Идентификатор папки пира, подробнее см. здесь</a></td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DialogPeer">DialogPeer</a>&gt;</td><td>Новый порядок закреплённых диалогов</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.
