---
title: "encryptedChatWaiting"
original: "https://core.telegram.org/constructor/encryptedChatWaiting"
section: ref
kind: constructor
description: "Чат ожидает подтверждения от второго участника."
layout: layout.njk
---

# encryptedChatWaiting

Чат ожидает подтверждения от второго участника.

```
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор чата</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Контрольная сумма, зависящая от идентификатора пользователя</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания чата</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор создателя чата</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор второго участника чата</td></tr></tbody></table>

### Тип

[EncryptedChat](/type/EncryptedChat/)
