---
title: "payments.StarsRevenueAdsAccountUrl (тип)"
original: "https://core.telegram.org/type/payments.StarsRevenueAdsAccountUrl"
section: ref
kind: type
layout: layout.njk
---

# payments.StarsRevenueAdsAccountUrl

*Тип из схемы TL.*

> Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using [Telegram Stars](https://core.telegram.org/api/stars#paying-for-ads).

## Определение TL

```
payments.starsRevenueAdsAccountUrl#394e7f21 url:string = payments.StarsRevenueAdsAccountUrl;

---functions---

payments.getStarsRevenueAdsAccountUrl#d1d7efc5 peer:InputPeer = payments.StarsRevenueAdsAccountUrl;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starsRevenueAdsAccountUrl](/constructor/payments.starsRevenueAdsAccountUrl/) | Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using [Telegram Stars](https://core.telegram.org/api/stars#paying-for-ads). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarsRevenueAdsAccountUrl](/method/payments.getStarsRevenueAdsAccountUrl/) | Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for channel/bot in peer, paid using the Telegram Stars owned by the specified peer, see [here »](https://core.telegram.org/api/stars#paying-for-ads) for more info. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
