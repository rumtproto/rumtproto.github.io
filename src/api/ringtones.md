---
title: "Звуки уведомлений"
original: "https://core.telegram.org/api/ringtones"
section: api
description: "API позволяет загружать и синхронизировать звуки уведомлений, привязанные к конкретному чату."
layout: layout.njk
---

# Звуки уведомлений

API позволяет загружать и синхронизировать звуки уведомлений, привязанные к конкретному чату.

### Загрузка звуков уведомлений

Схема:

```
account.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;

updateSavedRingtones#74d8be99 = Update;

account.savedRingtone#b7263f6d = account.SavedRingtone;
account.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;

---functions---

account.uploadRingtone#831a83a2 file:InputFile file_name:string mime_type:string = Document;
account.saveRingtone#3dea5b03 id:InputDocument unsave:Bool = account.SavedRingtone;
account.getSavedRingtones#e1902288 hash:long = account.SavedRingtones;
```

Файл со звуком уведомления можно загрузить методом [account.uploadRingtone](/method/account.uploadRingtone/).  
После загрузки полученный документ следует передать в [account.saveRingtone](/method/account.saveRingtone/), чтобы сохранить звук уведомления; метод вернёт простой [account.savedRingtone](/constructor/account.savedRingtone/).

Поддерживаемые форматы:

-   MP3
-   OGG OPUS

В [account.saveRingtone](/method/account.saveRingtone/) можно передать и уже существующее голосовое сообщение.  
При передаче существующего голосового сообщения в [account.saveRingtone](/method/account.saveRingtone/) возвращается конструктор [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) с новым документом, который следует использовать **вместо** документа исходного голосового сообщения при [удалении](#removing-notification-sounds) или [выборе](#setting-notification-sounds) звуков уведомлений.

В [конфигурации клиента](/api/config/#client-configuration) заданы следующие ограничения на звуки уведомлений:

-   [ringtone\_duration\_max](/api/config/#ringtone-duration-max) — максимальная длительность загружаемых звуков в секундах
-   [ringtone\_saved\_count\_max](/api/config/#ringtone-saved-count-max) — максимальное число сохраняемых звуков
-   [ringtone\_size\_max](/api/config/#ringtone-size-max) — максимальный размер загружаемых звуков в байтах (после конвертации)

### Удаление звуков уведомлений

Схема:

```
account.savedRingtone#b7263f6d = account.SavedRingtone;

---functions---

account.saveRingtone#3dea5b03 id:InputDocument unsave:Bool = account.SavedRingtone;
```

Чтобы удалить ранее загруженный звук уведомления, передайте `true` в поле `unsave` метода [account.saveRingtone](/method/account.saveRingtone/).

### Получение звуков уведомлений

Схема:

```
updateSavedRingtones#74d8be99 = Update;

account.savedRingtonesNotModified#fbf6e8b1 = account.SavedRingtones;
account.savedRingtones#c1e92cc5 hash:long ringtones:Vector<Document> = account.SavedRingtones;

---functions---

account.getSavedRingtones#e1902288 hash:long = account.SavedRingtones;
```

Получить все сохранённые звуки уведомлений можно методом [account.getSavedRingtones](/method/account.getSavedRingtones/).  
Если пользователь изменит список с других клиентов, клиент получит обновление [updateSavedRingtones](/constructor/updateSavedRingtones/), в ответ на которое следует вызвать [account.getSavedRingtones](/method/account.getSavedRingtones/).

### Выбор звуков уведомлений

Схема:

```
notificationSoundDefault#97e8bebe = NotificationSound;
notificationSoundNone#6f0c34df = NotificationSound;
notificationSoundLocal#830b9ae4 title:string data:string = NotificationSound;
notificationSoundRingtone#ff6c8049 id:long = NotificationSound;

inputNotifyPeer#b8bc5b0c peer:InputPeer = InputNotifyPeer;
inputNotifyUsers#193b4417 = InputNotifyPeer;
inputNotifyChats#4a95e84e = InputNotifyPeer;
inputNotifyBroadcasts#b1db7c7e = InputNotifyPeer;

inputPeerNotifySettings#cacb6ae2 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_sound:flags.8?NotificationSound = InputPeerNotifySettings;

---functions---

account.updateNotifySettings#84be5b93 peer:InputNotifyPeer settings:InputPeerNotifySettings = Bool;
```

[@term:peer] Чтобы задать звук, проигрываемый при получении сообщений от конкретного пира (`peer` — собеседник, чат или канал) либо от целой категории пиров, используйте [account.updateNotifySettings](/method/account.updateNotifySettings/), заполнив поле `ios_sound`, `android_sound` или `other_sound` — в зависимости от платформы, на которой должен воспроизводиться звук.

[@note] Названия `ios_sound`, `android_sound` и `other_sound` остались в оригинале от более ранней версии схемы: в приведённом выше конструкторе `inputPeerNotifySettings` их больше нет, а звук задаётся единственным полем `sound` типа `NotificationSound`.

Эти поля заполняются следующими конструкторами:

-   [notificationSoundDefault](/constructor/notificationSoundDefault/) — следует проигрывать звук уведомления по умолчанию
-   [notificationSoundNone](/constructor/notificationSoundNone/) — звук уведомления проигрывать не следует
-   [notificationSoundRingtone](/constructor/notificationSoundRingtone/) — следует проигрывать ранее [загруженный](#uploading-notification-sounds) звук уведомления, заданный идентификатором `id` загруженного или сконвертированного документа.
-   [notificationSoundLocal](/constructor/notificationSoundLocal/) — следует проигрывать локальный звук уведомления (возможно, предоставленный операционной системой), заданный специфичной для клиента полезной нагрузкой `data`.
