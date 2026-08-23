---
title: "fragment.collectibleInfo (конструктор)"
original: "https://core.telegram.org/constructor/fragment.collectibleInfo"
section: ref
kind: constructor
layout: layout.njk
---

# fragment.collectibleInfo

*Конструктор из схемы TL.*

> Info about a [fragment collectible](https://core.telegram.org/api/fragment).

## Определение TL

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purchase_date | [int](/type/int/) | Purchase date (unixtime) |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code for amount |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| crypto_currency | [string](/type/string/) | Cryptocurrency name. |
| crypto_amount | [long](/type/long/) | Price, in the smallest units of the cryptocurrency. |
| url | [string](/type/string/) | [Fragment](https://fragment.com) URL with more info about the collectible |

## Тип

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Fragment collectibles](https://core.telegram.org/api/fragment)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
