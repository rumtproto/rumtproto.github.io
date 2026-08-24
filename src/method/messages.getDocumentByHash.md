---
title: "messages.getDocumentByHash"
original: "https://core.telegram.org/method/messages.getDocumentByHash"
section: ref
kind: method
description: "Получить документ по его хешу SHA256; метод используется в основном для GIF"
layout: layout.njk
---

# messages.getDocumentByHash

Получить документ по его хешу SHA256; метод используется в основном для GIF

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
messages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>sha256</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>SHA256 файла</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Размер файла в байтах</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип</td></tr></tbody></table>

### Результат

[Document](/type/Document/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SHA256_HASH_INVALID</td><td>Указанный хеш SHA256 недействителен.</td></tr></tbody></table>
