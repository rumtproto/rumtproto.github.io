---
title: "account.saveRingtone (метод)"
original: "https://core.telegram.org/method/account.saveRingtone"
section: ref
kind: method
layout: layout.njk
---

# account.saveRingtone

*Метод из схемы TL.*

> Save or remove saved notification sound.
> If the notification sound is already in MP3 format, [account.savedRingtone](/constructor/account.savedRingtone/) will be returned.  
> Otherwise, it will be automatically converted and a [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) will be returned, containing a new [document](/constructor/document/) object that should be used to refer to the ringtone from now on (ie when deleting it using the `unsave` parameter, or when downloading it).

## Определение TL

```
account.savedRingtone#b7263f6d = account.SavedRingtone;
account.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;
---functions---
account.saveRingtone#3dea5b03 id:InputDocument unsave:Bool = account.SavedRingtone;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputDocument](/type/InputDocument/) | Notification sound uploaded using [account.uploadRingtone](/method/account.uploadRingtone/) |
| unsave | [Bool](/type/Bool/) | Whether to add or delete the notification sound |

## Результат

[account.SavedRingtone](/type/account.SavedRingtone/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | RINGTONE_INVALID | The specified ringtone is invalid. |

## Related pages

#### [account.uploadRingtone](/method/account.uploadRingtone/)

Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.

#### [account.savedRingtone](/constructor/account.savedRingtone/)

The notification sound was already in MP3 format and was saved without any modification

#### [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/)

The notification sound was not in MP3 format and was successfully converted and saved, use the returned [Document](/type/Document/) to refer to the notification sound from now on

#### [document](/constructor/document/)

Document
