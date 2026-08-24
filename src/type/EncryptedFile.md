---
title: "EncryptedFile"
original: "https://core.telegram.org/type/EncryptedFile"
section: ref
kind: type
description: "Задаёт зашифрованный файл."
layout: layout.njk
---

# EncryptedFile

Задаёт зашифрованный файл.

```
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;

---functions---

messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedFileEmpty">encryptedFileEmpty</a></td><td>Пустой конструктор, несуществующий файл.</td></tr><tr><td><a href="/constructor/encryptedFile">encryptedFile</a></td><td>Зашифрованный файл.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.uploadEncryptedFile">messages.uploadEncryptedFile</a></td><td>Загрузить зашифрованный файл и связать его с секретным чатом (без отправки в сам чат).</td></tr></tbody></table>
