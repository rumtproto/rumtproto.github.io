---
title: "inputInvoiceStarGiftTransfer (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftTransfer"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGiftTransfer

*Конструктор из схемы TL.*

> Used to [pay to transfer a collectible gift to another peer](https://core.telegram.org/api/gifts#transferring-collectible-gifts), see the [gifts »](https://core.telegram.org/api/gifts#transferring-collectible-gifts) documentation for more info.

## Определение TL

```
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The identifier of the received gift |
| to_id | [InputPeer](/type/InputPeer/) | The destination peer |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
