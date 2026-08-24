---
title: "PeerNotifySettings"
original: "https://core.telegram.org/type/PeerNotifySettings"
section: ref
kind: type
description: "Настройки уведомлений."
layout: layout.njk
---

# PeerNotifySettings

Настройки уведомлений.

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;

---functions---

account.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/peerNotifySettings">peerNotifySettings</a></td><td>Настройки уведомлений.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getNotifySettings">account.getNotifySettings</a></td><td>Возвращает текущие настройки уведомлений для заданного пользователя или группы либо для всех пользователей или всех групп.</td></tr></tbody></table>
