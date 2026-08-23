---
title: "messages.votesList (конструктор)"
original: "https://core.telegram.org/constructor/messages.votesList"
section: ref
kind: constructor
layout: layout.njk
---

# messages.votesList

*Конструктор из схемы TL.*

> How users voted in a poll

## Определение TL

```
messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of votes for all options (or only for the chosen option, if provided to [messages.getPollVotes](/method/messages.getPollVotes/)) |
| votes | [Vector](https://core.telegram.org/type/Vector%20t)<[MessagePeerVote](/type/MessagePeerVote/)> | Vote info for each user |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about users that voted in the poll |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset to use with the next [messages.getPollVotes](/method/messages.getPollVotes/) request, empty string if no more results are available. |

## Тип

[messages.VotesList](/type/messages.VotesList/)

## Related pages

#### [messages.getPollVotes](/method/messages.getPollVotes/)

Get poll results for non-anonymous polls
