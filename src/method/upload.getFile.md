---
title: "upload.getFile"
original: "https://core.telegram.org/method/upload.getFile"
section: ref
kind: method
description: "Возвращает содержимое файла целиком или его части."
layout: layout.njk
---

# upload.getFile

Возвращает содержимое файла целиком или его части.

```
upload.file#96a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;
---functions---
upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>precise</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Отключить часть проверок значений limit и offset; полезно, например, для потоковой передачи видео по ключевым кадрам</td></tr><tr><td><strong>cdn_supported</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Поддерживает ли текущий клиент <a href="/cdn">загрузку через CDN</a></td></tr><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputFileLocation">InputFileLocation</a></td><td>Расположение файла</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество пропускаемых байт</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество возвращаемых байт</td></tr></tbody></table>

### Результат

[upload.File](/type/upload.File/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>Этот метод нельзя вызывать в CDN DC.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>406</td><td>FILEREF_UPGRADE_NEEDED</td><td>Для поддержки <a href="/api/file-references">ссылок на файлы</a> клиент необходимо обновить.</td></tr><tr><td>400</td><td>FILE_ID_INVALID</td><td>Указанный идентификатор файла недействителен.</td></tr><tr><td>400</td><td>FILE_REFERENCE_EMPTY</td><td>Указана пустая <a href="/api/file-references">ссылка на файл</a>.</td></tr><tr><td>400</td><td>FILE_REFERENCE_EXPIRED</td><td>Срок действия ссылки на файл истёк, её необходимо получить заново, как описано в <a href="/api/file-references">документации</a>.</td></tr><tr><td>400</td><td>FILE_REFERENCE_INVALID</td><td>Указанная <a href="/api/file-references">ссылка на файл</a> недействительна.</td></tr><tr><td>420</td><td>FLOOD_PREMIUM_WAIT_%d</td><td>Подождите %d секунд, прежде чем повторять действие, либо приобретите <a href="/api/premium">подписку Telegram Premium</a>, чтобы снять это ограничение частоты запросов.</td></tr><tr><td>400</td><td>LIMIT_INVALID</td><td>Указанное ограничение недействительно.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>Указанное местоположение недействительно.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>OFFSET_INVALID</td><td>Указанное смещение недействительно.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
