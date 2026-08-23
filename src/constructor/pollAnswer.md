---
title: "pollAnswer (конструктор)"
original: "https://core.telegram.org/constructor/pollAnswer"
section: ref
kind: constructor
layout: layout.njk
---

# pollAnswer

*Конструктор из схемы TL.*

> A possible answer of a poll

## Определение TL

```
pollAnswer#ff16e2ca text:TextWithEntities option:bytes = PollAnswer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| text | [TextWithEntities](/type/TextWithEntities/) | Textual representation of the answer (only [Premium](https://core.telegram.org/api/premium) users can use [custom emoji entities](https://core.telegram.org/api/custom-emoji) here). |
| option | [bytes](/type/bytes/) | The param that has to be passed to [messages.sendVote](/method/messages.sendVote/). |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[MessageMedia](/type/MessageMedia/) | Optional media attachment displayed alongside the answer |
| added_by | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | The peer who added this answer; only set for answers dynamically added to an open-answer poll, see [polls »](https://core.telegram.org/api/poll#open-answer-polls) |
| date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | When this answer was added; only set for answers dynamically added to an open-answer poll |

## Тип

[PollAnswer](/type/PollAnswer/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [messages.sendVote](/method/messages.sendVote/)

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](https://core.telegram.org/api/poll#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](https://core.telegram.org/api/poll#country-restricted-polls) and the user's [`phone_country_iso2` »](https://core.telegram.org/api/config#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](https://core.telegram.org/api/poll#vote-restrictions) for the full list of conditions.

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
