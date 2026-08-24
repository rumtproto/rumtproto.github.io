---
title: "inputEncryptedFileBigUploaded"
original: "https://core.telegram.org/constructor/inputEncryptedFileBigUploaded"
section: ref
kind: constructor
description: "Задаёт новый большой зашифрованный файл (размером более 10 МБ), сохранённый по частям с помощью метода upload.saveBigFilePart."
layout: layout.njk
---

# inputEncryptedFileBigUploaded

Задаёт новый большой зашифрованный файл (размером более 10 МБ), сохранённый по частям с помощью метода [upload.saveBigFilePart](/method/upload.saveBigFilePart/).

```
inputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный идентификатор файла, созданный клиентом</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сохранённых частей</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>32-битный отпечаток ключа, используемого для шифрования файла</td></tr></tbody></table>

### Тип

[InputEncryptedFile](/type/InputEncryptedFile/)

### Связанные страницы

#### [upload.saveBigFilePart](/method/upload.saveBigFilePart/)

Сохраняет часть большого файла (размером свыше 10 МБ) для последующей передачи в один из методов.
