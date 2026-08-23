---
title: "updateStarsRevenueStatus (конструктор)"
original: "https://core.telegram.org/constructor/updateStarsRevenueStatus"
section: ref
kind: constructor
layout: layout.njk
---

# updateStarsRevenueStatus

*Конструктор из схемы TL.*

> The [Telegram Star balance of a channel/bot we own has changed »](https://core.telegram.org/api/stars#revenue-statistics).

## Определение TL

```
updateStarsRevenueStatus#a584b019 peer:Peer status:StarsRevenueStatus = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Channel/bot |
| status | [StarsRevenueStatus](/type/StarsRevenueStatus/) | New Telegram Star balance. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
