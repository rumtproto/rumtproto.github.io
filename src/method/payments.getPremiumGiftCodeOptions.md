---
title: "payments.getPremiumGiftCodeOptions (метод)"
original: "https://core.telegram.org/method/payments.getPremiumGiftCodeOptions"
section: ref
kind: method
layout: layout.njk
---

# payments.getPremiumGiftCodeOptions

*Метод из схемы TL.*

> Obtain a list of Telegram Premium [giveaway/gift code »](https://core.telegram.org/api/giveaways) options.

## Определение TL

```
---functions---
payments.getPremiumGiftCodeOptions#2757ba54 flags:# boost_peer:flags.0?InputPeer = Vector<PremiumGiftCodeOption>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| boost_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | The channel that will start the giveaway |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[PremiumGiftCodeOption](/type/PremiumGiftCodeOption/)\>

## Only users can use this method

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
