---
title: "decryptedMessageActionAcceptKey"
original: "https://core.telegram.org/constructor/decryptedMessageActionAcceptKey"
section: ref
kind: constructor
description: "Принять новый ключ"
layout: layout.njk
---

# decryptedMessageActionAcceptKey

Принять новый ключ

```
===20===
decryptedMessageActionAcceptKey#6fe1735b exchange_id:long g_b:bytes key_fingerprint:long = DecryptedMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>exchange_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обмена</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Параметр B, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Отпечаток ключа, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr></tbody></table>

### Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Связанные страницы

#### [Perfect Forward Secrecy](/api/end-to-end/pfs/)

Perfect Forward Secrecy в секретных чатах.
