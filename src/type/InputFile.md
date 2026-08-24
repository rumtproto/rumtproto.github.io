---
title: "InputFile"
original: "https://core.telegram.org/type/InputFile"
section: ref
kind: type
description: "Определяет файл, загруженный клиентом."
layout: layout.njk
---

# InputFile

Определяет файл, загруженный клиентом.

```
inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;
inputFileStoryDocument#62dc8b48 id:InputDocument = InputFile;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputFile">inputFile</a></td><td>Определяет файл, сохранённый по частям с помощью метода <a href="/method/upload.saveFilePart">upload.saveFilePart</a>.</td></tr><tr><td><a href="/constructor/inputFileBig">inputFileBig</a></td><td>Задаёт большой файл (размером более 10 МБ), сохранённый по частям с помощью метода <a href="/method/upload.saveBigFilePart">upload.saveBigFilePart</a>.</td></tr><tr><td><a href="/constructor/inputFileStoryDocument">inputFileStoryDocument</a></td><td>Используется, чтобы <a href="/api/stories#editing-stories">изменить миниатюру или статичный предпросмотр истории; подробнее обо всём процессе см. здесь »</a>.</td></tr></tbody></table>
