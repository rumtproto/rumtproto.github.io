---
title: "inputInvoiceStarGiftResale (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftResale"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGiftResale

*Конструктор из схемы TL.*

> Used to buy a [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts) currently up on resale, see [here](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info on the full flow.

## Определение TL

```
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| ton | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Buy the gift using TON. |
| slug | [string](/type/string/) | Slug of the gift to buy. |
| to_id | [InputPeer](/type/InputPeer/) | The receiver of the gift. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
