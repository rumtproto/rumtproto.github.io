---
title: "messages.uploadEncryptedFile"
original: "https://core.telegram.org/method/messages.uploadEncryptedFile"
section: ref
kind: method
description: "Загрузить зашифрованный файл и связать его с секретным чатом (без отправки в сам чат)."
layout: layout.njk
---

# messages.uploadEncryptedFile

Загрузить зашифрованный файл и связать его с секретным чатом (без отправки в сам чат).

```
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;
---functions---
messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Секретный чат, с которым нужно связать файл</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedFile">InputEncryptedFile</a></td><td>Файл</td></tr></tbody></table>

### Результат

[EncryptedFile](/type/EncryptedFile/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr></tbody></table>
