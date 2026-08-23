---
title: "messages.uploadEncryptedFile (метод)"
original: "https://core.telegram.org/method/messages.uploadEncryptedFile"
section: ref
kind: method
layout: layout.njk
---

# messages.uploadEncryptedFile

*Метод из схемы TL.*

> Upload encrypted file and associate it to a secret chat (without actually sending it to the chat).

## Определение TL

```
encryptedFileEmpty#c21f497e = EncryptedFile;
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;
---functions---
messages.uploadEncryptedFile#5057c497 peer:InputEncryptedChat file:InputEncryptedFile = EncryptedFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | The secret chat to associate the file to |
| file | [InputEncryptedFile](/type/InputEncryptedFile/) | The file |

## Результат

[EncryptedFile](/type/EncryptedFile/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
