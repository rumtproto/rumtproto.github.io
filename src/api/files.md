---
title: "Загрузка и скачивание файлов"
original: "https://core.telegram.org/api/files"
section: api
description: "При работе с API иногда требуется передать на сервер сравнительно большой файл. Например, при отправке сообщения с вложенной фотографией или видео либо при установке фотографии…"
layout: layout.njk
---

# Загрузка и скачивание файлов

При работе с API иногда требуется передать на сервер сравнительно большой файл. Например, при отправке сообщения с вложенной фотографией или видео либо при установке фотографии профиля текущего пользователя.

### Загрузка файлов

Для сохранения файлов предусмотрено несколько методов API. Схема используемых типов и методов приведена ниже:

```
inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;


inputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;
inputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;

inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;

inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;

inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;


---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.uploadMedia#14967978 flags:# business_connection_id:flags.0?string peer:InputPeer media:InputMedia = MessageMedia;
messages.sendEncryptedFile#5559481d flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes file:InputEncryptedFile = messages.SentEncryptedMessage;

photos.uploadProfilePhoto#0388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;    

upload.saveFilePart#b304a621 file_id:long file_part:int bytes:bytes = Bool;
upload.saveBigFilePart#de7b673d file_id:long file_part:int file_total_parts:int bytes:bytes = Bool;
```

[@term:file_id] Прежде чем передавать само содержимое файла, файлу нужно назначить уникальный 64-битный клиентский идентификатор — **file\_id** (номер, который клиент выбирает сам и по которому сервер собирает загруженные части воедино).

[@term:part_size] Затем двоичное содержимое файла разбивается на части. Все части обязаны иметь одинаковый размер (**part\_size** — размер одной части), и должны выполняться следующие условия:

-   `part_size % 1024 = 0` (размер кратен 1 КБ)
-   `524288 % part_size = 0` (512 КБ должны нацело делиться на **part\_size**)

Последняя часть может не удовлетворять этим условиям при условии, что её размер меньше **part\_size**.

