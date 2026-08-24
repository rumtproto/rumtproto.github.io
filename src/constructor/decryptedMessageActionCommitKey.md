---
title: "decryptedMessageActionCommitKey"
original: "https://core.telegram.org/constructor/decryptedMessageActionCommitKey"
section: ref
kind: constructor
description: "Зафиксировать новый ключ, см. процесс смены ключей"
layout: layout.njk
---

# decryptedMessageActionCommitKey

Зафиксировать новый ключ, см. [процесс смены ключей](/api/end-to-end/pfs/)

```
===20===
decryptedMessageActionCommitKey#ec2e0b9b exchange_id:long key_fingerprint:long = DecryptedMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>exchange_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обмена, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Отпечаток ключа, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr></tbody></table>

### Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Связанные страницы

#### [Perfect Forward Secrecy](/api/end-to-end/pfs/)

Perfect Forward Secrecy в секретных чатах.
