---
title: "notificationSoundRingtone"
original: "https://core.telegram.org/constructor/notificationSoundRingtone"
section: ref
kind: constructor
description: "Следует использовать конкретный ранее загруженный звук уведомления"
layout: layout.njk
---

# notificationSoundRingtone

Следует использовать конкретный ранее загруженный звук уведомления

```
notificationSoundRingtone#ff6c8049 id:long = NotificationSound;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор документа звука уведомления, загруженного методом <a href="/method/account.uploadRingtone">account.uploadRingtone</a></td></tr></tbody></table>

### Тип

[NotificationSound](/type/NotificationSound/)

### Связанные страницы

#### [account.uploadRingtone](/method/account.uploadRingtone/)

Загрузить звук уведомления; для его преобразования и добавления в список сохранённых звуков уведомлений используйте [account.saveRingtone](/method/account.saveRingtone/).
