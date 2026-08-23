---
title: "payments.editConnectedStarRefBot (метод)"
original: "https://core.telegram.org/method/payments.editConnectedStarRefBot"
section: ref
kind: method
layout: layout.njk
---

# payments.editConnectedStarRefBot

*Метод из схемы TL.*

> Leave a bot's [affiliate program »](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

## Определение TL

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.editConnectedStarRefBot#e4fca4a3 flags:# revoked:flags.0?true peer:InputPeer link:string = payments.ConnectedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, leaves the bot's affiliate program |
| peer | [InputPeer](/type/InputPeer/) | The peer that was affiliated |
| link | [string](/type/string/) | The affiliate link to revoke |

## Результат

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARREF_HASH_REVOKED | The specified affiliate link was already revoked. |

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
