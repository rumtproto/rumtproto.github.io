---
title: "inputWebFileAudioAlbumThumbLocation"
original: "https://core.telegram.org/constructor/inputWebFileAudioAlbumThumbLocation"
section: ref
kind: constructor
description: "Используется для загрузки обложки альбома для любого музыкального файла с помощью upload.getWebFile; подробнее см. документацию по webfile »."
layout: layout.njk
---

# inputWebFileAudioAlbumThumbLocation

Используется для загрузки обложки альбома для любого музыкального файла с помощью [upload.getWebFile](/method/upload.getWebFile/); подробнее см. [документацию по webfile »](/api/files/#downloading-webfiles).

```
inputWebFileAudioAlbumThumbLocation#f46fe924 flags:# small:flags.2?true document:flags.0?InputDocument title:flags.1?string performer:flags.1?string = InputWebFileLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>small</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Используется для получения миниатюры с разрешением <code>100x100</code> (вместо <code>600x600</code> по умолчанию)</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputDocument">InputDocument</a></td><td>Аудиофайл, о котором идёт речь: НЕ должен передаваться в секретных чатах, вместо этого укажите поля <code>title</code> и <code>performer</code>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Название композиции: следует использовать только в секретных чатах, в обычных чатах вместо этого передавайте <code>document</code>, так как для него мягче ограничения частоты запросов.</td></tr><tr><td><strong>performer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Исполнитель композиции: следует использовать только в секретных чатах, в обычных чатах вместо этого передавайте <code>document</code>, так как для него мягче ограничения частоты запросов.</td></tr></tbody></table>

### Тип

[InputWebFileLocation](/type/InputWebFileLocation/)

### Связанные страницы

#### [upload.getWebfile](/method/upload.getWebFile/)

Возвращает содержимое веб-файла, проксируя запрос через Telegram; подробнее см. [документацию по веб-файлам](/api/files/#downloading-webfiles).

**Примечание**: запрос должен отправляться в дата-центр, указанный в поле `webfile_dc_id` [конфигурации MTProto](/api/config/#mtproto-configuration).

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.
