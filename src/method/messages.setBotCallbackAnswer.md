---
title: "messages.setBotCallbackAnswer (метод)"
original: "https://core.telegram.org/method/messages.setBotCallbackAnswer"
section: ref
kind: method
layout: layout.njk
---

# messages.setBotCallbackAnswer

*Метод из схемы TL.*

> Set the callback answer to a user button press (bots only)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setBotCallbackAnswer#d58f130a flags:# alert:flags.1?true query_id:long message:flags.0?string url:flags.2?string cache_time:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| alert | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to show the message as a popup instead of a toast notification |
| query_id | [long](/type/long/) | Query ID |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Popup to show |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | URL to open |
| cache_time | [int](/type/int/) | Cache validity |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_TOO_LONG | The provided message is too long. |
| 400 | QUERY_ID_INVALID | The query ID is invalid. |
| 400 | URL_INVALID | Invalid URL provided. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
