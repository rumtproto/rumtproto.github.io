---
title: "inputEncryptedFileUploaded"
original: "https://core.telegram.org/constructor/inputEncryptedFileUploaded"
section: ref
kind: constructor
description: "Задаёт новый зашифрованный файл, сохранённый по частям с помощью метода upload.saveFilePart."
layout: layout.njk
---

# inputEncryptedFileUploaded

Задаёт новый зашифрованный файл, сохранённый по частям с помощью метода upload.saveFilePart.

```
inputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный идентификатор файла, созданный клиентом</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сохранённых частей</td></tr><tr><td><strong>md5_checksum</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Если был передан <a href="https://en.wikipedia.org/wiki/MD5">md5-хеш</a> (уже зашифрованного) файла, содержимое файла будет проверено перед использованием</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>32-битный отпечаток ключа, используемого для шифрования файла</td></tr></tbody></table>

### Тип

[InputEncryptedFile](/type/InputEncryptedFile/)
