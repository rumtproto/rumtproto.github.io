---
title: "receivedNotifyMessage (конструктор)"
original: "https://core.telegram.org/constructor/receivedNotifyMessage"
section: ref
kind: constructor
layout: layout.njk
---

# receivedNotifyMessage

*Конструктор из схемы TL.*

> Message ID, for which PUSH-notifications were cancelled.

## Определение TL

```
receivedNotifyMessage#a384b779 id:int flags:int = ReceivedNotifyMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [int](/type/int/) | Message ID, for which PUSH-notifications were canceled |
| flags | [int](/type/int/) | Reserved for future use |

## Тип

[ReceivedNotifyMessage](/type/ReceivedNotifyMessage/)
