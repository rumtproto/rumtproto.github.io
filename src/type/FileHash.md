---
title: "FileHash"
original: "https://core.telegram.org/type/FileHash"
section: ref
kind: type
description: "Хеш загруженного файла, который следует проверить после скачивания"
layout: layout.njk
---

# FileHash

Хеш загруженного файла, который следует проверить после скачивания

```
fileHash#f39b035c offset:long limit:int hash:bytes = FileHash;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/fileHash">fileHash</a></td><td>Хеш SHA256 загруженного файла — для проверки целостности после скачивания</td></tr></tbody></table>
