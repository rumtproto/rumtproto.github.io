---
title: "PremiumGiftCodeOption (тип)"
original: "https://core.telegram.org/type/PremiumGiftCodeOption"
section: ref
kind: type
layout: layout.njk
---

# PremiumGiftCodeOption

*Тип из схемы TL.*

> [Giveaway](https://core.telegram.org/api/giveaways) option.

## Определение TL

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [premiumGiftCodeOption](/constructor/premiumGiftCodeOption/) | Contains info about a [giveaway/gift](https://core.telegram.org/api/giveaways) option. |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
