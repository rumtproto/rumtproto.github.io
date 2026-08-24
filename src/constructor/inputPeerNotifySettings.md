---
title: "inputPeerNotifySettings"
original: "https://core.telegram.org/constructor/inputPeerNotifySettings"
section: ref
kind: constructor
description: "Настройки уведомлений."
layout: layout.njk
---

# inputPeerNotifySettings

Настройки уведомлений.

```
inputPeerNotifySettings#cacb6ae2 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_sound:flags.8?NotificationSound = InputPeerNotifySettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>show_previews</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Следует ли отображать текст сообщения в уведомлении</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>Были ли отключены уведомления для пира?</td></tr><tr><td><strong>mute_until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Дата, до которой все уведомления должны быть отключены</td></tr><tr><td><strong>sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/NotificationSound">NotificationSound</a></td><td>Идентификатор аудиофайла, который следует воспроизводить для уведомлений.</td></tr><tr><td><strong>stories_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Bool">Bool</a></td><td>Следует ли отключить уведомления об историях.</td></tr><tr><td><strong>stories_hide_sender</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Bool">Bool</a></td><td>Следует ли показывать имя отправителя в уведомлениях об историях.</td></tr><tr><td><strong>stories_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/NotificationSound">NotificationSound</a></td><td>Идентификатор аудиофайла, который следует воспроизводить для уведомлений об историях.</td></tr></tbody></table>

### Тип

[InputPeerNotifySettings](/type/InputPeerNotifySettings/)
