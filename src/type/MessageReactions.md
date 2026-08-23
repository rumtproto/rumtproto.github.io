---
title: "MessageReactions (тип)"
original: "https://core.telegram.org/type/MessageReactions"
section: ref
kind: type
layout: layout.njk
---

# MessageReactions

*Тип из схемы TL.*

> [Message reactions »](https://core.telegram.org/api/reactions)

## Определение TL

```
messageReactions#a339f0b flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> top_reactors:flags.4?Vector<MessageReactor> = MessageReactions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messageReactions](/constructor/messageReactions/) | [Message reactions »](https://core.telegram.org/api/reactions) |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
