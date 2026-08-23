---
title: "messages.receivedQueue (метод)"
original: "https://core.telegram.org/method/messages.receivedQueue"
section: ref
kind: method
layout: layout.njk
---

# messages.receivedQueue

*Метод из схемы TL.*

> Confirms receipt of messages in a secret chat by client, cancels push notifications.  
> The method returns a list of **random\_id**s of messages for which push notifications were cancelled.

## Определение TL

```
---functions---
messages.receivedQueue#55a5bb66 max_qts:int = Vector<long>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| max_qts | [int](/type/int/) | Maximum qts value available at the client |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MAX_QTS_INVALID | The specified max_qts is invalid. |
| 500 | MSG_WAIT_FAILED | A waiting call returned an error. |
