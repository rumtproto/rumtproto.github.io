---
title: "messages.getPollVotes (метод)"
original: "https://core.telegram.org/method/messages.getPollVotes"
section: ref
kind: method
layout: layout.njk
---

# messages.getPollVotes

*Метод из схемы TL.*

> Get poll results for non-anonymous polls

## Определение TL

```
messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;
---functions---
messages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Chat where the poll was sent |
| id | [int](/type/int/) | Message ID |
| option | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | Get only results for the specified poll option |
| offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Offset for results, taken from the next_offset field of [messages.votesList](/constructor/messages.votesList/), initially an empty string. Note: if no more results are available, the method call will return an empty next_offset; thus, avoid providing the next_offset returned in [messages.votesList](/constructor/messages.votesList/) if it is empty, to avoid an infinite loop. |
| limit | [int](/type/int/) | Number of results to return |

## Результат

[messages.VotesList](/type/messages.VotesList/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | BROADCAST_FORBIDDEN | Channel poll voters and reactions cannot be fetched to prevent deanonymization. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 403 | POLL_VOTE_REQUIRED | Cast a vote in the poll before calling this method. |

## Related pages

#### [messages.votesList](/constructor/messages.votesList/)

How users voted in a poll
