---
title: "updatePeerHistoryTTL"
original: "https://core.telegram.org/constructor/updatePeerHistoryTTL"
section: ref
kind: constructor
description: "Время жизни сообщений, отправляемых текущим пользователем в определённом чате, было изменено"
layout: layout.njk
---

# updatePeerHistoryTTL

Время жизни сообщений, отправляемых текущим пользователем в определённом чате, было изменено

```
updatePeerHistoryTTL#bb9bb9a5 flags:# peer:Peer ttl_period:flags.0?int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Чат</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Новое время жизни (Time-To-Live)</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
