---
title: "notificationSoundRingtone (конструктор)"
original: "https://core.telegram.org/constructor/notificationSoundRingtone"
section: ref
kind: constructor
layout: layout.njk
---

# notificationSoundRingtone

*Конструктор из схемы TL.*

> A specific previously uploaded notification sound should be used

## Определение TL

```
notificationSoundRingtone#ff6c8049 id:long = NotificationSound;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Document ID of notification sound uploaded using [account.uploadRingtone](/method/account.uploadRingtone/) |

## Тип

[NotificationSound](/type/NotificationSound/)

## Related pages

#### [account.uploadRingtone](/method/account.uploadRingtone/)

Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.
