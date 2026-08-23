---
title: "inputInvoiceStarGiftUpgrade (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftUpgrade"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGiftUpgrade

*Конструктор из схемы TL.*

> Used to [pay to upgrade a Gift to a collectible gift](https://core.telegram.org/api/gifts#upgrade-a-gift-to-a-collectible-gift), see the [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts) documentation for more info on the full flow.

## Определение TL

```
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| keep_original_details | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag to keep the original gift text, sender and receiver in the upgraded gift as a [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute. |
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The identifier of the received gift to upgrade. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
