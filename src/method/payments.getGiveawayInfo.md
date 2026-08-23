---
title: "payments.getGiveawayInfo (метод)"
original: "https://core.telegram.org/method/payments.getGiveawayInfo"
section: ref
kind: method
layout: layout.njk
---

# payments.getGiveawayInfo

*Метод из схемы TL.*

> Obtain information about a [Telegram Premium giveaway »](https://core.telegram.org/api/giveaways).

## Определение TL

```
payments.giveawayInfo#4367daa0 flags:# participating:flags.0?true preparing_results:flags.3?true start_date:int joined_too_early_date:flags.1?int admin_disallowed_chat_id:flags.2?long disallowed_country:flags.4?string = payments.GiveawayInfo;
payments.giveawayInfoResults#e175e66f flags:# winner:flags.0?true refunded:flags.1?true start_date:int gift_code_slug:flags.3?string stars_prize:flags.4?long finish_date:int winners_count:int activated_count:flags.2?int = payments.GiveawayInfo;
---functions---
payments.getGiveawayInfo#f4239425 peer:InputPeer msg_id:int = payments.GiveawayInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer where the giveaway was posted. |
| msg_id | [int](/type/int/) | Message ID of the [messageActionGiveawayLaunch](/constructor/messageActionGiveawayLaunch/) service message |

## Результат

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [messageActionGiveawayLaunch](/constructor/messageActionGiveawayLaunch/)

A [giveaway](https://core.telegram.org/api/giveaways) was started.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
