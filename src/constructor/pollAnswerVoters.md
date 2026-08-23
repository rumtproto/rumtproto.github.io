---
title: "pollAnswerVoters (конструктор)"
original: "https://core.telegram.org/constructor/pollAnswerVoters"
section: ref
kind: constructor
layout: layout.njk
---

# pollAnswerVoters

*Конструктор из схемы TL.*

> A poll answer, and how users voted on it

## Определение TL

```
pollAnswerVoters#3b6ddad2 flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:int = PollAnswerVoters;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| chosen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we have chosen this answer |
| correct | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | For quizzes, whether the option we have chosen is correct |
| option | [bytes](/type/bytes/) | The param that has to be passed to [messages.sendVote](/method/messages.sendVote/). |
| voters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | How many users voted for this option |
| recent_voters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Peers of the most recent voters for this option; mutually exclusive with voters |

## Тип

[PollAnswerVoters](/type/PollAnswerVoters/)

## Related pages

#### [messages.sendVote](/method/messages.sendVote/)

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](https://core.telegram.org/api/poll#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](https://core.telegram.org/api/poll#country-restricted-polls) and the user's [`phone_country_iso2` »](https://core.telegram.org/api/config#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](https://core.telegram.org/api/poll#vote-restrictions) for the full list of conditions.
