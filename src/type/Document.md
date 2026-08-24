---
title: "Document"
original: "https://core.telegram.org/type/Document"
section: ref
kind: type
description: "Документ."
layout: layout.njk
---

# Document

Документ.

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

---functions---

messages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;

account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
account.uploadRingtone#831a83a2 file:InputFile file_name:string mime_type:string = Document;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/documentEmpty">documentEmpty</a></td><td>Пустой конструктор, документ не существует.</td></tr><tr><td><a href="/constructor/document">document</a></td><td>Документ</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.uploadTheme">account.uploadTheme</a></td><td>Загрузить тему оформления</td></tr><tr><td><a href="/method/account.uploadRingtone">account.uploadRingtone</a></td><td>Загрузить звук уведомления; используйте <a href="/method/account.saveRingtone">account.saveRingtone</a>, чтобы преобразовать его и добавить в список сохранённых звуков уведомлений.</td></tr><tr><td><a href="/method/messages.getDocumentByHash">messages.getDocumentByHash</a></td><td>Получить документ по его хешу SHA256; метод используется в основном для GIF</td></tr></tbody></table>
