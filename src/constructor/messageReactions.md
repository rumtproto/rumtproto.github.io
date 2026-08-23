---
title: "messageReactions (конструктор)"
original: "https://core.telegram.org/constructor/messageReactions"
section: ref
kind: constructor
layout: layout.njk
---

# messageReactions

*Конструктор из схемы TL.*

> [Message reactions »](https://core.telegram.org/api/reactions)

## Определение TL

```
messageReactions#a339f0b flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> top_reactors:flags.4?Vector<MessageReactor> = MessageReactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| min | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Similar to [min](https://core.telegram.org/api/min) objects, used for [message reaction »](https://core.telegram.org/api/reactions) constructors that are the same for all users so they don't have the reactions sent by the current user (you can use [messages.getMessagesReactions](/method/messages.getMessagesReactions/) to get the full reaction info). |
| can_see_list | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/) can be used to see how each specific peer reacted to the message |
| reactions_as_tags | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set or if there are no reactions, all present and future reactions should be treated as [message tags, see here » for more info](https://core.telegram.org/api/saved-messages#tags). |
| results | [Vector](https://core.telegram.org/type/Vector%20t)<[ReactionCount](/type/ReactionCount/)> | Reactions |
| recent_reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessagePeerReaction](/type/MessagePeerReaction/)> | List of recent peers and their reactions |
| top_reactors | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageReactor](/type/MessageReactor/)> | [Paid Telegram Star reactions leaderboard »](https://core.telegram.org/api/reactions#paid-reactions) for this message. |

## Тип

[MessageReactions](/type/MessageReactions/)

## Related pages

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [messages.getMessagesReactions](/method/messages.getMessagesReactions/)

Get [message reactions »](https://core.telegram.org/api/reactions)

#### [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/)

Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
