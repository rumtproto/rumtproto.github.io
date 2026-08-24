---
title: "inputFile"
original: "https://core.telegram.org/constructor/inputFile"
section: ref
kind: constructor
description: "Определяет файл, сохранённый по частям с помощью метода upload.saveFilePart."
layout: layout.njk
---

# inputFile

Определяет файл, сохранённый по частям с помощью метода [upload.saveFilePart](/method/upload.saveFilePart/).

```
inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный идентификатор файла, созданный клиентом</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сохранённых частей</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Полное имя файла</td></tr><tr><td><strong>md5_checksum</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Если был передан <a href="https://en.wikipedia.org/wiki/MD5#MD5_hashes">md5-хеш</a> файла, содержимое файла будет проверено перед использованием</td></tr></tbody></table>

### Тип

[InputFile](/type/InputFile/)

### Связанные страницы

#### [upload.saveFilePart](/method/upload.saveFilePart/)

Сохраняет часть файла для дальнейшей передачи в один из методов.
