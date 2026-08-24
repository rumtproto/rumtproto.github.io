---
title: "upload.getCdnFileHashes"
original: "https://core.telegram.org/method/upload.getCdnFileHashes"
section: ref
kind: method
description: "Получить хеши SHA256 для проверки скачанных файлов CDN"
layout: layout.njk
---

# upload.getCdnFileHashes

Получить хеши SHA256 для проверки скачанных файлов [CDN](https://core.telegram.org/cdn)

```
---functions---
upload.getCdnFileHashes#91dc3f31 file_token:bytes offset:long = Vector<FileHash>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Файл</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Смещение, начиная с которого следует получать хеши</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>Этот метод нельзя вызывать в CDN DC.</td></tr><tr><td>400</td><td>FILE_TOKEN_INVALID</td><td>Основной DC не принял <code>file_token</code> (например, срок действия токена истёк). Продолжите скачивание файла с основного DC с помощью upload.getFile.</td></tr><tr><td>400</td><td>RSA_DECRYPT_FAILED</td><td>Внутренняя ошибка расшифровки RSA.</td></tr></tbody></table>

### Связанные страницы

#### [Шифрованные CDN: скорость и безопасность](https://core.telegram.org/cdn)

Как клиентские приложения скачивают популярные публичные файлы из вспомогательных CDN-дата-центров.
