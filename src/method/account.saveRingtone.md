---
title: "account.saveRingtone"
original: "https://core.telegram.org/method/account.saveRingtone"
section: ref
kind: method
description: "Сохранить или удалить сохранённый звук уведомления."
layout: layout.njk
---

# account.saveRingtone

Сохранить или удалить сохранённый звук уведомления.

Если звук уведомления уже в формате MP3, будет возвращён [account.savedRingtone](/constructor/account.savedRingtone/).  
Иначе он будет автоматически преобразован и будет возвращён [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/), содержащий новый объект [document](/constructor/document/), который следует использовать для обращения к звуку впредь (то есть при его удалении с помощью параметра `unsave` или при скачивании).

```
account.savedRingtone#b7263f6d = account.SavedRingtone;
account.savedRingtoneConverted#1f307eb7 document:Document = account.SavedRingtone;
---functions---
account.saveRingtone#3dea5b03 id:InputDocument unsave:Bool = account.SavedRingtone;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Звук уведомления, загруженный с помощью <a href="/method/account.uploadRingtone">account.uploadRingtone</a></td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Добавить или удалить звук уведомления</td></tr></tbody></table>

### Результат

[account.SavedRingtone](/type/account.SavedRingtone/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>RINGTONE_INVALID</td><td>Указанный звук уведомления недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [account.uploadRingtone](/method/account.uploadRingtone/)

Загрузить звук уведомления; для его преобразования и добавления в список сохранённых звуков уведомлений используйте [account.saveRingtone](/method/account.saveRingtone/).

#### [account.savedRingtone](/constructor/account.savedRingtone/)

Звук уведомления уже был в формате MP3 и был сохранён без изменений

#### [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/)

Звук уведомления был не в формате MP3, он был успешно преобразован и сохранён; далее используйте возвращённый [Document](/type/Document/) для обращения к этому звуку уведомления

#### [document](/constructor/document/)

Документ
