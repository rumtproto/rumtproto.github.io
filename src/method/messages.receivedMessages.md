---
title: "messages.receivedMessages (метод)"
original: "https://core.telegram.org/method/messages.receivedMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.receivedMessages

*Метод из схемы TL.*

> Confirms receipt of messages by a client, cancels PUSH-notification sending.

## Определение TL

```
---functions---
messages.receivedMessages#5a954c0 max_id:int = Vector<ReceivedNotifyMessage>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| max_id | [int](/type/int/) | Maximum message ID available in a client. |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[ReceivedNotifyMessage](/type/ReceivedNotifyMessage/)\>

## Only users can use this method