Максимальное число загружаемых частей файла задают следующие [поля appConfig](/api/config/#client-configuration):

-   [upload\_max\_fileparts\_default »](/api/config/#upload-max-fileparts-default) — максимальное число частей файла, которое могут загрузить пользователи без подписки Premium.
-   [upload\_max\_fileparts\_premium »](/api/config/#upload-max-fileparts-premium) — максимальное число частей файла, которое могут загрузить пользователи с подпиской Premium.

Учтите, что ограничение на число загружаемых частей не учитывает **part\_size**: таким образом, предельного общего размера файла можно достичь только при наибольшем возможном значении **part\_size** в 512 КБ — которое, собственно, и рекомендуется использовать, чтобы избежать избыточных накладных расходов протокола.

[@term:file_part] Каждой части следует присвоить порядковый номер **file\_part** — значение от 0 до значения соответствующего параметра конфигурации минус 1.

После разбиения файла нужно выбрать метод для его сохранения на сервере. Используйте [upload.saveBigFilePart](/method/upload.saveBigFilePart/), если полный размер файла превышает **10 МБ**, и [upload.saveFilePart](/method/upload.saveFilePart/) для файлов меньшего размера.

Каждый вызов сохраняет порцию данных во временном хранилище сервера для последующего использования. Срок хранения каждой порции данных составляет от нескольких минут до нескольких часов (в зависимости от того, насколько загружено хранилище). По истечении этого времени часть файла становится недоступной.

Чтобы повысить скорость сохранения файла, рекомендуется использовать очередь вызовов (локальную, то есть **не** на основе invokeAfterMsgs), так чтобы в каждый момент времени сохранялось X частей файла. Каждая успешная операция сохранения части инициирует вызов метода для сохранения следующей части. Значение X можно подобрать так, чтобы добиться максимальной производительности.

Для дальнейшего повышения производительности можно использовать несколько параллельных очередей вызовов (то есть настраиваемое число Y очередей), привязанных к отдельным TCP-соединениям с дата-центрами, — это позволяет загружать несколько фрагментов параллельно.

При использовании одного из упомянутых выше методов сохранения частей файла может вернуться одна из следующих [ошибок входных данных](/api/errors/#400-bad-request):

-   FILE\_PARTS\_INVALID — неверное число частей. Значение не попадает в диапазон `1..upload_max_fileparts_*`
-   FILE\_PART\_INVALID: неверный номер части файла. Значение не попадает в диапазон от `0` до `upload_max_fileparts_*-1`.
-   FILE\_PART\_TOO\_BIG: превышено ограничение на размер содержимого части файла (512 КБ)
-   FILE\_PART\_EMPTY: отправленная часть файла пуста
-   FILE\_PART\_SIZE\_INVALID — 512 КБ не делятся нацело на **part\_size**
-   FILE\_PART\_SIZE\_CHANGED — размер части отличается от размера одной из предыдущих частей того же файла
-   FLOOD\_PREMIUM\_WAIT\_X: означает, что скорость загрузки ограничена, поскольку у текущей учётной записи нет подписки [Premium](/api/premium/), и что клиент обязан автоматически повторить запрос через X секунд.  
    Получив эту ошибку, клиентам следует показать [окно оформления подписки Telegram Premium](/api/premium/) с предложением приобрести подписку Premium, чтобы увеличить скорость загрузки в [upload\_premium\_speedup\_upload »](/api/config/#upload-premium-speedup-upload) раз.  
    Учтите, что это окно следует показывать, только если загружаемый файл в данный момент виден пользователю; если нет, окно следует показать тогда, когда загружаемое или уже загруженное медиа станет видимым.  
    Кроме того, это окно следует показывать **не чаще**, чем раз в [upload\_premium\_speedup\_notify\_period »](/api/config/#upload-premium-speedup-notify-period), чтобы не осыпать пользователя всплывающими сообщениями по поводу каждого файла, загрузка которого замедлена.  
    Эту ошибку можно получить, только если пользователь загрузил десятки гигабайт или больше.

[@term:md5_checksum] Пока части загружаются, можно попутно вычислять [MD5-хеш](https://en.wikipedia.org/wiki/MD5) содержимого файла, чтобы позже передать его в параметре **md5\_checksum** (контрольная сумма файла) конструктора [inputFile](/constructor/inputFile/) (поскольку он проверяется только сервером, для файлов зашифрованных секретных чатов его нужно вычислять по зашифрованному файлу).  
После успешного сохранения файла целиком можно вызвать завершающий метод, передав ему сформированный объект [inputFile](/type/InputFile/). Если использовался метод [upload.saveBigFilePart](/method/upload.saveBigFilePart/), обязательно передаётся конструктор [inputFileBig](/constructor/inputFileBig/), в остальных случаях — [inputFile](/constructor/inputFile/).

-   [messages.sendMedia](/method/messages.sendMedia/) — отправляет медиафайл в чат
-   [messages.uploadMedia](/method/messages.uploadMedia/) — загружает медиафайл в чат, не отправляя его, и возвращает только конструктор [MessageMedia](/type/MessageMedia/), с помощью которого файл можно позже отправить сразу в несколько чатов, не загружая его каждый раз заново.
-   [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/) — используется для установки [фото или видео профиля либо чата](#uploading-profile-or-chat-pictures)

Операция сохранения файла может вернуть одну из следующих [ошибок входных данных](/api/errors/#400-bad-request):

-   FILE\_PARTS\_INVALID: неверное число частей файла. Значение не попадает в диапазон от 1 до `upload_max_fileparts_*`.
-   FILE\_PART\_X\_MISSING: часть X (где X — число) отсутствует в хранилище. Попробуйте повторить вызов метода, чтобы сохранить эту часть заново.
-   MD5\_CHECKSUM\_INVALID: MD5-сумма файла не совпала с параметром **md5\_checksum**

#### Повторная отправка уже загруженных файлов

```
inputMediaPhoto#e3af4434 flags:# spoiler:flags.1?true live_photo:flags.2?true id:InputPhoto ttl_seconds:flags.0?int video:flags.2?InputDocument = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
```

Незащищённые медиафайлы (то есть медиа из [сообщений](/constructor/message/) **без** флага `noforwards`) можно пересылать в другие чаты без повторной загрузки: достаточно передать в [messages.sendMedia](/method/messages.sendMedia/) или [messages.sendMultiMedia](/method/messages.sendMultiMedia/) конструктор [inputMediaPhoto](/constructor/inputMediaPhoto/) для фотографий либо конструктор [inputMediaDocument](/constructor/inputMediaDocument/) для медиа любого другого вида, сформированный на основе уже существующего [photo](/constructor/photo/) или [document](/constructor/document/).

Любые флаги в [inputMediaPhoto](/constructor/inputMediaPhoto/) и [inputMediaDocument](/constructor/inputMediaDocument/) допускается изменить, чтобы поменять те или иные атрибуты медиафайла.

[@term:file_reference] При повторной отправке существующего медиа метод [messages.sendMedia](/method/messages.sendMedia/) может вернуть ошибку `FILE_REFERENCE_EXPIRED` (либо `FILE_REFERENCE_INVALID`, которую следует обрабатывать точно так же); в этом случае поле `file_reference` (ссылка на файл — идентификатор с ограниченным сроком действия, привязывающий файл к тому контексту, откуда он получен) во входной локации обязано быть [обновлено, как описано здесь »](/api/file-references/).

Метод [messages.sendMultiMedia](/method/messages.sendMultiMedia/) тоже может возвращать ошибки, связанные со ссылками на файлы, но в немного другом виде — как `FILE_REFERENCE_%d_EXPIRED` (либо `FILE_REFERENCE_%d_INVALID`, которую следует обрабатывать точно так же): здесь медиа, чью ссылку на файл нужно обновить, находится в переданном векторе `multi_media` по индексу `%d`.

Та же ошибка `FILE_REFERENCE_%d_INVALID` может прийти и от [messages.sendMedia](/method/messages.sendMedia/) или от других методов, принимающих единственный конструктор [InputMedia](/type/InputMedia/), — когда передан [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/) с массивом медиафайлов `extended_media`.

#### Редактирование загруженных файлов

```
inputMediaPhoto#e3af4434 flags:# spoiler:flags.1?true live_photo:flags.2?true id:InputPhoto ttl_seconds:flags.0?int video:flags.2?InputDocument = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;


inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;

---functions---

messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

Чтобы отредактировать или заменить медиафайл, отправленный через [messages.sendMedia](/method/messages.sendMedia/) и [messages.sendMultiMedia](/method/messages.sendMultiMedia/), используйте [messages.editMessage](/method/messages.editMessage/).

Если требуется изменить только атрибуты `spoiler`, `ttl_seconds` или `query`, это делается без повторной загрузки всего медиафайла: достаточно передать старое медиа в параметр `id` конструкторов [inputMediaPhoto](/constructor/inputMediaPhoto/), [inputMediaDocument](/constructor/inputMediaDocument/) и задать нужные значения атрибутов `spoiler`/`ttl_seconds`/`query`.

Если же нужно изменить любой другой атрибут (например, имя файла из [documentAttributeFilename](/constructor/documentAttributeFilename/), любой другой [DocumentAttribute](/type/DocumentAttribute/) или любой флаг, кроме `spoiler`/`ttl_seconds`/`query`/`video_cover`/`video_timestamp`), **файл необходимо загрузить заново целиком**, чтобы новые атрибуты можно было указать в [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/)/[inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/).

Единственное исключение из этого правила — изменение атрибута [documentAttributeVideo](/constructor/documentAttributeVideo/).`video_start_ts` у видео-[историй](/api/stories/): в этом случае по-прежнему можно применить [inputMediaDocument](/constructor/inputMediaDocument/) с [inputFileStoryDocument](/constructor/inputFileStoryDocument/) вместо [inputFile](/constructor/inputFile/), не загружая видео истории заново; подробнее о полном порядке действий — [здесь »](/api/stories/#editing-stories).

#### Потоковая загрузка

API поддерживает также потоковую загрузку — на случай, когда длина файла к началу загрузки ещё неизвестна.

Это удобно, например, при перекодировании видео: чтобы не буферизовать на диске всё сконвертированное видео целиком, каждая часть отправляется сразу, как только её выдал кодировщик.

Всё работает так же, как при [обычной загрузке](#uploading-files), за несколькими важными исключениями:

-   Клиент накапливает в буфере `part_size` байт (или меньше, если поток закончился) и сразу отправляет часть так, как описано [в предыдущем разделе](#uploading-files).
-   Необходимо вести переменную `total_stream_size` — общее число прочитанных из потока байт.
-   Всегда обязательно применяется [upload.saveBigFilePart](/method/upload.saveBigFilePart/), даже если поток в итоге оказался меньше 10 МБ.
-   Поле `file_total_parts` обязано быть равно `-1` для всех частей, кроме последней, по следующей логике:
    -   Если поток закончился, а длина накопленной части больше 0, отправьте её, указав `file_total_parts=ceil(total_stream_size/part_size)` (как при обычной загрузке)
    -   Если поток закончился, а длина накопленной части равна 0, всё равно отправьте её (отправьте одну последнюю пустую часть), указав `file_total_parts=ceil(total_stream_size/part_size)` (как при обычной загрузке)

Обратите внимание: потоковую загрузку нельзя применять при загрузке фотографий через [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/).

#### Качества видео

```
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;

updateNewScheduledMessage#39a51dfb message:Message = Update;
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;
```

При отправке видео в крупные каналы Telegram автоматически перекодирует их, создавая несколько версий в разных качествах и форматах; они доступны пользователям в векторе `alt_documents` отправленного [messageMediaDocument](/constructor/messageMediaDocument/).

Учтите, что если [флаг клиентской конфигурации video\_ignore\_alt\_documents »](/api/config/#video-ignore-alt-documents) задан и равен true, клиенты обязаны игнорировать поле [messageMediaDocument](/constructor/messageMediaDocument/).`alt_documents`.

Поскольку обработка на сервере занимает некоторое время, видео, отправленные в крупные каналы, не будут отправлены сразу после вызова sendMedia/sendMultiMedia: вместо этого они попадут в очередь отложенной отправки — так же, как [отложенные сообщения »](/api/scheduled-messages/), — с датой отправки, равной приблизительной дате завершения перекодирования на сервере:

-   Сразу после вызова sendMedia будет возвращено [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/), содержащее [message](/constructor/message/) с ID, равным ID сообщения в очереди отложенной отправки для текущего чата (у каждого личного чата, обычной группы, супергруппы и канала своя очередь отложенной отправки и своя последовательность ID), с **установленным флагом `video_processing_pending`** и полем `date`, равным **предполагаемой дате завершения перекодирования** (а не дате отложенной отправки).
-   Примерно в момент `date` придёт [updateNewMessage](/constructor/updateNewMessage/) или [updateNewChannelMessage](/constructor/updateNewChannelMessage/) с установленным флагом `from_scheduled`, сообщающее отправителю, что сообщение с ожидавшим обработки видео отправлено.
-   Примерно в момент `date` придёт [updateDeleteScheduledMessages](/constructor/updateDeleteScheduledMessages/), означающее, что сообщение убрано из очереди отложенной отправки.  
    Поле `messages` будет содержать ID отложенных сообщений для отправленных сообщений (изначально возвращённые в [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)), а `sent_messages` — настоящие ID отправленных сообщений.  
    Отложенный и настоящий ID одного и того же сообщения находятся в векторах `messages` и `sent_messages` соответственно по одинаковому индексу.

Иными словами, с такими сообщениями следует обращаться так же, как с [отложенными сообщениями »](/api/scheduled-messages/).

#### Обложки видео

```
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;

messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
```

[@term:video_cover] Собственную обложку видео можно передать отдельно — в том числе при повторной отправке уже существующих видео через [inputMediaDocument](/constructor/inputMediaDocument/), — заполнив поле `video_cover` (обложка — картинка, которая показывается вместо первого кадра, пока видео не запущено); в качестве обложки используется фотография, при необходимости загруженная методом [messages.uploadMedia](/method/messages.uploadMedia/).

После этого обложка будет доступна в поле [messageMediaDocument](/constructor/messageMediaDocument/).`video_cover`.

Собственные обложки видео не поддерживаются в самоуничтожающихся сообщениях, а в секретных чатах пока не поддерживаются вовсе.

#### Запуск видео с заданной отметки времени

```
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;

messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;

---functions---

messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
```

[@term:video_timestamp] Момент, с которого начнётся воспроизведение видео, можно задать, заполнив поле `video_timestamp` (метка времени в секундах от начала ролика): при загрузке видео — [inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/).`video_timestamp`, при повторной отправке уже существующих видео — [inputMediaDocument](/constructor/inputMediaDocument/).`video_timestamp`, а при их пересылке — [messages.forwardMessages](/method/messages.forwardMessages/).`video_timestamp`.

Начальная метка времени будет доступна в [messageMediaDocument](/constructor/messageMediaDocument/).`video_timestamp`.

#### Альбомы, сгруппированные медиа

```
inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
    
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;

---functions---

messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
```

Telegram позволяет группировать фотографии в [альбомы](https://telegram.org/blog/albums-saved-messages), а обычные файлы (аудио, документы) — в медиагруппы.

Для этого применяется [messages.sendMultiMedia](/method/messages.sendMultiMedia/): каждый конструктор [InputMedia](/type/InputMedia/) (загруженный или уже существующий, не более 10 на медиагруппу) оборачивается в конструктор [inputSingleMedia](/constructor/inputSingleMedia/), при желании с отдельной подписью к каждому файлу в поле `message`.

Для фотоальбомов клиентам следует показывать подпись альбома только в том случае, если подпись есть ровно у одной фотографии группы; иначе подпись альбома отображать не нужно, и показывать её следует только при подробном просмотре той самой фотографии группы.  
Прочие сгруппированные медиа могут показывать подпись под каждым файлом.

#### Загрузка по хешу

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

---functions---

messages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;
```

Для некоторых типов документов, например GIF, с помощью [messages.getDocumentByHash](/method/messages.getDocumentByHash/) можно поискать документ на серверах Telegram. Вычисляется хеш SHA256 файла и передаётся в метод вместе с mime-типом и размером файла: если тип файла указан верно и файл найден, возвращается [document](/constructor/document/).

### Загрузка фотографий профиля и чата

```
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;

photos.photo#20212ca8 photo:Photo users:Vector<User> = photos.Photo;

inputPhoto#3bb3b94a id:long access_hash:long file_reference:bytes = InputPhoto;

inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;

videoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;
videoSizeStickerMarkup#0da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;

inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;
inputChatPhoto#8953ad37 id:InputPhoto = InputChatPhoto;

emojiListNotModified#481eadfa = EmojiList;
emojiList#7a1e11d1 hash:long document_id:Vector<long> = EmojiList;

---functions---

photos.updateProfilePhoto#09e82039 flags:# fallback:flags.0?true bot:flags.1?InputUser id:InputPhoto = photos.Photo;
photos.uploadProfilePhoto#0388a3b5 flags:# fallback:flags.3?true bot:flags.5?InputUser file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.4?VideoSize = photos.Photo;

messages.editChatPhoto#35ddd674 chat_id:long photo:InputChatPhoto = Updates;

channels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;

account.getDefaultProfilePhotoEmojis#e2750328 hash:long = EmojiList;
account.getDefaultGroupPhotoEmojis#915860ae hash:long = EmojiList;
```

Фотографии профиля пользователя загружаются методом [photos.uploadProfilePhoto](/method/photos.updateProfilePhoto/): само изображение необходимо [загрузить так же, как обычный файл](#uploading-files).  
[photos.uploadProfilePhoto](/method/photos.updateProfilePhoto/) можно использовать и для того, чтобы заново выставить одну из ранее загруженных фотографий профиля.

Необязательный флаг `bot` может содержать данные принадлежащего вам [бота](/api/bots/) — тогда будет изменена фотография профиля этого бота, а не текущего пользователя.

#### Анимированные фотографии профиля

Поддерживаются и анимированные фотографии профиля — для этого заполняется флаг `video`: допускаются квадратные видео в формате MPEG4 с разрешением до `1080x1080`, рекомендуемое разрешение — `800x800`.  
[@term:video_start_ts] Поле `video_start_ts` — это UNIX-время с плавающей точкой в секундах, указывающее кадр видео, который следует использовать как статичную превью-картинку.

Фотографии и видео профиля [чатов, каналов и супергрупп](/api/channel/) загружаются методом [messages.editChatPhoto](/method/messages.editChatPhoto/) (для [обычных групп](/api/channel/#basic-groups)) либо [channels.editPhoto](/method/channels.editPhoto/) (для [каналов и супергрупп](/api/channel/)).  
Чтобы повторно использовать ранее загруженную фотографию профиля, применяйте [inputChatPhoto](/constructor/inputChatPhoto/).

#### Фотографии профиля из стикеров

Поддерживаются также фотографии профиля на основе [стикеров](/api/stickers/) и [стикеров-пользовательских эмодзи](/api/custom-emoji/): для этого флаг `video_emoji_markup` заполняется конструктором [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/) или [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/).

[@term:background_colors] Фотографию профиля следует отрисовывать, размещая стикер в центре квадратного холста так, чтобы он занимал не более 67 % его площади. Фон холста генерируется из `background_colors` — вектора из 1, 2, 3 или 4 цветов RGB-24, по которым строится сплошной (1), градиентный (2) или произвольный градиентный (3, 4) фон, аналогично тому, как генерируются [заливки обоев](/api/wallpapers/#fill-types). Угол поворота для градиентных фонов равен 0.  
Если используются анимированные или видеостикеры либо пользовательские эмодзи, флаг `video_start_ts` может содержать UNIX-время с плавающей точкой в секундах, указывающее кадр фотографии профиля, который следует использовать как статичную превью-картинку.

Метод [account.getDefaultProfilePhotoEmojis](/method/account.getDefaultProfilePhotoEmojis/) позволяет получить список рекомендуемых [пользовательских эмодзи](/api/custom-emoji/), которые можно использовать в качестве фотографии профиля даже без подписки Premium; [account.getDefaultGroupPhotoEmojis](/method/account.getDefaultGroupPhotoEmojis/) — его аналог для фотографий профиля групп.

В интерфейсе выбора пользовательского эмодзи следует предлагать список категорий, позволяющий быстро отфильтровать результаты по эмодзи (или набору эмодзи) либо по иным признакам; подробнее см. [здесь »](/api/emoji-categories/).

### Скачивание файлов

Для скачивания успешно загруженных файлов предусмотрены отдельные методы. Ниже приведена схема используемых типов и методов:

```
upload.file#096a18d5 type:storage.FileType mtime:int bytes:bytes = upload.File;
upload.fileCdnRedirect#f18cda44 dc_id:int file_token:bytes encryption_key:bytes encryption_iv:bytes file_hashes:Vector<FileHash> = upload.File;

storage.fileUnknown#aa963b05 = storage.FileType;
storage.fileJpeg#007efe0e = storage.FileType;
storage.fileGif#cae1aadf = storage.FileType;
storage.filePng#0a4f63c0 = storage.FileType;
storage.fileMp3#528a0677 = storage.FileType;
storage.fileMov#4b09ebbc = storage.FileType;
storage.filePartial#40bc6f52 = storage.FileType;
storage.fileMp4#b3cea0e4 = storage.FileType;
storage.fileWebp#1081464c = storage.FileType;

---functions---

upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

Любой файл можно скачать вызовом [upload.getFile](/method/upload.getFile/). Данные для входного параметра типа [InputFileLocation](/type/InputFileLocation/) формируются следующим образом:

```
inputFileLocation#dfdaabe1 volume_id:long local_id:int secret:long file_reference:bytes = InputFileLocation;
inputEncryptedFileLocation#f5235d55 id:long access_hash:long = InputFileLocation;
inputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
inputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;
inputTakeoutFileLocation#29be5899 = InputFileLocation;
inputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
inputPhotoLegacyFileLocation#d83466f3 id:long access_hash:long file_reference:bytes volume_id:long local_id:int secret:long = InputFileLocation;
inputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;
inputStickerSetThumb#9d84f3db stickerset:InputStickerSet thumb_version:int = InputFileLocation;
inputGroupCallStream#0598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;

inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#028703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#0cde3739 = InputStickerSet;

inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChat#35a95cb9 chat_id:long = InputPeer;
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
inputPeerChannel#27bcbbfc channel_id:long access_hash:long = InputPeer;

photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;

photoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;
photoCachedSize#021e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;

chatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;
userProfilePhoto#82d1f706 flags:# has_video:flags.0?true personal:flags.2?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = UserProfilePhoto;
```

-   [@term:access_hash] Для фотографий используется [inputPhotoFileLocation](/constructor/inputPhotoFileLocation/) (`access_hash` — хеш доступа, выданное сервером значение, без которого клиент не может сослаться на объект):

    -   `id`, `file_reference` и `access_hash` берутся из конструктора [photo](/constructor/photo/)
    -   `thumb_size` берётся из поля `type` нужного [PhotoSize](/type/PhotoSize/)/[VideoSize](/type/VideoSize/) у [photo](/constructor/photo/)
-   Для фотографий профиля пользователей, каналов, супергрупп и групп необходимо использовать [inputPeerPhotoFileLocation](/constructor/inputPeerPhotoFileLocation/):

    -   `peer` — идентификатор пира, чью фотографию требуется скачать
    -   `big` позволяет выбрать, что скачивать: изображение в полном разрешении или только миниатюру
    -   `photo_id` извлекается из [chatPhoto](/constructor/chatPhoto/) или [userProfilePhoto](/constructor/userProfilePhoto/) нужной фотографии профиля
-   Для документов используется [inputDocumentFileLocation](/constructor/inputDocumentFileLocation/):

    -   `id`, `file_reference` и `access_hash` берутся из конструктора [document](/constructor/document/)
    -   При скачивании миниатюры документа или [premium-эффекта стикера](/api/stickers/#premium-animated-sticker-effects) поле `thumb_size` следует взять из поля `type` нужного [PhotoSize](/type/PhotoSize/)/[VideoSize](/type/VideoSize/) у [photo](/constructor/photo/); в остальных случаях передайте пустую строку.
-   Для превью наборов стикеров используется [inputStickerSetThumb](/constructor/inputStickerSetThumb/) (обратите внимание: чтобы скачать сами стикеры и их превью, применяйте описанный выше способ для документов):

    -   `stickerset` содержит конструктор [InputStickerSet](/type/InputStickerSet/), построенный на основе [stickerSet](/constructor/stickerSet/)
    -   `thumb_version` копируется из одноимённого поля в [stickerSet](/constructor/stickerSet/)
-   Для документов из секретных чатов и из Telegram Passport необходимо использовать соответственно [inputEncryptedFileLocation](/constructor/inputEncryptedFileLocation/) и [inputSecureFileLocation](/constructor/inputSecureFileLocation/), а их параметры извлекать из [encryptedFile](/constructor/encryptedFile/) и [secureFile](/constructor/secureFile/) ([документация по Passport](https://core.telegram.org/passport)).

-   Для фрагментов прямой трансляции используется [inputGroupCallStream](/constructor/inputGroupCallStream/):

    -   `call` содержит ID и access hash соответствующего группового звонка, взятые из конструктора [groupCall](/constructor/groupCall/).
    -   `time_ms` задаёт запрашиваемую метку времени
    -   `scale` задаёт длительность запрашиваемого медиасегмента. Чтобы получить это значение в миллисекундах, сдвиньте `1000` вправо `scale` раз: `duration_ms := 1000 >> scale`.
    -   `video_channel` задаёт запрашиваемый видеоканал
    -   `video_quality` задаёт выбранное качество видео (0 — самое низкое, 1 — среднее, 2 — наилучшее)

    Подробнее — [здесь »](/api/group-calls/#downloading-media-chunks).

-   Для старых, **устаревших** фотографий — если клиент закешировал старые fileLocation с **устаревшим** идентификатором `secret` — используется [inputFileLocation](/constructor/inputFileLocation/) или [inputPhotoLegacyFileLocation](/constructor/inputPhotoLegacyFileLocation/) (это нужно главным образом для обратной совместимости с файловыми ID из bot API; все пользовательские клиенты обязаны применять современные файловые ID [inputPhotoFileLocation](/constructor/inputPhotoFileLocation/)):

    -   Все поля берутся из ранее закешированного fileLocation, кроме `file_reference`, `access_hash` и `id`, которые берутся из конструктора [photo](/constructor/photo/) (последние два поля используются, только если они доступны, и тогда вместо [inputFileLocation](/constructor/inputFileLocation/) применяется [inputPhotoLegacyFileLocation](/constructor/inputPhotoLegacyFileLocation/)).

Размер каждого файла в байтах известен, поэтому файл можно скачивать по частям с помощью параметров **offset** и **limit** — так же, как это делается при загрузке файлов.

Если флаг **precise** не задан, то

-   Параметр **offset** обязан быть кратен 4 КБ.
-   Параметр **limit** обязан быть кратен 4 КБ.
-   1048576 (1 МБ) обязано делиться на **limit** нацело.

Если **precise** задан, то

-   Параметр **offset** обязан быть кратен 1 КБ.
-   Параметр **limit** обязан быть кратен 1 КБ.
-   **limit** не должен превышать 1048576 (1 МБ).

В любом случае запрашиваемая часть должна целиком укладываться в один блок размером 1 МБ, отсчитываемый от начала файла, то есть

-   **offset** / (1024 \* 1024) == (**offset** + **limit** - 1) / (1024 \* 1024).

При параллельном скачивании нескольких файлов из одного DC клиентам следует ограничивать параллелизм: одновременно должно скачиваться не более `small_queue_max_active_operations_count`/`large_queue_max_active_operations_count` файлов — для файлов меньше и больше 20 МБ соответственно ([параметры клиентской конфигурации »](/api/config/#client-configuration)).

Операция скачивания файла может вернуть конструктор [upload.fileCdnRedirect](/constructor/upload.fileCdnRedirect/): в этом случае для скачивания файлов с CDN обязательно следовать [этим](https://core.telegram.org/cdn) инструкциям. Кроме того, операция скачивания файла может вернуть одну из следующих [ошибок входных данных](/api/errors/#400-bad-request):

-   FILE\_REFERENCE\_EXPIRED: поле `file_reference` во входной локации необходимо [обновить, как описано здесь »](/api/file-references/).
-   FILE\_REFERENCE\_INVALID: поле `file_reference` во входной локации недействительно, его необходимо [обновить, как описано здесь »](/api/file-references/).
-   FILE\_ID\_INVALID: адрес файла недействителен
-   OFFSET\_INVALID: недопустимое значение **offset**
-   LIMIT\_INVALID: недопустимое значение **limit**
-   FILE\_MIGRATE\_X: файл находится в дата-центре № X
-   FLOOD\_WAIT\_X: повторите запрос через X секунд
-   FLOOD\_PREMIUM\_WAIT\_X: означает, что скорость скачивания ограничена, поскольку у текущей учётной записи нет подписки [Premium](/api/premium/), и что клиент обязан автоматически повторить запрос через X секунд.  
    Получив эту ошибку, клиентам следует показать [окно оформления подписки Telegram Premium](/api/premium/) с предложением приобрести подписку Premium, чтобы увеличить скорость скачивания в [upload\_premium\_speedup\_download »](/api/config/#upload-premium-speedup-download) раз.  
    Учтите, что это окно следует показывать, только если скачиваемый файл в данный момент виден пользователю; если нет — окно нужно показать тогда, когда загружаемое или уже загруженное медиа окажется на экране.  
    Кроме того, это окно следует показывать **не чаще**, чем раз в [upload\_premium\_speedup\_notify\_period »](/api/config/#upload-premium-speedup-notify-period), чтобы не забрасывать пользователя всплывающим окном при каждом файле, скачивание которого замедлено.  
    Эту ошибку можно получить, только если пользователь загрузил десятки гигабайт или больше.

#### Проверка скачанных фрагментов

```
fileHash#f39b035c offset:long limit:int hash:bytes = FileHash;

---functions---

upload.getFileHashes#9156982a location:InputFileLocation offset:long = Vector<FileHash>;
```

Чтобы убедиться в целостности скачанного файла, клиентам рекомендуется проверять хеши каждой скачанной части — так же, как это делается для [CDN DC](https://core.telegram.org/cdn). [upload.getFileHashes](/method/upload.getFileHashes/) возвращает конструкторы [FileHash](/type/FileHash/). Каждый такой конструктор содержит SHA-256-хеш части файла, которая начинается со смещения `offset` и занимает `limit` байт.

Прежде чем сохранить в файл очередную порцию данных, полученную от DC, клиент может проверить, совпадает ли её хеш с хешем, полученным от главного DC. Если хеша для какой-либо части файла нет, разработчики клиентов обязаны получить недостающий хеш методом [upload.getFileHashes](/method/upload.getFileHashes/).

#### Работа с аудио-, видео- и векторными превью

Схема:

```
photoSizeEmpty#0e17e23c type:string = PhotoSize;
photoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;
photoCachedSize#021e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
photoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;

videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;

document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;

photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
```

Ко всем загруженным медиафайлам Telegram прикладывает вектор миниатюр в уменьшенном разрешении.  
Для видео, GIF и анимированных фотографий профиля сервер дополнительно создаёт обрезанное и уменьшенное видеопревью.

#### Значения `PhotoSize.type`

У каждого конструктора [PhotoSize](/type/PhotoSize/) есть поле `type`, которое указывает разрешение и то, какое преобразование изображения было выполнено на стороне сервера.

-   `s` — уменьшенное на сервере изображение, вписанное в 100x100 пикселей.
-   `m` — уменьшенное на сервере изображение, вписанное в 320x320 пикселей.
-   `x` — уменьшенное на сервере изображение, вписанное в 800x800 пикселей.
-   `y` — уменьшенное на сервере изображение, вписанное в 1280x1280 пикселей.
-   `w` — уменьшенное на сервере изображение, вписанное в 2560x2560 пикселей.
-   `a` — обрезанное на сервере изображение, 160x160 пикселей.
-   `b` — обрезанное на сервере изображение, 320x320 пикселей.
-   `c` — обрезанное на сервере изображение, 640x640 пикселей.
-   `d` — обрезанное на сервере изображение, 1280x1280 пикселей.
-   `i` — упрощённая миниатюра, см. [упрощённые миниатюры »](#stripped-thumbnails).
-   `j` — векторная миниатюра-контур, см. [векторные миниатюры »](#vector-thumbnails).

#### Упрощённые миниатюры

```
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
```

[@term:photoStrippedSize] Конструктор [photoStrippedSize](/constructor/photoStrippedSize/) (с типом `i`) — это миниатюра предельно низкого разрешения, встроенная прямо в объекты с адресом медиафайла.  
Её следует показывать пользователю в превью сообщений чата, а также пока через медийные DC ещё скачивается [photoSize](/constructor/photoSize/) наиболее подходящего размера, [как описано выше](#downloading-files).

Упрощённые данные поля `bytes` следует развернуть в полноценный JPG так, как показано [здесь »](https://github.com/desktop-app/lib_ui/blob/742640cb626f05350d6dd73b043bbf470daff5ec/ui/image/image_prepare.cpp#L1395).

#### Векторные миниатюры

```
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;
```

К сообщениям с [анимированными](/api/stickers/#animated-stickers), [видео-](/api/stickers/#video-stickers) и [статичными](/api/stickers/#static-stickers) стикерами может прилагаться сжатый svg (< 300 байт), позволяющий показать контур стикера до того, как будет получен сам стикер. Контуры стикеров передаются в миниатюре [photoPathSize](/constructor/photoPathSize/) с типом `j`.

Такая векторная миниатюра представляет собой [контур SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths), закодированный особым образом ради экономии места.  
Этот контур повторяет очертания анимированного стикера, и его следует показывать пользователю, пока скачивается сам стикер.

Данные разворачиваются по следующему алгоритму:

```
encoded := photoPathSize.bytes

lookup := "AACAAAAHAAALMAAAQASTAVAAAZaacaaaahaaalmaaaqastava.az0123456789-,"

path := "M"

len := strlen(encoded)
for (i = 0; i < len; i++) {
  num := ord(encoded[i])
  if (num >= 128 + 64) {
    path += lookup[num - 128 - 64]
  } else {
    if (num >= 128) {
      path += ','
    } else if (num >= 64) {
      path += '-'
    }
    path += itoa(num & 63)
  }
}
path += "z"
```

В `path` окажется готовый контур SVG, который можно напрямую подставить в атрибут `d` [элемента svg <path>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path):

```
<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
   viewBox="0 0 512 512" xml:space="preserve">
<path d="{$path}"/>
</svg>
```

#### Значения `videoSize.type`

```
videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;
```

Конструктор [videoSize](/constructor/videoSize/) обычно применяется для [анимированных фотографий профиля](#animated-profile-pictures), видеопревью и [premium-эффектов стикеров »](/api/stickers/#premium-animated-sticker-effects).

-   `p` — небольшое превью анимированной фотографии профиля в формате MPEG4.
-   `u` — анимированная фотография профиля в формате MPEG4.
-   `v` — видеопревью в формате MPEG4.
-   `f` — [premium-эффект стикера »](/api/stickers/#premium-animated-sticker-effects) в формате [TGS »](/api/stickers/#animated-stickers).

### Скачивание веб-файлов

[@term:inline query] Удалённые HTTP-файлы, отправляемые инлайн-ботами [в ответ на инлайн-запросы](/type/BotInlineResult/) (`inline query` — запрос, который пользователь вводит прямо в поле ввода через упоминание бота) и появляющиеся в других местах, представлены конструкторами [WebDocument](/type/WebDocument/). При пересылке таких удалённых HTTP-файлов их следует отправлять с помощью [внешних конструкторов InputMedia](/type/InputMedia/). Клиент может скачать удалённый HTTP-файл напрямую, только если тот содержится в конструкторе [webDocumentNoProxy](/constructor/webDocumentNoProxy/): в этом случае файл считается безопасным для скачивания (так бывает с HTTPS-файлами с некоторых доверенных доменов).

Однако если удалённый файл содержится в [webDocument](/constructor/webDocument/), то во избежание утечки конфиденциальных сведений его необходимо скачивать через серверы Telegram. Делается это примерно так же, как и для [обычных файлов](#downloading-files), с той разницей, что вместо него обязательно применяется [upload.getWebFile](/method/upload.getWebFile/).

Метод [upload.getWebFile](/method/upload.getWebFile/) применяется также для создания изображений с превью карт и для скачивания обложек музыкальных файлов — как описано ниже.

**Примечание**: запрос [upload.getWebFile](/method/upload.getWebFile/) обязан отправляться в тот DC, который указан в [поле конфигурации MTProto](/api/config/#mtproto-configuration) `webfile_dc_id`.

```
upload.webFile#21e753bc size:int mime_type:string file_type:storage.FileType mtime:int bytes:bytes = upload.WebFile;

storage.fileUnknown#aa963b05 = storage.FileType;
storage.fileJpeg#007efe0e = storage.FileType;
storage.fileGif#cae1aadf = storage.FileType;
storage.filePng#0a4f63c0 = storage.FileType;
storage.fileMp3#528a0677 = storage.FileType;
storage.fileMov#4b09ebbc = storage.FileType;
storage.filePartial#40bc6f52 = storage.FileType;
storage.fileMp4#b3cea0e4 = storage.FileType;
storage.fileWebp#1081464c = storage.FileType;

 ---functions---

upload.getWebFile#24e6818d location:InputWebFileLocation offset:int limit:int = upload.WebFile;
```

Конструктор [InputWebFileLocation](/type/InputWebFileLocation/) формируется следующим образом.

```
inputWebFileLocation#c239d686 url:string access_hash:long = InputWebFileLocation;
inputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;
inputWebFileAudioAlbumThumbLocation#f46fe924 flags:# small:flags.2?true document:flags.0?InputDocument title:flags.1?string performer:flags.1?string = InputWebFileLocation;

webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;

inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;

geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
```

-   [inputWebFileLocation](/constructor/inputWebFileLocation/) формируется просто: берутся поля `url` и `access_hash` конструктора [webDocument](/constructor/webDocument/).
-   [inputWebFileGeoPointLocation](/constructor/inputWebFileGeoPointLocation/) применяется, чтобы скачать сгенерированное сервером изображение с превью карты для [geoPoint](/constructor/geoPoint/).
    -   `geo_point` формируется из параметров `lat`, `long`, `accuracy_radius` конструктора [geoPoint](/constructor/geoPoint/)
    -   `access_hash` — это access hash конструктора [geoPoint](/constructor/geoPoint/)
    -   `w` — ширина карты в пикселях до применения масштаба; 16–1024
    -   `h` — высота карты в пикселях до применения масштаба; 16–1024
    -   `zoom` — уровень приближения карты; 13–20
    -   `scale` — масштаб карты; 1–3
-   [inputWebFileAudioAlbumThumbLocation](/constructor/inputWebFileAudioAlbumThumbLocation/) применяется, чтобы скачать обложку альбома в разрешении `600x600` для любого музыкального файла, в который не встроено изображение обложки. Учтите, что поле `document` с музыкальным файлом НЕ должно передаваться в секретных чатах: вместо него следует передавать извлечённые локально поля `title` и `performer`.  
    В обычных чатах всегда следует передавать `document`, а не `title` и `performer`, поскольку для него действуют более мягкие ограничения по флуду.
    -   `small` — если задано, вместо обложки скачивается миниатюра `100x100`.
    -   `document` содержит музыкальный файл: НЕ должно передаваться в секретных чатах.
    -   `title` содержит название композиции: следует передавать только в секретных чатах.
    -   `performer` содержит исполнителя композиции: следует передавать только в секретных чатах.

### Общие соображения

```
dcOption#18b7a10d flags:# ipv6:flags.0?true media_only:flags.1?true tcpo_only:flags.2?true cdn:flags.3?true static:flags.4?true this_port_only:flags.5?true id:int ip_address:string port:int secret:flags.10?bytes = DcOption;
```

[@term:session] Объёмные запросы ([upload.getFile](/method/upload.getFile/), [upload.saveFilePart](/method/upload.saveFilePart/), [upload.getWebFile](/method/upload.getWebFile/)) рекомендуется обрабатывать в одной или нескольких отдельных сессиях (`session` — независимый поток сообщений в рамках одного авторизационного ключа) и через отдельные соединения, в которых не должны выполняться никакие другие методы, кроме перечисленных.  
При таком подходе передача данных будет меньше мешать [получению обновлений](/api/updates/) и вызовам остальных методов.  
Если доступен медиа-DC с нужным идентификатором DC (у [dcOption](/constructor/dcOption/) будет установлен флаг `media`), запросы обязаны отправляться именно в этот DC.

[@term:auth_key_id] Такие выделенные сессии для передачи файлов — один из двух сценариев использования [нескольких параллельных сессий поверх одного авторизационного ключа »](/api/datacenter/#parallel-sessions): каждая из них — это всего лишь дополнительный [session\_id](/mtproto/description/#session) поверх того же `auth_key_id` (идентификатора авторизационного ключа), она никогда не переносит [обновления](/api/updates/#subscribing-to-updates) и может быть открыта без повторной авторизации. Второй сценарий — запуск нескольких параллельных сессий на **основном** соединении для увеличения пропускной способности RPC — управляется сервером через поле `tmp_sessions`, см. [параллельные сессии »](/api/datacenter/#parallel-sessions).

### Связанные статьи

#### [Работа со ссылками на файлы](/api/file-references/)

Как обрабатывать ссылки на файлы.
