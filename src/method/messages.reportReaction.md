---
title: "messages.reportReaction (метод)"
original: "https://core.telegram.org/method/messages.reportReaction"
section: ref
kind: method
layout: layout.njk
---

# messages.reportReaction

*Метод из схемы TL.*

> Report a [message reaction](https://core.telegram.org/api/reactions)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportReaction#3f64c076 peer:InputPeer id:int reaction_peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the message was sent |
| id | [int](/type/int/) | Message ID |
| reaction_peer | [InputPeer](/type/InputPeer/) | Peer that sent the reaction |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
