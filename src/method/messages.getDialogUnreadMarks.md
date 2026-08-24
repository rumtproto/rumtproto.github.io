---
title: "messages.getDialogUnreadMarks"
original: "https://core.telegram.org/method/messages.getDialogUnreadMarks"
section: ref
kind: method
description: "Получить диалоги, вручную отмеченные как непрочитанные"
layout: layout.njk
---

# messages.getDialogUnreadMarks

Получить диалоги, вручную отмеченные как непрочитанные

```
---functions---
messages.getDialogUnreadMarks#21202222 flags:# parent_peer:flags.0?InputPeer = Vector<DialogPeer>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Может быть равно идентификатору монофорума, чтобы получить темы монофорума, вручную отмеченные как непрочитанные.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[DialogPeer](/type/DialogPeer/)\>

### Этот метод доступен только пользователям
