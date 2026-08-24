---
title: "messages.deletePhoneCallHistory"
original: "https://core.telegram.org/method/messages.deletePhoneCallHistory"
section: ref
kind: method
description: "Удалить всю историю звонков."
layout: layout.njk
---

# messages.deletePhoneCallHistory

Удалить всю историю звонков.

```
messages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;
---functions---
messages.deletePhoneCallHistory#f9cbe409 flags:# revoke:flags.0?true = messages.AffectedFoundMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Удалять ли историю звонков также и у участников</td></tr></tbody></table>

### Результат

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

### Этот метод доступен только пользователям
