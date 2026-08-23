---
title: "updateNotifySettings (конструктор)"
original: "https://core.telegram.org/constructor/updateNotifySettings"
section: ref
kind: constructor
layout: layout.njk
---

# updateNotifySettings

*Конструктор из схемы TL.*

> Changes in notification settings.

## Определение TL

```
updateNotifySettings#bec268ef peer:NotifyPeer notify_settings:PeerNotifySettings = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [NotifyPeer](/type/NotifyPeer/) | Notification source |
| notify_settings | [PeerNotifySettings](/type/PeerNotifySettings/) | New notification settings |

## Тип

[Update](/type/Update/)
