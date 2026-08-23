---
title: "messages.readEncryptedHistory (метод)"
original: "https://core.telegram.org/method/messages.readEncryptedHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.readEncryptedHistory

*Метод из схемы TL.*

> Marks message history within a secret chat as read.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readEncryptedHistory#7f4b690a peer:InputEncryptedChat max_date:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | Secret chat ID |
| max_date | [int](/type/int/) | Maximum date value for received messages in history |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | MAX_DATE_INVALID | The specified maximum date is invalid. |
| 400 | MSG_WAIT_FAILED | A waiting call returned an error. |
