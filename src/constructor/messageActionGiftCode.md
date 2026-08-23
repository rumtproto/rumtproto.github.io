---
title: "messageActionGiftCode (конструктор)"
original: "https://core.telegram.org/constructor/messageActionGiftCode"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionGiftCode

*Конструктор из схемы TL.*

> Contains a [Telegram Premium giftcode link](https://core.telegram.org/api/links#premium-giftcode-links).

## Определение TL

```
messageActionGiftCode#31c48347 flags:# via_giveaway:flags.0?true unclaimed:flags.5?true boost_peer:flags.1?Peer days:int slug:string currency:flags.2?string amount:flags.2?long crypto_currency:flags.3?string crypto_amount:flags.3?long message:flags.4?TextWithEntities = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| via_giveaway | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this gift code was received from a [giveaway »](https://core.telegram.org/api/giveaways) started by a channel/supergroup we're subscribed to. |
| unclaimed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, the link was not [redeemed](https://core.telegram.org/api/links#premium-giftcode-links) yet. |
| boost_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | Identifier of the channel/supergroup that created the gift code [either directly or through a giveaway](https://core.telegram.org/api/giveaways): if we import this giftcode link, we will also automatically [boost](https://core.telegram.org/api/boost) this channel/supergroup. |
| days | [int](/type/int/) | Duration of the gifted Telegram Premium subscription, in days. |
| slug | [string](/type/string/) | Slug of the [Telegram Premium giftcode link](https://core.telegram.org/api/links#premium-giftcode-links) |
| currency | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| crypto_currency | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | If set, the gift was made using the specified cryptocurrency. |
| crypto_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[long](/type/long/) | If crypto_currency is set, contains the paid amount, in the smallest units of the cryptocurrency. |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[TextWithEntities](/type/TextWithEntities/) | Message attached with the gift |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Bot Payments API](https://core.telegram.org/bots/payments)
