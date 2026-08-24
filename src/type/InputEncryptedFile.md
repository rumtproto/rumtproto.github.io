---
title: "InputEncryptedFile"
original: "https://core.telegram.org/type/InputEncryptedFile"
section: ref
kind: type
description: "Объект задаёт зашифрованный файл для вложения"
layout: layout.njk
---

# InputEncryptedFile

Объект задаёт зашифрованный файл для вложения

```
inputEncryptedFileEmpty#1837c364 = InputEncryptedFile;
inputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;
inputEncryptedFile#5a17b5e5 id:long access_hash:long = InputEncryptedFile;
inputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputEncryptedFileEmpty">inputEncryptedFileEmpty</a></td><td>Пустой конструктор.</td></tr><tr><td><a href="/constructor/inputEncryptedFileUploaded">inputEncryptedFileUploaded</a></td><td>Задаёт новый зашифрованный файл, сохранённый по частям с помощью метода upload.saveFilePart.</td></tr><tr><td><a href="/constructor/inputEncryptedFile">inputEncryptedFile</a></td><td>Задаёт пересылаемый зашифрованный файл для вложения.</td></tr><tr><td><a href="/constructor/inputEncryptedFileBigUploaded">inputEncryptedFileBigUploaded</a></td><td>Задаёт новый большой зашифрованный файл (размером более 10 МБ), сохранённый по частям с помощью метода <a href="/method/upload.saveBigFilePart">upload.saveBigFilePart</a>.</td></tr></tbody></table>
