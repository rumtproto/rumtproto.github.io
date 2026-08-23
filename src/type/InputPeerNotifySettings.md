---
title: "InputPeerNotifySettings (тип)"
original: "https://core.telegram.org/type/InputPeerNotifySettings"
section: ref
kind: type
layout: layout.njk
---

# InputPeerNotifySettings

*Тип из схемы TL.*

> Notifications settings.

## Определение TL

```
inputPeerNotifySettings#cacb6ae2 flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int sound:flags.3?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_sound:flags.8?NotificationSound = InputPeerNotifySettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputPeerNotifySettings](/constructor/inputPeerNotifySettings/) | Notification settings. |
