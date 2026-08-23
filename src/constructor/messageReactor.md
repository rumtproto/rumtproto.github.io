---
title: "messageReactor (конструктор)"
original: "https://core.telegram.org/constructor/messageReactor"
section: ref
kind: constructor
layout: layout.njk
---

# messageReactor

*Конструктор из схемы TL.*

> Info about a user in the [paid Star reactions leaderboard](https://core.telegram.org/api/reactions#paid-reactions) for a message.

## Определение TL

```
messageReactor#4ba3a95a flags:# top:flags.0?true my:flags.1?true anonymous:flags.2?true peer_id:flags.3?Peer count:int = MessageReactor;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| top | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the reactor is one of the most active reactors; may be unset if the reactor is the current user. |
| my | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, this reactor is the current user. |
| anonymous | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, the reactor is anonymous. |
| peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Peer](/type/Peer/) | Identifier of the peer that reacted: may be unset for anonymous reactors different from the current user (i.e. if the current user sent an anonymous reaction anonymous will be set but this field will also be set). |
| count | [int](/type/int/) | The number of sent Telegram Stars. |

## Тип

[MessageReactor](/type/MessageReactor/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
