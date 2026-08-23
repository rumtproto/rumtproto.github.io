---
title: "connectedBotStarRef (конструктор)"
original: "https://core.telegram.org/constructor/connectedBotStarRef"
section: ref
kind: constructor
layout: layout.njk
---

# connectedBotStarRef

*Конструктор из схемы TL.*

> Info about an [active affiliate program we have with a Mini App](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

## Определение TL

```
connectedBotStarRef#19a13f71 flags:# revoked:flags.1?true url:string date:int bot_id:long commission_permille:int duration_months:flags.0?int participants:long revenue:long = ConnectedBotStarRef;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, this affiliation was revoked by the affiliate using [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/), or by the affiliation program owner using [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/) |
| url | [string](/type/string/) | [Referral link](https://core.telegram.org/api/links#referral-links) to be shared |
| date | [int](/type/int/) | When did we affiliate with bot_id |
| bot_id | [long](/type/long/) | ID of the mini app that created the affiliate program |
| commission_permille | [int](/type/int/) | The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by bot_id |
| duration_months | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Number of months the program will be active; if not set, there is no expiration date. |
| participants | [long](/type/long/) | The number of users that used the affiliate program |
| revenue | [long](/type/long/) | The number of Telegram Stars that were earned by the affiliate program |

## Тип

[ConnectedBotStarRef](/type/ConnectedBotStarRef/)

## Related pages

#### [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/)

Leave a bot's [affiliate program »](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

#### [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/)

Create, edit or delete the [affiliate program](https://core.telegram.org/api/bots/referrals) of a bot we own

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
