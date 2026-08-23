---
title: "account.uploadRingtone (метод)"
original: "https://core.telegram.org/method/account.uploadRingtone"
section: ref
kind: method
layout: layout.njk
---

# account.uploadRingtone

*Метод из схемы TL.*

> Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.

## Определение TL

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
account.uploadRingtone#831a83a2 file:InputFile file_name:string mime_type:string = Document;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| file | [InputFile](/type/InputFile/) | Notification sound |
| file_name | [string](/type/string/) | File name |
| mime_type | [string](/type/string/) | MIME type of file |

## Результат

[Document](/type/Document/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | RINGTONE_MIME_INVALID | The MIME type for the ringtone is invalid. |

## Related pages

#### [account.saveRingtone](/method/account.saveRingtone/)

Save or remove saved notification sound.

If the notification sound is already in MP3 format, [account.savedRingtone](/constructor/account.savedRingtone/) will be returned.  
Otherwise, it will be automatically converted and a [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) will be returned, containing a new [document](/constructor/document/) object that should be used to refer to the ringtone from now on (ie when deleting it using the `unsave` parameter, or when downloading it).
