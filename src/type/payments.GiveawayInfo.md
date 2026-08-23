---
title: "Payments.GiveawayInfo (тип)"
original: "https://core.telegram.org/type/payments.GiveawayInfo"
section: ref
kind: type
layout: layout.njk
---

# Payments.GiveawayInfo

*Тип из схемы TL.*

> Info about a [Telegram Premium Giveaway](https://core.telegram.org/api/giveaways).

## Определение TL

```
payments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;
payments.giveawayInfoResults#e175e66f flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.3?string stars_prize:flags.4?long finish_date:int winners_count:int activated_count:flags.2?int = payments.GiveawayInfo;

---functions---

payments.getGiveawayInfo#f4239425 peer:InputPeer msg_id:int = payments.GiveawayInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.giveawayInfo](/constructor/payments.giveawayInfo/) | Contains info about an ongoing [giveaway](https://core.telegram.org/api/giveaways). If neither the participating, joined_too_early_date, admin_disallowed_chat_id or disallowed_country flags are set, the user is not currently participating in the giveaway but could participate by joining all the channels specified in the [messageMediaGiveaway](/constructor/messageMediaGiveaway/).channels field. |
| [payments.giveawayInfoResults](/constructor/payments.giveawayInfoResults/) | A [giveaway](https://core.telegram.org/api/giveaways) has ended. |

## Методы

| Method | Описание |
|---|---|
| [payments.getGiveawayInfo](/method/payments.getGiveawayInfo/) | Obtain information about a [Telegram Premium giveaway »](https://core.telegram.org/api/giveaways). |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
