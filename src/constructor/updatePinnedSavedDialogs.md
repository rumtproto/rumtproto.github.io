---
title: "updatePinnedSavedDialogs"
original: "https://core.telegram.org/constructor/updatePinnedSavedDialogs"
section: ref
kind: constructor
description: "Закреплённые сохранённые диалоги » были обновлены"
layout: layout.njk
---

# updatePinnedSavedDialogs

[Закреплённые сохранённые диалоги »](/api/saved-messages/) были обновлены

```
updatePinnedSavedDialogs#686c85a6 flags:# order:flags.0?Vector<DialogPeer> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DialogPeer">DialogPeer</a>&gt;</td><td>Новый порядок закреплённых сохранённых диалогов</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
