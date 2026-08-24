---
title: "NotificationSound"
original: "https://core.telegram.org/type/NotificationSound"
section: ref
kind: type
description: "Представляет звук уведомления"
layout: layout.njk
---

# NotificationSound

Представляет звук уведомления

```
notificationSoundDefault#97e8bebe = NotificationSound;
notificationSoundNone#6f0c34df = NotificationSound;
notificationSoundLocal#830b9ae4 title:string data:string = NotificationSound;
notificationSoundRingtone#ff6c8049 id:long = NotificationSound;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/notificationSoundDefault">notificationSoundDefault</a></td><td>Указывает, что следует использовать звук уведомления по умолчанию</td></tr><tr><td><a href="/constructor/notificationSoundNone">notificationSoundNone</a></td><td>Звук уведомления использовать не следует</td></tr><tr><td><a href="/constructor/notificationSoundLocal">notificationSoundLocal</a></td><td>Указывает, что следует использовать определённый локальный звук уведомления</td></tr><tr><td><a href="/constructor/notificationSoundRingtone">notificationSoundRingtone</a></td><td>Следует использовать конкретный ранее загруженный звук уведомления</td></tr></tbody></table>
