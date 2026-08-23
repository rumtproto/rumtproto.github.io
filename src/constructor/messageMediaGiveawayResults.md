---
title: "messageMediaGiveawayResults (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaGiveawayResults"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaGiveawayResults

*Конструктор из схемы TL.*

> A [giveaway](https://core.telegram.org/api/giveaways) with public winners has finished, this constructor contains info about the winners.

## Определение TL

```
messageMediaGiveawayResults#ceaa3ea1 flags:# only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:long additional_peers_count:flags.3?int launch_msg_id:int winners_count:int unclaimed_count:int winners:Vector<long> months:flags.4?int stars:flags.5?long prize_description:flags.1?string until_date:int = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| only_new_subscribers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, only new subscribers starting from the giveaway creation date participated in the giveaway. |
| refunded | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, the giveaway was canceled and was fully refunded. |
| channel_id | [long](/type/long/) | ID of the channel/supergroup that was automatically [boosted](https://core.telegram.org/api/boost) by the winners of the giveaway for duration of the Premium subscription. |
| additional_peers_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Number of other channels that participated in the giveaway. |
| launch_msg_id | [int](/type/int/) | Identifier of the message with the giveaway in channel_id. |
| winners_count | [int](/type/int/) | Total number of winners in the giveaway. |
| unclaimed_count | [int](/type/int/) | Number of not-yet-claimed prizes. |
| winners | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Up to 100 user identifiers of the winners of the giveaway. |
| months | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Duration in months of each [Telegram Premium](https://core.telegram.org/api/premium) subscription in the giveaway. |
| stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[long](/type/long/) | For [Telegram Star giveaways](https://core.telegram.org/api/stars#star-giveaways), the total number of Telegram Stars being given away. |
| prize_description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Can contain a textual description of additional giveaway prizes. |
| until_date | [int](/type/int/) | Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in initial parameters of the giveaway. |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
