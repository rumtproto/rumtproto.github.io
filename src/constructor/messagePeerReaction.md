---
title: "messagePeerReaction (конструктор)"
original: "https://core.telegram.org/constructor/messagePeerReaction"
section: ref
kind: constructor
layout: layout.njk
---

# messagePeerReaction

*Конструктор из схемы TL.*

> How a certain peer reacted to the message

## Определение TL

```
messagePeerReaction#8c79b63c flags:# big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:Peer date:int reaction:Reaction = MessagePeerReaction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| big | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the specified [message reaction »](https://core.telegram.org/api/reactions) should elicit a bigger and longer reaction |
| unread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the reaction wasn't yet marked as read by the current user |
| my | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Starting from layer 159, [messages.sendReaction](/method/messages.sendReaction/) will send reactions from the peer (user or channel) specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/). If set, this flag indicates that this reaction was sent by us, even if the peer doesn't point to the current account. |
| peer_id | [Peer](/type/Peer/) | Peer that reacted to the message |
| date | [int](/type/int/) | When was this reaction added |
| reaction | [Reaction](/type/Reaction/) | Reaction emoji |

## Тип

[MessagePeerReaction](/type/MessagePeerReaction/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [messages.sendReaction](/method/messages.sendReaction/)

React to message.

Starting from layer 159, the reaction will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group
