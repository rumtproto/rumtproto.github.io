---
title: "peerNotifySettings"
original: "https://core.telegram.org/constructor/peerNotifySettings"
section: ref
kind: constructor
description: "Настройки уведомлений."
layout: layout.njk
---

# peerNotifySettings

Настройки уведомлений.

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>show_previews</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>(Троичное значение) Если установлено, указывает, показывать ли предпросмотр сообщений в уведомлениях; иначе следует использовать поведение по умолчанию.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>(Троичное значение) Если установлено, указывает, отключить или включить уведомления от пира; иначе следует использовать поведение по умолчанию.</td></tr><tr><td><strong>mute_until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Отключить все уведомления до этой даты</td></tr><tr><td><strong>ios_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/NotificationSound">NotificationSound</a></td><td>Звук уведомления для официального приложения для iOS</td></tr><tr><td><strong>android_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/NotificationSound">NotificationSound</a></td><td>Звук уведомления для официального приложения для Android</td></tr><tr><td><strong>other_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/NotificationSound">NotificationSound</a></td><td>Звук уведомления для прочих приложений</td></tr><tr><td><strong>stories_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Bool">Bool</a></td><td>Следует ли отключить уведомления об историях.</td></tr><tr><td><strong>stories_hide_sender</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Bool">Bool</a></td><td>Следует ли показывать имя отправителя в уведомлениях об историях.</td></tr><tr><td><strong>stories_ios_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/NotificationSound">NotificationSound</a></td><td>Звук уведомлений об историях в официальном приложении для iOS</td></tr><tr><td><strong>stories_android_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/NotificationSound">NotificationSound</a></td><td>Звук уведомлений об историях в официальном приложении для Android</td></tr><tr><td><strong>stories_other_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/NotificationSound">NotificationSound</a></td><td>Звук уведомлений об историях в остальных приложениях</td></tr></tbody></table>

### Тип

[PeerNotifySettings](/type/PeerNotifySettings/)

### Флаги событий (events\_mask)

<table class="table"><thead><tr><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td><code>0x00000001</code></td><td>Уведомление об обновлении фотографии профиля</td></tr></tbody></table>
