---
title: "Работа с файлами"
original: "https://core.telegram.org/api/files"
section: api
layout: layout.njk
---

# Работа с файлами

Оригинальное русскоязычное описание загрузки и скачивания файлов. Первоисточник: [core.telegram.org/api/files](https://core.telegram.org/api/files).

Файлы в Telegram (фото, видео, документы, голосовые) хранятся на отдельной инфраструктуре и адресуются **локациями**; клиент качает их частями.

## Скачивание

1. Из сообщения/профиля берётся локация — [`InputFileLocation`](/type/InputFileLocation/) (например, [`inputPhotoFileLocation`](/constructor/inputPhotoFileLocation/), [`inputDocumentFileLocation`](/constructor/inputDocumentFileLocation/)).
2. Скачивание — [`upload.getFile`](/method/upload.getFile/) с параметрами `offset` и `limit`: сервер возвращает [`upload.file`](/constructor/upload.file/) с данными и типом файла.
3. Правила:
   - `offset` и `limit` кратны 4 КБ; рекомендуемый размер части — от 128 КБ до 1 МБ;
   - части можно скачивать параллельно (с разными смещениями);
   - файл может раздаваться через CDN: ответ [`upload.fileCdnRedirect`](/constructor/upload.fileCdnRedirect/) означает, что данные нужно запрашивать у указанного CDN-узла, который возвращает их конструктором [`upload.cdnFile`](/constructor/upload.cdnFile/).

## Загрузка

1. Клиент режет файл на части по 512 КБ (кратные 4 КБ) и отправляет их методом [`upload.saveFilePart`](/method/upload.saveFilePart/) с общим `file_id` (случайный 64-битный идентификатор загрузки) и номером `file_part`.
2. После всех частей загруженный файл используется в запросах через [`InputFile`](/type/InputFile/) ([`inputFile`](/constructor/inputFile/) или [`inputFileBig`](/constructor/inputFileBig/) для больших файлов).
3. Для возобновления прерванной загрузки части можно отправлять повторно; сервер хранит загруженные части ограниченное время.

## `file reference`

Локации большинства медиа содержат поле `file_reference` — непрозрачный токен, привязанный к «источнику» файла (сообщению, профилю). Когда токен устаревает, сервер отвечает ошибкой `FILE_REFERENCE_EXPIRED`: клиент обязан **перечитать источник** (сообщение/профиль), получить свежую локацию и повторить запрос. Детали — в оригинальной статье о [базе ссылок на файлы](https://core.telegram.org/api/file-references/).

## Рекомендации

- Кэшируйте локации вместе с источником, чтобы уметь обновлять `file_reference`.
- Проверяйте тип возвращённого файла ([`storage.FileType`](/type/storage.FileType/)) и не доверяйте расширению.
- Большие файлы (>10 МБ) отправляйте через `inputFileBig` без контрольных сумм.
