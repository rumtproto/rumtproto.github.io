---
title: "messages.reportEncryptedSpam (метод)"
original: "https://core.telegram.org/method/messages.reportEncryptedSpam"
section: ref
kind: method
layout: layout.njk
---

# messages.reportEncryptedSpam

*Метод из схемы TL.*

> Report a secret chat for spam

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportEncryptedSpam#4b0c8c0f peer:InputEncryptedChat = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputEncryptedChat](/type/InputEncryptedChat/) | The secret chat to report |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
