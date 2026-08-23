---
title: "messages.discardEncryption (метод)"
original: "https://core.telegram.org/method/messages.discardEncryption"
section: ref
kind: method
layout: layout.njk
---

# messages.discardEncryption

*Метод из схемы TL.*

> Cancels a request for creation and/or delete info on secret chat.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.discardEncryption#f393aea0 flags:# delete_history:flags.0?true chat_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| delete_history | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to delete the entire chat history for the other user as well |
| chat_id | [int](/type/int/) | Secret chat ID |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_EMPTY | The provided chat ID is empty. |
| 400 | ENCRYPTION_ALREADY_ACCEPTED | Secret chat already accepted. |
| 400 | ENCRYPTION_ALREADY_DECLINED | The secret chat was already declined. |
| 400 | ENCRYPTION_ID_INVALID | The provided secret chat ID is invalid. |
