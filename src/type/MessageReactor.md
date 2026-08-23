---
title: "MessageReactor (тип)"
original: "https://core.telegram.org/type/MessageReactor"
section: ref
kind: type
layout: layout.njk
---

# MessageReactor

*Тип из схемы TL.*

> Info about a user in the [paid Star reactions leaderboard](https://core.telegram.org/api/reactions#paid-reactions) for a message.

## Определение TL

```
messageReactor#4ba3a95a flags:# top:flags.0?true my:flags.1?true anonymous:flags.2?true peer_id:flags.3?Peer count:int = MessageReactor;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messageReactor](/constructor/messageReactor/) | Info about a user in the [paid Star reactions leaderboard](https://core.telegram.org/api/reactions#paid-reactions) for a message. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
