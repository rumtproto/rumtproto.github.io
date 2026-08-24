---
title: "decryptedMessageMediaDocument"
original: "https://core.telegram.org/constructor/decryptedMessageMediaDocument"
section: ref
kind: constructor
description: "Документ, вложенный в сообщение в секретном чате."
layout: layout.njk
---

# decryptedMessageMediaDocument

Документ, вложенный в сообщение в секретном чате.

```
===8===
decryptedMessageMediaDocument#b095434b thumb:bytes thumb_w:int thumb_h:int file_name:string mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaDocument#7afe8ae2 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:int key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;

===143===
decryptedMessageMediaDocument#6abd9782 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:long key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Содержимое файла миниатюры (файл JPEG, качество 55, вписанный в квадрат 90x90)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина миниатюры</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота миниатюры</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя файла, перенесено в <code>attributes</code> в слое 45.</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип файла</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Размер документа (<a href="/type/int">int</a> на слое &lt;143, <a href="/type/long">long</a> на слое &gt;=143)</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Ключ для расшифровки прикреплённого файла документа</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Инициализация</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DocumentAttribute">DocumentAttribute</a>&gt;</td><td>Атрибуты документа для типов медиафайлов</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись</td></tr></tbody></table>

### Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)

### Связанные страницы

#### [int](/type/int/)

[@term:bare] Базовый голый тип, значения которого соответствуют одноэлементным последовательностям, то есть числам от -2^31 до 2^31-1, которые в этом случае представляют сами себя.

#### [long](/type/long/)

Базовый голый тип, значения которого соответствуют последовательностям из двух элементов, представляющим 64-битные знаковые числа (в порядке little-endian).
