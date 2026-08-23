---
title: "payments.giveawayInfo (конструктор)"
original: "https://core.telegram.org/constructor/payments.giveawayInfo"
section: ref
kind: constructor
layout: layout.njk
---

# payments.giveawayInfo

*Конструктор из схемы TL.*

> Contains info about an ongoing [giveaway](https://core.telegram.org/api/giveaways).
> If neither the `participating`, `joined_too_early_date`, `admin_disallowed_chat_id` or `disallowed_country` flags are set, the user is not currently participating in the giveaway but could participate by joining all the channels specified in the [messageMediaGiveaway](/constructor/messageMediaGiveaway/).`channels` field.

## Определение TL

```
payments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| participating | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | The current user is participating in the giveaway. |
| preparing_results | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, the giveaway has ended and the results are being prepared. |
| start_date | [int](/type/int/) | When was the giveaway started |
| joined_too_early_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | The current user can't participate in the giveaway, because they were already a member of the channel when the giveaway started, and the only_new_subscribers was set when starting the giveaway. |
| admin_disallowed_chat_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | If set, the current user can't participate in the giveaway, because they are an administrator in one of the channels (ID specified in this flag) that created the giveaway. |
| disallowed_country | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | If set, the current user can't participate in this giveaway, because their phone number is from the specified disallowed country (specified as a two-letter ISO 3166-1 alpha-2 country code). |

## Тип

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Contains info about a [giveaway, see here »](https://core.telegram.org/api/giveaways) for more info.
