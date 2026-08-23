---
title: "EncryptedFile (тип)"
original: "https://core.telegram.org/type/EncryptedFile"
section: ref
kind: type
layout: layout.njk
---

# EncryptedFile

*Тип из схемы TL.*

> Seta an encrypted file.

## Определение TL

```
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;

---functions---

messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [encryptedFileEmpty](/constructor/encryptedFileEmpty/) | Empty constructor, non-existing file. |
| [encryptedFile](/constructor/encryptedFile/) | Encrypted file. |

## Методы

| Method | Описание |
|---|---|
| [messages.uploadEncryptedFile](/method/messages.uploadEncryptedFile/) | Upload encrypted file and associate it to a secret chat (without actually sending it to the chat). |
