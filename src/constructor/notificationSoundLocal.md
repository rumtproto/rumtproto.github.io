---
title: "notificationSoundLocal (конструктор)"
original: "https://core.telegram.org/constructor/notificationSoundLocal"
section: ref
kind: constructor
layout: layout.njk
---

# notificationSoundLocal

*Конструктор из схемы TL.*

> Indicates a specific local notification sound should be used

## Определение TL

```
notificationSoundLocal#830b9ae4 title:string data:string = NotificationSound;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Notification sound title |
| data | [string](/type/string/) | Notification sound identifier (arbitrary data used by the client to identify a specific local notification sound) |

## Тип

[NotificationSound](/type/NotificationSound/)
