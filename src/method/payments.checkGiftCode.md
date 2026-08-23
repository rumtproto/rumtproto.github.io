---
title: "payments.checkGiftCode (метод)"
original: "https://core.telegram.org/method/payments.checkGiftCode"
section: ref
kind: method
layout: layout.njk
---

# payments.checkGiftCode

*Метод из схемы TL.*

> Obtain information about a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways)

## Определение TL

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
---functions---
payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | The giftcode to check |

## Результат

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GIFT_SLUG_EXPIRED | The specified gift slug has expired. |
| 400 | GIFT_SLUG_INVALID | The specified slug is invalid. |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
