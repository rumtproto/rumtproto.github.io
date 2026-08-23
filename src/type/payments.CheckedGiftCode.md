---
title: "Payments.CheckedGiftCode (тип)"
original: "https://core.telegram.org/type/payments.CheckedGiftCode"
section: ref
kind: type
layout: layout.njk
---

# Payments.CheckedGiftCode

*Тип из схемы TL.*

> Info about a [Telegram Premium Giftcode](https://core.telegram.org/api/giveaways).

## Определение TL

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;

---functions---

payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.checkedGiftCode](/constructor/payments.checkedGiftCode/) | Contains info about a [Telegram Premium giftcode link](https://core.telegram.org/api/links#premium-giftcode-links). |

## Методы

| Method | Описание |
|---|---|
| [payments.checkGiftCode](/method/payments.checkGiftCode/) | Obtain information about a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
