---
title: "payments.giveawayInfoResults (конструктор)"
original: "https://core.telegram.org/constructor/payments.giveawayInfoResults"
section: ref
kind: constructor
layout: layout.njk
---

# payments.giveawayInfoResults

*Конструктор из схемы TL.*

> A [giveaway](https://core.telegram.org/api/giveaways) has ended.

## Определение TL

```
payments.giveawayInfoResults#e175e66f flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.3?string stars_prize:flags.4?long finish_date:int winners_count:int activated_count:flags.2?int = payments.GiveawayInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| winner | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether we're one of the winners of this giveaway. |
| refunded | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the giveaway was canceled and was fully refunded. |
| start_date | [int](/type/int/) | Start date of the giveaway |
| gift_code_slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | If we're one of the winners of this giveaway, contains the [Premium gift code](https://core.telegram.org/api/links#premium-giftcode-links), see [here »](https://core.telegram.org/api/giveaways) for more info on the full giveaway flow. |
| stars_prize | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | If we're one of the winners of this [Telegram Star giveaway](https://core.telegram.org/api/giveaways#star-giveaways), the number [Telegram Stars](https://core.telegram.org/api/stars) we won. |
| finish_date | [int](/type/int/) | End date of the giveaway. May be bigger than the end date specified in parameters of the giveaway. |
| winners_count | [int](/type/int/) | Number of winners in the giveaway |
| activated_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Number of winners, which activated their [gift codes](https://core.telegram.org/api/links#premium-giftcode-links). |

## Тип

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
