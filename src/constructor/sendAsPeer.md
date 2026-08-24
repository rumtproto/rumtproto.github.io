---
title: "sendAsPeer"
original: "https://core.telegram.org/constructor/sendAsPeer"
section: ref
kind: constructor
description: "Указывает пир, который может использоваться для отправки сообщений"
layout: layout.njk
---

# sendAsPeer

Указывает пир, который может использоваться для отправки сообщений

```
sendAsPeer#b81c7034 flags:# premium_required:flags.0?true peer:Peer = SendAsPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>premium_required</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Требуется ли аккаунт Telegram Premium для отправки сообщений от имени этого пира</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир</td></tr></tbody></table>

### Тип

[SendAsPeer](/type/SendAsPeer/)
