---
title: "account.uploadRingtone"
original: "https://core.telegram.org/method/account.uploadRingtone"
section: ref
kind: method
description: "Загрузить звук уведомления; для его преобразования и добавления в список сохранённых звуков уведомлений используйте account.saveRingtone."
layout: layout.njk
---

# account.uploadRingtone

Загрузить звук уведомления; для его преобразования и добавления в список сохранённых звуков уведомлений используйте [account.saveRingtone](/method/account.saveRingtone/).

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
account.uploadRingtone#831a83a2 file:InputFile file_name:string mime_type:string = Document;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td>Звук уведомления</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя файла</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип файла</td></tr></tbody></table>

### Результат

[Document](/type/Document/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>RINGTONE_MIME_INVALID</td><td>Недопустимый MIME-тип мелодии.</td></tr></tbody></table>

### Связанные страницы

#### [account.saveRingtone](/method/account.saveRingtone/)

Сохранить или удалить сохранённый звук уведомления.

Если звук уведомления уже в формате MP3, будет возвращён [account.savedRingtone](/constructor/account.savedRingtone/).  
Иначе он будет автоматически преобразован и будет возвращён [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/), содержащий новый объект [document](/constructor/document/), который следует использовать для обращения к звуку впредь (то есть при его удалении с помощью параметра `unsave` или при скачивании).
