---
title: "updateMessageReactions (конструктор)"
original: "https://core.telegram.org/constructor/updateMessageReactions"
section: ref
kind: constructor
layout: layout.njk
---

# updateMessageReactions

*Конструктор из схемы TL.*

> New [message reactions »](https://core.telegram.org/api/reactions) are available

## Определение TL

```
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | Peer |
| msg_id | [int](/type/int/) | Message ID |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Forum topic ID](https://core.telegram.org/api/forum#forum-topics) |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | If set, the reactions are in the specified [monoforum topic »](https://core.telegram.org/api/monoforum). |
| reactions | [MessageReactions](/type/MessageReactions/) | Reactions |

## Тип

[Update](/type/Update/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
