---
title: "upload.reuploadCdnFile"
original: "https://core.telegram.org/method/upload.reuploadCdnFile"
section: ref
kind: method
description: "Запросить повторную загрузку определённого файла в CDN DC."
layout: layout.njk
---

# upload.reuploadCdnFile

Запросить повторную загрузку определённого файла в [CDN DC](https://core.telegram.org/cdn).

```
---functions---
upload.reuploadCdnFile#9b2754a8 file_token:bytes request_token:bytes = Vector<FileHash>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен файла</td></tr><tr><td><strong>request_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен запроса</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>Этот метод нельзя вызывать в CDN DC.</td></tr><tr><td>500</td><td>CDN_UPLOAD_TIMEOUT</td><td>При повторной загрузке файла в CDN DC на сервере истекло время ожидания.</td></tr><tr><td>400</td><td>FILE_TOKEN_INVALID</td><td>Основной DC не принял <code>file_token</code> (например, срок действия токена истёк). Продолжите скачивание файла с основного DC с помощью upload.getFile.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>Указанное местоположение недействительно.</td></tr><tr><td>400</td><td>REQUEST_TOKEN_INVALID</td><td>Основной DC не принял <code>request_token</code>, выданный CDN DC. Продолжите скачивание файла с основного DC с помощью upload.getFile.</td></tr><tr><td>400</td><td>RSA_DECRYPT_FAILED</td><td>Внутренняя ошибка расшифровки RSA.</td></tr></tbody></table>

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
