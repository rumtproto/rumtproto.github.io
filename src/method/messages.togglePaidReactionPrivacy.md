---
title: "messages.togglePaidReactionPrivacy (метод)"
original: "https://core.telegram.org/method/messages.togglePaidReactionPrivacy"
section: ref
kind: method
layout: layout.njk
---

# messages.togglePaidReactionPrivacy

*Метод из схемы TL.*

> Changes the privacy of already sent [paid reactions](https://core.telegram.org/api/reactions#paid-reactions) on a specific message.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.togglePaidReactionPrivacy#435885b5 peer:InputPeer msg_id:int private:PaidReactionPrivacy = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The channel |
| msg_id | [int](/type/int/) | The ID of the message to which we sent the paid reactions |
| private | [PaidReactionPrivacy](/type/PaidReactionPrivacy/) | If true, makes the current anonymous in the top sender leaderboard for this message; otherwise, does the opposite. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | REACTION_EMPTY | Empty reaction provided. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
