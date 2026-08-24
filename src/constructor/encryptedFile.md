---
title: "encryptedFile"
original: "https://core.telegram.org/constructor/encryptedFile"
section: ref
kind: constructor
description: "Зашифрованный файл."
layout: layout.njk
---

# encryptedFile

Зашифрованный файл.

```
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор файла</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Контрольная сумма, зависящая от идентификатора пользователя</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Размер файла в байтах</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Номер дата-центра</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>32-битный отпечаток ключа, используемого для шифрования файла</td></tr></tbody></table>

### Тип

[EncryptedFile](/type/EncryptedFile/)
