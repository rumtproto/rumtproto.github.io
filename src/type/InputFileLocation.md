---
title: "InputFileLocation (тип)"
original: "https://core.telegram.org/type/InputFileLocation"
section: ref
kind: type
layout: layout.njk
---

# InputFileLocation

*Тип из схемы TL.*

> Defines the location of a file for download.

## Определение TL

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

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputFileLocation](/constructor/inputFileLocation/) | DEPRECATED location of a photo |
| [inputEncryptedFileLocation](/constructor/inputEncryptedFileLocation/) | Location of encrypted secret chat file. |
| [inputDocumentFileLocation](/constructor/inputDocumentFileLocation/) | Document location (video, voice, audio, basically every type except photo) |
| [inputSecureFileLocation](/constructor/inputSecureFileLocation/) | Location of encrypted telegram [passport](https://core.telegram.org/passport) file. |
| [inputTakeoutFileLocation](/constructor/inputTakeoutFileLocation/) | Used to download a JSON file that will contain all personal data related to features that do not have a specialized [takeout method](https://core.telegram.org/api/takeout) yet, see [here »](https://core.telegram.org/api/takeout) for more info on the takeout API. |
| [inputPhotoFileLocation](/constructor/inputPhotoFileLocation/) | Use this object to download a photo with [upload.getFile](/method/upload.getFile/) method |
| [inputPhotoLegacyFileLocation](/constructor/inputPhotoLegacyFileLocation/) | DEPRECATED legacy photo file location |
| [inputPeerPhotoFileLocation](/constructor/inputPeerPhotoFileLocation/) | Location of profile photo of channel/group/supergroup/user |
| [inputStickerSetThumb](/constructor/inputStickerSetThumb/) | Location of stickerset thumbnail (see [files](/api/files/)) |
| [inputGroupCallStream](/constructor/inputGroupCallStream/) | Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#downloading-media-chunks). |
