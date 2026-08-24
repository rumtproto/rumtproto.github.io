---
title: "decryptedMessageMediaAudio"
original: "https://core.telegram.org/constructor/decryptedMessageMediaAudio"
section: ref
kind: constructor
description: "Аудиофайл, вложенный в сообщение секретного чата."
layout: layout.njk
---

# decryptedMessageMediaAudio

Аудиофайл, вложенный в сообщение секретного чата.

```
===8===
decryptedMessageMediaAudio#6080758f duration:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaAudio#57e0a9cb duration:int mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность аудиозаписи в секундах</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Размер файла</td></tr><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Ключ для расшифровки прикреплённого медиафайла</td></tr><tr><td><strong>iv</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Вектор инициализации</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип аудиофайла<br>Параметр добавлен в слое 13.</td></tr></tbody></table>

### Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
