---
title: "decryptedMessageMediaVideo"
original: "https://core.telegram.org/constructor/decryptedMessageMediaVideo"
section: ref
kind: constructor
description: "Видео, вложенное в зашифрованное сообщение."
layout: layout.njk
---

# decryptedMessageMediaVideo

Видео, вложенное в зашифрованное сообщение.

```
===8===
decryptedMessageMediaVideo#4cee6ef3 thumb:bytes thumb_w:int thumb_h:int duration:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaVideo#524a415d thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaVideo#970c8c0e thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Содержимое файла миниатюры (файл JPEG, качество 55, вписан в квадрат 90x90)</td></tr><tr><td><strong>thumb_w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина миниатюры</td></tr><tr><td><strong>thumb_h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота миниатюры</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность видео в секундах</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина изображения</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота изображения</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Размер файла</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Ключ для расшифровки прикреплённого видеофайла</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Вектор инициализации</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип видеофайла<br>Параметр добавлен в слое 17.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись</td></tr></tbody></table>

### Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
