---
title: "messages.readDiscussion (метод)"
original: "https://core.telegram.org/method/messages.readDiscussion"
section: ref
kind: method
layout: layout.njk
---

# messages.readDiscussion

*Метод из схемы TL.*

> Mark a [thread](https://core.telegram.org/api/threads) as read

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readDiscussion#f731a9f4 peer:InputPeer msg_id:int read_max_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Group ID |
| msg_id | [int](/type/int/) | ID of message that started the thread |
| read_max_id | [int](/type/int/) | ID up to which thread messages were read |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
