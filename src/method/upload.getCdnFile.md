---
title: "upload.getCdnFile"
original: "https://core.telegram.org/method/upload.getCdnFile"
section: ref
kind: method
description: "Скачать файл из CDN."
layout: layout.njk
---

# upload.getCdnFile

Скачать файл из [CDN](https://core.telegram.org/cdn).

```
upload.cdnFileReuploadNeeded#eea8e46e request_token:bytes = upload.CdnFile;
upload.cdnFile#a99fca4f bytes:bytes = upload.CdnFile;
---functions---
upload.getCdnFile#395f69da file_token:bytes offset:long limit:int = upload.CdnFile;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен файла</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Смещение загружаемого фрагмента</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина загружаемого фрагмента</td></tr></tbody></table>

### Результат

[upload.CdnFile](/type/upload.CdnFile/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FILE_TOKEN_INVALID</td><td>Основной DC не принял <code>file_token</code> (например, срок действия токена истёк). Продолжите скачивание файла с основного DC с помощью upload.getFile.</td></tr><tr><td>404</td><td>METHOD_INVALID</td><td>Указанный метод недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
