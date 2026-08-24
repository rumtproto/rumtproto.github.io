---
title: "decryptedMessageActionRequestKey"
original: "https://core.telegram.org/constructor/decryptedMessageActionRequestKey"
section: ref
kind: constructor
description: "Запросить смену ключей, см. процесс смены ключей"
layout: layout.njk
---

# decryptedMessageActionRequestKey

Запросить смену ключей, см. [процесс смены ключей](/api/end-to-end/pfs/)

```
===20===
decryptedMessageActionRequestKey#f3c9611b exchange_id:long g_a:bytes = DecryptedMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>exchange_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обмена</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>g_a, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr></tbody></table>

### Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Связанные страницы

#### [Perfect Forward Secrecy](/api/end-to-end/pfs/)

Perfect Forward Secrecy в секретных чатах.
