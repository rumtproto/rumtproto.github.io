---
title: "messageEmpty"
original: "https://core.telegram.org/constructor/messageEmpty"
section: ref
kind: constructor
description: "Пустой конструктор, несуществующее сообщение."
layout: layout.njk
---

# messageEmpty

Пустой конструктор, несуществующее сообщение.

```
messageEmpty#90a6ca84 flags:# id:int peer_id:flags.0?Peer = Message;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Идентификатор пира — чата, в который было отправлено это сообщение</td></tr></tbody></table>

### Тип

[Message](/type/Message/)
