---
title: "channelParticipantSelf (конструктор)"
original: "https://core.telegram.org/constructor/channelParticipantSelf"
section: ref
kind: constructor
layout: layout.njk
---

# channelParticipantSelf

*Конструктор из схемы TL.*

> Myself

## Определение TL

```
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| via_request | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether I joined upon specific approval of an admin |
| user_id | [long](/type/long/) | User ID |
| inviter_id | [long](/type/long/) | User that invited me to the channel/supergroup |
| date | [int](/type/int/) | When did I join the channel/supergroup |
| subscription_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | If set, contains the expiration date of the current [Telegram Star subscription period »](https://core.telegram.org/api/stars#star-subscriptions) for the specified participant. |
| rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The participant's [tag »](https://core.telegram.org/api/rank). |

## Тип

[ChannelParticipant](/type/ChannelParticipant/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
