---
title: "account.SavedRingtone (тип)"
original: "https://core.telegram.org/type/account.SavedRingtone"
section: ref
kind: type
layout: layout.njk
---

# account.SavedRingtone

*Тип из схемы TL.*

> Contains information about a saved notification sound

## Определение TL

```
account.savedRingtone#b7263f6d = account.SavedRingtone;
account.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;

---functions---

account.saveRingtone#3dea5b03 id:InputDocument unsave:Bool = account.SavedRingtone;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.savedRingtone](/constructor/account.savedRingtone/) | The notification sound was already in MP3 format and was saved without any modification |
| [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) | The notification sound was not in MP3 format and was successfully converted and saved, use the returned [Document](/type/Document/) to refer to the notification sound from now on |

## Методы

| Method | Описание |
|---|---|
| [account.saveRingtone](/method/account.saveRingtone/) | Save or remove saved notification sound. If the notification sound is already in MP3 format, [account.savedRingtone](/constructor/account.savedRingtone/) will be returned. Otherwise, it will be automatically converted and a [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) will be returned, containing a new [document](/constructor/document/) object that should be used to refer to the ringtone from now on (ie when deleting it using the unsave parameter, or when downloading it). |
