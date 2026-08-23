---
title: "inputInvoiceStarGiftDropOriginalDetails (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftDropOriginalDetails"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGiftDropOriginalDetails

*Конструктор из схемы TL.*

> Used to pay for for the removal of the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute from a collectible gift, see [here »](https://core.telegram.org/api/gifts#dropping-the-original-details-of-an-upgraded-gift) for the full flow.

## Определение TL

```
inputInvoiceStarGiftDropOriginalDetails#923d8d1 stargift:InputSavedStarGift = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The collectible gift whose [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute should be removed. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](https://core.telegram.org/api/gifts), before it was upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
