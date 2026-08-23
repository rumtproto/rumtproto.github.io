---
title: "pollResults (конструктор)"
original: "https://core.telegram.org/constructor/pollResults"
section: ref
kind: constructor
layout: layout.njk
---

# pollResults

*Конструктор из схемы TL.*

> Results of poll

## Определение TL

```
pollResults#7adf2420 flags:# min:flags.0?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> = PollResults;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| min | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Similar to [min](https://core.telegram.org/api/min) objects, used for poll constructors that are the same for all users so they don't have the option chosen by the current user (you can use [messages.getPollResults](/method/messages.getPollResults/) to get the full poll results). |
| has_unread_votes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether there are unread votes in this non-anonymous poll, see [polls »](https://core.telegram.org/api/poll#unread-poll-votes) |
| can_view_stats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether the current user can view detailed [poll statistics »](https://core.telegram.org/api/stats#poll-statistics) |
| results | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[PollAnswerVoters](/type/PollAnswerVoters/)> | Poll results |
| total_voters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Total number of people that voted in the poll |
| recent_voters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | IDs of the last users that recently voted in the poll |
| solution | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | Explanation of quiz solution |
| solution_entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text in quiz solution](https://core.telegram.org/api/entities) |
| solution_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[MessageMedia](/type/MessageMedia/) | Optional media attachment shown alongside the quiz solution explanation |

## Тип

[PollResults](/type/PollResults/)

## Related pages

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [messages.getPollResults](/method/messages.getPollResults/)

Get poll results

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
