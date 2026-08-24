---
title: "upload.saveBigFilePart"
original: "https://core.telegram.org/method/upload.saveBigFilePart"
section: ref
kind: method
description: "Сохраняет часть большого файла (размером свыше 10 МБ) для последующей передачи в один из методов."
layout: layout.njk
---

# upload.saveBigFilePart

Сохраняет часть большого файла (размером свыше 10 МБ) для последующей передачи в один из методов.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
upload.saveBigFilePart#de7b673d file_id:long file_part:int file_total_parts:int bytes:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>file_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайный идентификатор файла, созданный клиентом</td></tr><tr><td><strong>file_part</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Порядковый номер части</td></tr><tr><td><strong>file_total_parts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число частей</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Двоичные данные, содержимое части</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>FILE_PART_EMPTY</td><td>Указанная часть файла пуста.</td></tr><tr><td>400</td><td>FILE_PART_INVALID</td><td>Недействительный номер части файла.</td></tr><tr><td>400</td><td>FILE_PART_SIZE_CHANGED</td><td>Указанный размер части файла изменился.</td></tr><tr><td>400</td><td>FILE_PART_SIZE_INVALID</td><td>Указанный размер части файла недопустим.</td></tr><tr><td>400</td><td>FILE_PART_TOO_BIG</td><td>Загружаемая часть файла слишком велика.</td></tr><tr><td>400</td><td>FILE_PART_TOO_SMALL</td><td>Размер загружаемой части файла слишком мал, допустимые размеры см. в документации.</td></tr></tbody></table>
