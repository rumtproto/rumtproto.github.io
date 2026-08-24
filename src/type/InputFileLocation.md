---
title: "InputFileLocation"
original: "https://core.telegram.org/type/InputFileLocation"
section: ref
kind: type
description: "Определяет расположение файла для загрузки."
layout: layout.njk
---

# InputFileLocation

Определяет расположение файла для загрузки.

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
inputGroupCallStream#598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputFileLocation">inputFileLocation</a></td><td>УСТАРЕЛО: расположение фотографии</td></tr><tr><td><a href="/constructor/inputEncryptedFileLocation">inputEncryptedFileLocation</a></td><td>Расположение зашифрованного файла из секретного чата.</td></tr><tr><td><a href="/constructor/inputDocumentFileLocation">inputDocumentFileLocation</a></td><td>Местоположение документа (видео, голосовое сообщение, аудио — в общем, любой тип, кроме фотографии)</td></tr><tr><td><a href="/constructor/inputSecureFileLocation">inputSecureFileLocation</a></td><td>Расположение зашифрованного файла telegram <a href="/passport">passport</a>.</td></tr><tr><td><a href="/constructor/inputTakeoutFileLocation">inputTakeoutFileLocation</a></td><td>Используется для скачивания JSON-файла, который будет содержать все персональные данные, относящиеся к возможностям, для которых пока нет специализированного <a href="/api/takeout">метода выгрузки</a>; подробнее об API выгрузки данных см. <a href="/api/takeout">здесь »</a>.</td></tr><tr><td><a href="/constructor/inputPhotoFileLocation">inputPhotoFileLocation</a></td><td>Этот объект используется для скачивания фотографии методом <a href="/method/upload.getFile">upload.getFile</a></td></tr><tr><td><a href="/constructor/inputPhotoLegacyFileLocation">inputPhotoLegacyFileLocation</a></td><td>УСТАРЕЛО: расположение файла фотографии в старом формате</td></tr><tr><td><a href="/constructor/inputPeerPhotoFileLocation">inputPeerPhotoFileLocation</a></td><td>Расположение фотографии профиля канала, группы, супергруппы или пользователя</td></tr><tr><td><a href="/constructor/inputStickerSetThumb">inputStickerSetThumb</a></td><td>Расположение миниатюры набора стикеров (см. <a href="/api/files">файлы</a>)</td></tr><tr><td><a href="/constructor/inputGroupCallStream">inputGroupCallStream</a></td><td>Определяет фрагмент медиапотока видеочата, трансляции или прямой истории в режиме RTMP, см. <a href="/api/group-calls#downloading-media-chunks">воспроизведение трансляции RTMP »</a>.</td></tr></tbody></table>
