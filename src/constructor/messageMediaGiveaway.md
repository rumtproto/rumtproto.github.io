---
title: "messageMediaGiveaway (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaGiveaway"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaGiveaway

*Конструктор из схемы TL.*

> Contains info about a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info.

## Определение TL

```
messageMediaGiveaway#aa073beb flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:Vector<long> countries_iso2:flags.1?Vector<string> prize_description:flags.3?string quantity:int months:flags.4?int stars:flags.5?long until_date:int = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| only_new_subscribers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, only new subscribers starting from the giveaway creation date will be able to participate to the giveaway. |
| winners_are_visible | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, giveaway winners are public and will be listed in a [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/) message that will be automatically sent to the channel once the giveaway ends. |
| channels | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | The channels that the user must join to participate in the giveaway. |
| countries_iso2 | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | If set, only users residing in these countries can participate in the giveaway, (specified as a list of two-letter ISO 3166-1 alpha-2 country codes); otherwise there are no country-based limitations. |
| prize_description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Can contain a textual description of additional giveaway prizes. |
| quantity | [int](/type/int/) | Number of [Telegram Premium](https://core.telegram.org/api/premium) subscriptions given away. |
| months | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | Duration in months of each [Telegram Premium](https://core.telegram.org/api/premium) subscription in the giveaway. |
| stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[long](/type/long/) | For [Telegram Star giveaways](https://core.telegram.org/api/stars#star-giveaways), the total number of Telegram Stars being given away. |
| until_date | [int](/type/int/) | The end date of the giveaway. |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/)

A [giveaway](https://core.telegram.org/api/giveaways) with public winners has finished, this constructor contains info about the winners.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
