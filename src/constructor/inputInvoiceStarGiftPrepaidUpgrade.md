---
title: "inputInvoiceStarGiftPrepaidUpgrade (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftPrepaidUpgrade"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGiftPrepaidUpgrade

*Конструктор из схемы TL.*

> [Separately prepay for the upgrade of a gift »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade).

## Определение TL

```
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer that owns the gift. |
| hash | [string](/type/string/) | The upgrade hash from [messageActionStarGift](/constructor/messageActionStarGift/).prepaid_upgrade_hash or [savedStarGift](/constructor/savedStarGift/).prepaid_upgrade_hash. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [savedStarGift](/constructor/savedStarGift/)

Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
