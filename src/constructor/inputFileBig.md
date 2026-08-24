---
title: "inputFileBig"
original: "https://core.telegram.org/constructor/inputFileBig"
section: ref
kind: constructor
description: "Задаёт большой файл (размером более 10 МБ), сохранённый по частям с помощью метода upload.saveBigFilePart."
layout: layout.njk
---

# inputFileBig

Задаёт большой файл (размером более 10 МБ), сохранённый по частям с помощью метода [upload.saveBigFilePart](/method/upload.saveBigFilePart/).

```
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный идентификатор файла, созданный клиентом</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество сохранённых частей</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Полное имя файла</td></tr></tbody></table>

### Тип

[InputFile](/type/InputFile/)

### Связанные страницы

#### [upload.saveBigFilePart](/method/upload.saveBigFilePart/)

Сохраняет часть большого файла (размером свыше 10 МБ) для последующей передачи в один из методов.
