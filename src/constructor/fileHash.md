---
title: "fileHash"
original: "https://core.telegram.org/constructor/fileHash"
section: ref
kind: constructor
description: "Хеш SHA256 загруженного файла — для проверки целостности после скачивания"
layout: layout.njk
---

# FileHash

Хеш SHA256 загруженного файла — для проверки целостности после скачивания

```
fileHash#f39b035c offset:long limit:int hash:bytes = FileHash;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Смещение, с которого начинается вычисление хеша SHA-256</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:hash] Хеш SHA-256 фрагмента файла, который следует проверить после загрузки</td></tr></tbody></table>

### Тип

[FileHash](/type/FileHash/)
