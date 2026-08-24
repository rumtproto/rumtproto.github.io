---
title: "messages.reorderPinnedSavedDialogs"
original: "https://core.telegram.org/method/messages.reorderPinnedSavedDialogs"
section: ref
kind: method
description: "Изменить порядок закреплённых диалогов из сохранённых сообщений »."
layout: layout.njk
---

# messages.reorderPinnedSavedDialogs

Изменить порядок закреплённых [диалогов из сохранённых сообщений »](/api/saved-messages/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderPinnedSavedDialogs#8b716587 flags:# force:flags.0?true order:Vector<InputDialogPeer> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, диалоги, закреплённые на сервере, но отсутствующие в поле <code>order</code>, будут откреплены.</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputDialogPeer">InputDialogPeer</a>&gt;</td><td>Новый порядок диалогов</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
