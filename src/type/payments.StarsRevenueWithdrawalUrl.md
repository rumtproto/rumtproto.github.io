---
title: "payments.StarsRevenueWithdrawalUrl (тип)"
original: "https://core.telegram.org/type/payments.StarsRevenueWithdrawalUrl"
section: ref
kind: type
layout: layout.njk
---

# payments.StarsRevenueWithdrawalUrl

*Тип из схемы TL.*

> Contains the URL to use to [withdraw Telegram Star revenue](https://core.telegram.org/api/stars#withdrawing-revenue).

## Определение TL

```
payments.starsRevenueWithdrawalUrl#1dab80b7 url:string = payments.StarsRevenueWithdrawalUrl;

---functions---

payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starsRevenueWithdrawalUrl](/constructor/payments.starsRevenueWithdrawalUrl/) | Contains the URL to use to [withdraw Telegram Star revenue](https://core.telegram.org/api/stars#withdrawing-revenue). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarsRevenueWithdrawalUrl](/method/payments.getStarsRevenueWithdrawalUrl/) | Withdraw funds from a channel or bot's [star balance »](https://core.telegram.org/api/stars#withdrawing-revenue). |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
