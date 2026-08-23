---
title: "poll (конструктор)"
original: "https://core.telegram.org/constructor/poll"
section: ref
kind: constructor
layout: layout.njk
---

# poll

*Конструктор из схемы TL.*

> Poll

## Определение TL

```
poll#58747131 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int = Poll;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | ID of the poll |
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| closed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the poll is closed and doesn't accept any more answers |
| public_voters | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether cast votes are publicly visible to all users (non-anonymous poll) |
| multiple_choice | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether multiple options can be chosen as answer |
| quiz | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is a quiz (with wrong and correct answers, results shown in the return type). When creating a poll, the correct answers are specified in [inputMediaPoll](/constructor/inputMediaPoll/).correct_answers. |
| open_answers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether users can add new answer options after the poll is created, see [open-answer polls »](https://core.telegram.org/api/poll#open-answer-polls) |
| revoting_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, users cannot change their vote after casting it |
| shuffle_answers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether answer options are displayed in a randomized order to each user |
| hide_results_until_close | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether vote results are hidden from all participants until the poll is closed |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Whether the current user created this poll |
| subscribers_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether only subscribers can vote: a user may vote only if they are currently a member of the channel/supergroup and joined it at least 24 hours before the poll was posted, see [subscriber-only polls »](https://core.telegram.org/api/poll#subscriber-only-polls). |
| question | [TextWithEntities](/type/TextWithEntities/) | The question of the poll (only [Premium](https://core.telegram.org/api/premium) users can use [custom emoji entities](https://core.telegram.org/api/custom-emoji) here). |
| answers | [Vector](https://core.telegram.org/type/Vector%20t)<[PollAnswer](/type/PollAnswer/)> | The possible answers (2-[poll_answers_max](https://core.telegram.org/api/config#poll-answers-max)), vote using [messages.sendVote](/method/messages.sendVote/). |
| close_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Amount of time in seconds the poll will be active after creation, up to [poll_close_period_max »](https://core.telegram.org/api/config#poll-close-period-max) seconds. Can't be used together with close_date. |
| close_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Point in time (Unix timestamp) when the poll will be automatically closed. Up to [poll_close_period_max »](https://core.telegram.org/api/config#poll-close-period-max) seconds in the future; can't be used together with close_period. |
| countries_iso2 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | If set, only users from the specified ISO 3166-1 alpha-2 country codes may vote, see [country-restricted polls »](https://core.telegram.org/api/poll#country-restricted-polls); a user may vote only if the [phone_country_iso2 »](https://core.telegram.org/api/config#phone-country-iso2) configuration parameter is contained in this list. |
| hash | [long](/type/long/) | Hash for use with [messages.getPollResults](/method/messages.getPollResults/) |

## Тип

[Poll](/type/Poll/)

## Related pages

#### [inputMediaPoll](/constructor/inputMediaPoll/)

A poll

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [messages.sendVote](/method/messages.sendVote/)

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](https://core.telegram.org/api/poll#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](https://core.telegram.org/api/poll#country-restricted-polls) and the user's [`phone_country_iso2` »](https://core.telegram.org/api/config#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](https://core.telegram.org/api/poll#vote-restrictions) for the full list of conditions.

#### [messages.getPollResults](/method/messages.getPollResults/)

Get poll results
