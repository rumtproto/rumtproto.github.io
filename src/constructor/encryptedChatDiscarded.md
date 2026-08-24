---
title: "encryptedChatDiscarded"
original: "https://core.telegram.org/constructor/encryptedChatDiscarded"
section: ref
kind: constructor
description: "Отменённый или удалённый чат."
layout: layout.njk
---

# encryptedChatDiscarded

Отменённый или удалённый чат.

```
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>history_deleted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Должны ли оба участника этого секретного чата также удалить все его сообщения</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор чата</td></tr></tbody></table>

### Тип

[EncryptedChat](/type/EncryptedChat/)
