---
title: "payments.getStarsRevenueAdsAccountUrl (метод)"
original: "https://core.telegram.org/method/payments.getStarsRevenueAdsAccountUrl"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsRevenueAdsAccountUrl

*Метод из схемы TL.*

> Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for channel/bot in `peer`, paid using the Telegram Stars owned by the specified `peer`, see [here »](https://core.telegram.org/api/stars#paying-for-ads) for more info.

## Определение TL

```
payments.starsRevenueAdsAccountUrl#394e7f21 url:string = payments.StarsRevenueAdsAccountUrl;
---functions---
payments.getStarsRevenueAdsAccountUrl#d1d7efc5 peer:InputPeer = payments.StarsRevenueAdsAccountUrl;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Channel or bot that owns the stars. |

## Результат

[payments.StarsRevenueAdsAccountUrl](/type/payments.StarsRevenueAdsAccountUrl/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
