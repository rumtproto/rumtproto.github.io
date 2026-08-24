---
title: "upload.saveFilePart"
original: "https://core.telegram.org/method/upload.saveFilePart"
section: ref
kind: method
description: "Сохраняет часть файла для дальнейшей передачи в один из методов."
layout: layout.njk
---

# upload.saveFilePart

Сохраняет часть файла для дальнейшей передачи в один из методов.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
upload.saveFilePart#b304a621 file_id:long file_part:int bytes:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>file_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный идентификатор файла, созданный клиентом</td></tr><tr><td><strong>file_part</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Порядковый номер части</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Двоичные данные, содержимое части</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILE_PART_EMPTY</td><td>Указанная часть файла пуста.</td></tr><tr><td>400</td><td>FILE_PART_INVALID</td><td>Недействительный номер части файла.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr></tbody></table>
