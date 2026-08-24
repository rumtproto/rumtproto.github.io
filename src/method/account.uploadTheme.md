---
title: "account.uploadTheme"
original: "https://core.telegram.org/method/account.uploadTheme"
section: ref
kind: method
description: "Загрузить тему оформления"
layout: layout.njk
---

# account.uploadTheme

Загрузить тему оформления

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td><a href="/api/themes#uploading-theme-files">Ранее загруженный</a> файл темы с цветами элементов интерфейса для конкретной платформы; может не задаваться при создании тем, которые изменяют только обои или акцентные цвета.</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputFile">InputFile</a></td><td>Миниатюра</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя файла</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип, обязан быть <code>application/x-tgtheme-{format}</code>, где <code>format</code> зависит от клиента</td></tr></tbody></table>

### Результат

[Document](/type/Document/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>THEME_FILE_INVALID</td><td>Указан недопустимый файл темы оформления.</td></tr><tr><td>400</td><td>THEME_MIME_INVALID</td><td>MIME-тип темы оформления недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.
